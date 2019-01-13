var http = require('http');
var fs =   require('fs');

//http.createServer(function (req,res){
//   res.writeHead(200,{'Content-Type':'text/html'});
//    var html = fs.readFileSync(__dirname+'/index.html');
//    res.end(html);
//}).listen(8080,'127.0.0.1');


http.createServer(req, res  => {
    res.writeHead(200, { 'Content-Type': 'text/json' });
    var persona = {
        name: 'Ezequiel',
        age: 27
    };
    res.end(JSON.stringify(persona));
}).listen(8080, '127.0.0.1');