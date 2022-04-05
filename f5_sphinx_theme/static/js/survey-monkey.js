const surveyMonkeyVariablePage = "page";
const surveyMonkeyVariableSite = "site";
const surveyMonkeyVariableVersion = "version";

const surveyMonkeyDivId = "survey-sm-div";
const surveyMonkeyAId = "survey-sm";
const surveyMonkeyUrlAttr = 'survey-sm-url';

const htmlString = ".html";

$(document).ready(function () {
  var surveyMonkeyDiv = document.getElementById(surveyMonkeyDivId);
  // SurveyMonkey is disabled.
  if (surveyMonkeyDiv == null) {
    return;
  }

  // Get SurveyMonkey URL from div id 'survey-sm-div'.
  const surveyMonkeyUrl = surveyMonkeyDiv.getAttribute(surveyMonkeyUrlAttr);
  const surveyMonkey = new URL(surveyMonkeyUrl);

  // Get the current URL.
  const url = new URL(window.location.href);
  const urlPathNames = url.pathname.split('/').filter(Boolean);

  // If this is an 'index.html' or isn't even an html page, hide the SurveyMonkey link.
  if (url.pathname.trim().endsWith("index.html") || !url.pathname.endsWith(htmlString)) {
    console.debug('This page need to hide SurveyMonkey link')
    // Hide the SurveyMonkey Div because this pages doesn't need it.
    if (surveyMonkeyDiv != null) {
      $("#" + surveyMonkeyDivId).hide();
    }
  }
  // Otherwise determine the custom variables for SurveyMonkey.
  else if (urlPathNames[urlPathNames.length - 1].endsWith(htmlString)) {
    if (urlPathNames.length == 1) {
      surveyMonkey.searchParams.append(surveyMonkeyVariablePage, urlPathNames[urlPathNames.length - 1]);
    } else if (urlPathNames.length == 2) {
      surveyMonkey.searchParams.append(surveyMonkeyVariableSite, urlPathNames[urlPathNames.length - 2]);
      surveyMonkey.searchParams.append(surveyMonkeyVariablePage, urlPathNames[urlPathNames.length - 1]);
    } else if (urlPathNames.length == 3) {
      surveyMonkey.searchParams.append(surveyMonkeyVariableSite, urlPathNames[urlPathNames.length - 3]);
      surveyMonkey.searchParams.append(surveyMonkeyVariableVersion, urlPathNames[urlPathNames.length - 2]);
      surveyMonkey.searchParams.append(surveyMonkeyVariablePage, urlPathNames[urlPathNames.length - 1]);
    }
    // Modify SurveyMonkey href.
    var surveyMonkeyLink = document.getElementById(surveyMonkeyAId);
    if (surveyMonkeyLink != null) {
      console.debug('Modifying SurveyMonkey link');
      surveyMonkeyLink.href = surveyMonkey.toString();
    }
  }
})
