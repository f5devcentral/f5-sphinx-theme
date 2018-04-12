$(document).ready(function () {

        $('#sidebarCollapse, #dismiss').on('click', function () {
            $('#sidebar').toggleClass('active');
            $('#content').toggleClass('active');
        });

      });
