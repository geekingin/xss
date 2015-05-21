var http=require('http');

var server=http.createServer(function(req,res){

	// res.setHeader('Content-Type','text/html');
	res.setHeader('Set-Cookie','password=123456');

	var h1=decodeURIComponent(req.url.split('?')[1]);
	var html="<!DOCTYPE html>"
			+"<html>"
			+"<head>"
			+"<title></title>"
			+"</head>"
			+"<body><h1>YOU ARE FINDING :  "
			+h1.split("'").join('"').split('<').join('      <')			//#1 	反射型成功
			// +h1														//#2	反射型失败
			+"</h1></body>"
			+"</html>"
	res.end(html);
	console.log(h1);
}).listen(3002);