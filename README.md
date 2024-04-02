# ajaxi
It's a vanilla Ajax and minified by https://jscompress.com/

## Ex1: 
// full parameters
```
const axi1	= AJaxi({
	contentType: 'json'
	, data: {"miss": "mom"}
	, type: 'post'
	, url: 'https://niyum.com/method/post'
	, error(errorText) {
		console.log(errorText)
	}
	, success(responseJson, status) {
		console.log(responseJson)
	}
})
```

## Ex2:
// with some default parameter
```
const axi2	= AJaxi({
	// default contentType value is json
	data: {"miss": "mom"}
	// default method value is get method
	, url: 'https://niyum.com/method/get'
	, error(errorText) {
		console.log(errorText)
	}
	, success(responseJson, status) {
		console.log(responseJson)
	}
})
```
