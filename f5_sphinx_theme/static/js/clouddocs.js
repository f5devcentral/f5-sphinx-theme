// Use the header and footer from the current host (clouddocs.f5.com or clouddocs.f5networks.net)
$(document).ready(function () {
    var loc = window.location,
    host = loc.protocol + '//' + loc.host;
    $('#clouddocs-header').load(host + '/header.html');
    $('#clouddocs-header').load(host + '/footer.html');
});
