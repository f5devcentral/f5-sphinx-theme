$(document).ready(function () {
  $('#sidebarCollapse, #dismiss').on('click', function () {
    $('#sidebar').toggleClass('active');
    $('#content').toggleClass('active');
  });
});
$(document).ready(function () {
    $("#clouddocs-header").load("https://clouddocs.f5networks.net/header.html");
    $("#clouddocs-footer").load("https://clouddocs.f5networks.net/footer.html");
});
