 /* var x = {
movie:"Rangatiranga"
}
  var  y =JSON.stringify(x);

var http = require('http');
var url = require('url');


http.createServer(function (request, response) { 
        var store = '';


    request.on('end', function() {
       
        console.log("Came Here" +  request.url);
            console.log(store.var1);
            });
    request.on('data', function(data) 
    {
        store='';
        store = JSON.parse(data);
    });
    
var sending_object = {
names:[]
};
    
    var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'emp'
});

connection.connect();

connection.query('SELECT * from employee', function(err, rows, fields) {
  if (err) throw err;

    
    for(var i=0;i<rows.length;i++){
        sending_object.names.push(rows[i].name);
    console.log('The solution is: ', rows[i].name);
}

  



response.writeHead(200, {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin' : '*',
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
});

    console.log(sending_object.names.length);
        

  response.end(JSON.stringify(sending_object));  
});
    connection.end();
}).listen(3000);








console.log("Server is listening"); */

var express = require('express');
var app = express();
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.get('/', function (req, res) {
  res.send('Hello World!');
});
app.post('/',function(req,res){
    console.log("Two Times");
    var x = {
movie:"Rangatiranga"
}
  var  y =JSON.stringify(x);
    
var sending_object = {
names:[]
};
    
    var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'emp'
});

connection.connect();

connection.query('SELECT * from employee', function(err, rows, fields) {
  if (err) throw err;

    
    for(var i=0;i<rows.length;i++){
        sending_object.names.push(rows[i].name);
    console.log('The solution is: ', rows[i].name);
}
    

res.send(sending_object);
});
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
