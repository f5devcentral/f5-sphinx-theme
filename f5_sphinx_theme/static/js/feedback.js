const data = {
  surveyMonkey: {
    site: "site",
    page: "page",
    version: "version"
  },
  medallia: {
    site: "subsite",
    page: "page",
    version: "version"
  }
}

const surveyMonkeyDivId = "survey-sm-div";
const surveyMonkeyAId = "survey-sm";
const surveyMonkeyUrlAttr = 'survey-sm-url';

const htmlString = ".html";

// 'window' is a global variable. Define 'medalliaData' global variable here.
var medalliaData = {};
const medalliaDivClassName = "medallia_survey";

$(document).ready(function () {
  const surveyMonkeyDiv = document.getElementById(surveyMonkeyDivId);
  const medalliaDivs = document.getElementsByClassName(medalliaDivClassName);

  // SurveyMonkey and Medallia are disabled.
  if (surveyMonkeyDiv == null && !medalliaDivs.length) {
    return;
  }

  if (surveyMonkeyDiv != null) {
    renderSM(surveyMonkeyDiv);
  }

  if (medalliaDivs.length >= 1) {
    renderMedallia();
  }
})

function renderSM(smDiv) {
  // Get SurveyMonkey URL from div id 'survey-sm-div'.
  const surveyMonkeyUrl = smDiv.getAttribute(surveyMonkeyUrlAttr);
  const surveyMonkey = new URL(surveyMonkeyUrl);

  // Get the current URL.
  const url = new URL(window.location.href);
  const urlPathNames = url.pathname.split('/').filter(Boolean);

  // Otherwise determine the custom variables for SurveyMonkey.
  if (urlPathNames[urlPathNames.length - 1].endsWith(htmlString)) {
    if (urlPathNames.length == 1) {
      surveyMonkey.searchParams.append(data.surveyMonkey.page, urlPathNames[urlPathNames.length - 1]);
    } else if (urlPathNames.length == 2) {
      surveyMonkey.searchParams.append(data.surveyMonkey.site, urlPathNames[urlPathNames.length - 2]);
      surveyMonkey.searchParams.append(data.surveyMonkey.page, urlPathNames[urlPathNames.length - 1]);
    } else if (urlPathNames.length >= 3) {
      surveyMonkey.searchParams.append(data.surveyMonkey.site, urlPathNames[urlPathNames.length - 3]);
      surveyMonkey.searchParams.append(data.surveyMonkey.version, urlPathNames[urlPathNames.length - 2]);
      surveyMonkey.searchParams.append(data.surveyMonkey.page, urlPathNames[urlPathNames.length - 1]);
    }
    // Modify SurveyMonkey href.
    var surveyMonkeyLink = document.getElementById(surveyMonkeyAId);
    if (surveyMonkeyLink != null) {
      console.debug('Modifying SurveyMonkey link');
      surveyMonkeyLink.href = surveyMonkey.toString();
    }
  }
}

function renderMedallia() {
  // Initialize data Medallia variables.
  var medalliaDataSite, medalliaDataVersion, medalliaDataPage;
  // Get the current URL.
  const url = new URL(window.location.href);
  // Create array with each element split by '/' character in url pathname. Then, remove and empty array entries.
  const urlPathNames = url.pathname.split('/').filter(Boolean);

  // Assign subsite, page, and version information.
  if (urlPathNames.length == 1) {
    medalliaDataPage = urlPathNames[urlPathNames.length - 1];
  } else if (urlPathNames.length == 2) {
    medalliaDataSite = urlPathNames[urlPathNames.length - 2];
    medalliaDataPage = urlPathNames[urlPathNames.length - 1];
  } else if (urlPathNames.length >= 3) {
    medalliaDataSite = urlPathNames[urlPathNames.length - 3];
    medalliaDataVersion = urlPathNames[urlPathNames.length - 2];
    medalliaDataPage = urlPathNames[urlPathNames.length - 1];
  }

  // Set HTML global variable medalliaData.
  window.medalliaData[data.medallia.site] = medalliaDataSite;
  window.medalliaData[data.medallia.version] = medalliaDataVersion;
  window.medalliaData[data.medallia.page] = medalliaDataPage;
}
