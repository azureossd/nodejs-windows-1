function apiCallAsync(type, data, apiURL, callback) {
    var response = null;
    var currentURL = window.location.hostname + ":" + window.location.port;
    var protocol = location.protocol;
    var apiURL = protocol + "//" + currentURL + apiURL;

    if (type == 'GET') {
        $.ajax({
            type: 'GET',
            contentType: 'application/json',
            url: apiURL,
            success: callback,
            error: callback
        });
    }
    if (type == 'POST') {
        response = $.ajax({
            type: 'POST',
            data: JSON.stringify(data),
            contentType: 'application/json',
            url: apiurl,
            success: callback,
            error: callback
        });
    }
}

