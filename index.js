/**
 * Author: masakokh
 * Year: 2022
 * Note: Main file
 */
const AJaxi	=	(config) => {
	//
    var xmlhttp;

	//
	if (window.XMLHttpRequest) {
		//code for Firefox, Chrome, or Webkit
		xmlhttp	= new XMLHttpRequest()
	}
	else {
		//code for the old Internet Explorer
		xmlhttp	= new ActiveXObject('Microsoft.XMLHTTP')
	}

	// configuration
    if (!config.url) {
        return;
    }

	// method
    if (!config.method) {
        config.method = true
    }

	//
    xmlhttp.onreadystatechange = () => {
        // loading
    	if (xmlhttp.readyState == 3) {
			// loading
    	}

        // ready with status okay
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        	// request finished
            if (config.success) {
                config.success(xmlhttp.responseText, xmlhttp.readyState)
            }
        }
        // error
        else {
            if (config.error) {
                config.error(xmlhttp.statusText)
            }
        }
    }

	// Get method
	if (config.type != undefined && (config.type == 'get' || config.type == 'GET')) {
		xmlhttp.open('GET', config.url, config.method)
	}
	// Post method
	else {
		xmlhttp.open('POST', config.url, config.method)
	}

	// open then allow to set header
	if (config.header != undefined) {
		for (var prop in config.header) {
			xmlhttp.setRequestHeader(prop, config.header[prop])
		}
	}

	// content type JSON
	if (config.contentType == 'json') {
		xmlhttp.setRequestHeader('Content-Type', 'application/json; charset=UTF-8')
		xmlhttp.getResponseHeader('Content-type', 'application/json')
		// send out
		xmlhttp.send(JSON.stringify(config.data))
	}
	// Form data
	else if (config.contentType == 'form') {
		xmlhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
		// send out
		xmlhttp.send(config.data)
	}
	// json
	else {
		// request
		xmlhttp.setRequestHeader('Content-Type', 'application/json; charset=UTF-8')
		// response
		xmlhttp.getResponseHeader('Content-type', 'application/json')
		// send out
		xmlhttp.send(JSON.stringify(config.data))
	}
}
