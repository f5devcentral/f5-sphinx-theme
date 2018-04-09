import React from 'react';
import ReactDOM from 'react-dom';
import {VersionSelector, VersionSelectorArrow} from './widgets/versions.jsx';

function getVersionFromMeta(){
  var tag = document.getElementsByName('version')
  return tag[0].getAttribute('content');
}

ReactDOM.render(
  <VersionSelector version={getVersionFromMeta()}/>,
  document.getElementById('version_selector_wrapper')
);

$("#other_versions").on('shown.bs.collapse', function(){
  ReactDOM.render(
    <VersionSelectorArrow expanded={true}/>, document.getElementById('version_arrow_wrapper')
  );
});
$("#other_versions").on('hide.bs.collapse', function(){
  ReactDOM.render(
    <VersionSelectorArrow expanded={false}/>, document.getElementById('version_arrow_wrapper')
  );
});