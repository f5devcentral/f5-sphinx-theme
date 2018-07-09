$(document).ready(function () {
  $('#sidebarCollapse, #dismiss').on('click', function () {
    $('#sidebar').toggleClass('active');
    $('#content').toggleClass('active');
  });
});
$(document).ready(function () {
  var loc = window.location,
      host = loc.protocol + '//' + loc.host;
  $('#clouddocs-header').load(host + '/header.html');
  $('#clouddocs-footer').load(host + '/footer.html');
});
