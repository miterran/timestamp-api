const express = require('express');
const app = express();
const moment = require('moment');
var port = process.env.PORT || 8080;

app.use(express.static(__dirname));
app.set('view engine', 'ejs');
app.get('/', function(req, res){
      res.render('index');
});

var timeObj = {
                "unix": Number,
                "natural": Number
              }; 

app.get('/:time', function(req, res){
    var date = moment(req.params.time);
    var mSec = parseInt(date.format('x'));
    var time = date.format('MMMM DD, YYYY');
      if(mSec > 0 || mSec < 0){
          timeObj['natural'] = time;
          timeObj['unix'] = mSec; 
      }else{
          timeObj['unix'] = null;
          timeObj['natural'] = null;
      }
    res.send(timeObj);
});

app.listen(port, function () {
  console.log('Example app listening on port 8080!')
})