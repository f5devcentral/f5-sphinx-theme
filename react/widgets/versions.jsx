import React from 'react';
import axios from 'axios';

class VersionSelectorArrow extends React.Component {
  constructor(props) {
    super(props);
    this.state = { expanded: this.props.expanded };
    this.handleCollapsibleEventBind = this.handleCollapsibleEvent.bind(this);
  }

  handleCollapsibleEvent(event){
    this.setState({expanded: (event.type === 'shown') ? true : false });
  }

  componentDidMount(){
    $('#other_versions')
      .on('shown.bs.collapse hidden.bs.collapse', this.handleCollapsibleEventBind);
  }

  componentWillUnmount(){
    $('#other_versions')
      .off('shown.bs.collapse hidden.bs.collapse', this.handleCollapsibleEventBind);
  }

  render (){
    if (this.state.expanded)
      return  (<span id="version_arrow" className="fa fa-sort-asc fa-2x"></span>);
    else
      return  (<span id="version_arrow" className="fa fa-sort-desc fa-2x"></span>);
  }
}

class VersionSelector extends React.Component {
  constructor(props) {
    super(props);
    // Dont bother to render if there is not currentVersion defined
    this.hasBrowserStorage = Boolean(window.sessionStorage); // Check for web storage support
    this.versionMetaString = this.getProjectSafeFromMetaTag();
    this.versionMetaPath = this.getVersionMetaPathFromDOM();
    let currentVersion = this.getVersionFromMetaTag();
    this.state = {
      hasError: false,
      hasCollapsible: false,
      currentVersion: currentVersion,
    };
    if (! currentVersion){
      console.error('Current version not available from meta version meta tag.');
      this.state.hasError = true;
    }
    if (! this.versionMetaString.length) {
      console.error('Project name not available from project_safe meta tag.');
      this.state.hasError = true;
    }
  }

  getProjectSafeFromMetaTag(){
    var tag = document.getElementsByName('project_safe');
    let project = tag[0].getAttribute('content');
    return (project) ? project + 'VersionMeta' : '';
  }

  getVersionFromMetaTag(){
    var tag = document.getElementsByName('version');
    return tag[0].getAttribute('content');
  }

  getVersionMetaPathFromDOM(){
    var tag = document.getElementsByName('version_meta_path');
    return tag[0].getAttribute('content');
  }

  createNewState(data){
    let newState = Object.assign({}, this.state);
    newState.latestVersion = data.latestVersion;
    newState.otherVersions = data.otherVersions;
    newState.versionMetaTimestamp = data.versionMetaTimestamp;
    newState.hasCollapsible = true;
    return newState;
  }

  saveVersionMetaToStorage (data){
    if (! this.hasBrowserStorage) return null;
    let webStore = window.sessionStorage,
        state = JSON.stringify(data);
    webStore.setItem(this.versionMetaString, state);
  }

  getVersionMetaFromStorage(){
    if (! this.hasBrowserStorage) return null;
    let webStore = window.sessionStorage,
        versionMeta = webStore.getItem(this.versionMetaString);
    if (versionMeta)
      try {
        return JSON.parse(versionMeta);
      } catch (error) {
        console.error('Error with JSON parse from storage - ', error);
        return null;
      }
  }

  getVersionMetaFromAJAX(timestamp){
    axios.get(this.versionMetaPath, {responseType: 'json'})
      .then((res) => {
        // Update only if versionMeta from AJAX is newer
        if (res.data.versionMetaTimestamp > timestamp){
          this.setState(this.createNewState(res.data));
          this.saveVersionMetaToStorage(res.data);
        }
        return;
      })
      .catch((error) => {
        console.error('Error with AJAX GET -', error);
      });
  }

  componentDidMount(){
    if (! this.versionMetaPath)
      return console.error('No path for version meta data.');
    let versionMetaFromStorage = this.getVersionMetaFromStorage(),
        versionMetaTimestamp = 0;
    if (versionMetaFromStorage) {
      this.setState(this.createNewState(versionMetaFromStorage));
      versionMetaTimestamp = versionMetaFromStorage.versionMetaTimestamp;
    }
    // Check for updates to versionMeta
    this.getVersionMetaFromAJAX(versionMetaTimestamp);
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
    console.error('Error with react render - ', info, error);
  }

  otherVersionListItems() {
    if (this.state.otherVersions.length) {
      return (this.state.otherVersions.map((version) =>
        <dd key={version.name}><a href={version.url}>{version.name}</a></dd>
      ));
    } else {
      return (<dd>None</dd>);
    }
  }

  otherVersions(){
    if (! this.state.hasCollapsible) return;
    return (
      <div className="collapse" id="other_versions">
        <dl className="version_list">
          <dt>Latest version:</dt>
          <dd><a href={this.state.latestVersion.url}>{this.state.latestVersion.name}</a></dd>
        </dl>
        <dl className="version_list">
          <dt>Other versions:</dt>
          {this.otherVersionListItems()}
        </dl>
      </div>
    );
  }

  currentVersion(){
    return (
      <span id="current_version">
        Version: <span id="current_version_str">{this.state.currentVersion}</span>
      </span>
    );
  }

  versionSelectorType(){
    if (this.state.hasCollapsible){
      return (
        <div id="version_div" data-toggle="collapse" data-target="#other_versions"
          aria-expanded="false" aria-controls="other_versions">
          {this.currentVersion()}
          <span id="version_arrow_wrapper">
            <VersionSelectorArrow expanded={false} />
          </span>
        </div>
      );
    } else {
      return (
        <div id="version_div">
          {this.currentVersion()}
        </div>
      );
    }
  }

  render() {
    if ( ! this.state.hasError) {
      return (
        <div>
          {this.versionSelectorType()}
          {this.otherVersions()}
        </div>
      );
    } else {
      return (
        <div id="version_div">
          <span id="current_version" style={{color: 'red'}}>Error generating versions</span>
        </div>
      );
    }
  }
}


export {VersionSelector, VersionSelectorArrow};
