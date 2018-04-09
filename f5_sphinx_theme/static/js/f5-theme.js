$(document).ready(function () {
  $('#sidebarCollapse, #dismiss').on('click', function () {
    $('#sidebar').toggleClass('active');
    $('#content').toggleClass('active');
  });
  $("#other_versions").on('shown.bs.collapse hide.bs.collapse', function(){
      $('#version_arrow').toggleClass('active');
  });
});