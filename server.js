const express = require('express');
const app = express();
const moment = require('moment');
console.log(__dirname);
var port = process.env.PORT || 8080;

app.use(express.static(__dirname));

app.set('view engine', 'ejs');
app.get('/', function(req, res){
      res.render('index');
});

var timeObj = {
                "unix": Number,
                "natural": String
              }; 

app.get('/:time', function(req, res){
      var date = moment(req.params.time);
      var msec = date.format('x');
      date = date.format('MMMM DD, YYYY');
      timeObj['natural'] = date;
      timeObj['unix'] = msec;
      res.send(timeObj);
});

app.listen(port, function () {
  console.log('Example app listening on port 8080!')
})