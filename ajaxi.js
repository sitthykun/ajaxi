/*!
 * Author: masakokh
 * Year: 2022
 * Note: Main file
 * Version: 1.0.0
 */
const AJaxi	=	(config) => {
	//
    let xmlHttp;
    let httpMethod = {
    	'DELETE': 'DELETE'
    	, 'GET' : 'GET'
    	, 'POST' : 'POST'
    	, 'PUT': 'PUT'
    }

	// verify request library
	if (window.XMLHttpRequest)
		// Firefox, Chrome, or Webkit
		xmlHttp	= new XMLHttpRequest()

	// intridient engine
	else
		// the old Internet Explorer
		xmlHttp	= new ActiveXObject('Microsoft.XMLHTTP')

	// configuration
    if (!config.url)
        return;

	// method
    if (!config.method)
        config.method = true

	//
    xmlHttp.onreadystatechange = () => {
        // loading
    	if (xmlHttp.readyState == 3) {
			// loading
    	}

        // ready with status okay
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
        	// request finished
            if (config.success)
                config.success(xmlHttp.responseText, xmlHttp.readyState)

        // error
        else
            if (config.error)
                config.error(xmlHttp.statusText)
    }

	// Get method
	if (config.type != undefined)
		// POST method (frequency)
		if (config.type.toString().toUpperCase() == httpMethod.POST)
			xmlHttp.open(httpMethod.POST, config.url, config.method)

		// DELETE method
		else if (config.type.toString().toUpperCase() == httpMethod.DELETE)
			xmlHttp.open(httpMethod.DELETE, config.url, config.method)
		
		// PUT method
		else if (config.type.toString().toUpperCase() == httpMethod.PUT)
			xmlHttp.open(httpMethod.PUT, config.url, config.method)
		
		// GET method or default
		else
			xmlHttp.open(httpMethod.GET, config.url, config.method)

	// GET method or default
	else
		xmlHttp.open(httpMethod.GET, config.url, config.method)

	// open then allow to set header
	if (config.header != undefined)
		for (var prop in config.header)
			xmlHttp.setRequestHeader(prop, config.header[prop])

	// content type JSON
	if (config.contentType == 'json') {
		xmlHttp.setRequestHeader('Content-Type', 'application/json; charset=UTF-8')
		xmlHttp.getResponseHeader('Content-type', 'application/json')
		// send out
		xmlHttp.send(JSON.stringify(config.data))
	}
	// form data
	else if (config.contentType == 'form') {
		xmlHttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
		// send out
		xmlHttp.send(config.data)
	}
	// default is json format
	else {
		// request
		xmlHttp.setRequestHeader('Content-Type', 'application/json; charset=UTF-8')
		// response
		xmlHttp.getResponseHeader('Content-type', 'application/json')
		// send out
		xmlHttp.send(JSON.stringify(config.data))
	}
}