var http = require('http');
var path = require('path');
var fs = require('fs');

var server = http.createServer(handleRequest);

function handleRequest(req,res){

  var pathname = req.url;

  if (pathname == '/'){
    pathname = '/html/main.html';
  }

  var ext = path.extname(pathname);

  var typeExt = {
    '.html': 'text/html',
    '.js': 'text/javascript',
    '.css': 'text/css'
  };

  var contentType = typeExt[ext] || 'text/plain';

  fs.readFile(__dirname + pathname,

  function(err, data){
    if (err){
      res.writeHead(500);
      return res.end('Error loading ' + pathname);
    }
    res.writeHead(200, {'Content-Type': contentType});
    res.end(data);
  });
}


server.listen(3000);
