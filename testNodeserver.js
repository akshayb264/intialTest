
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
    var x = {
movie:"YYY"
}
  var  y =JSON.stringify(x);
    
var sending_object = {
names:[]
};
    
    var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'username',
  password : 'secret',
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
