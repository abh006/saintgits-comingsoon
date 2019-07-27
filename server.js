const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
  //__dirname : It will resolve to your project folder.
});


//add the router
app.use(express.static(__dirname + '/static'));
//Store all JS and CSS in Scripts folder.

app.use('/', router);
app.listen(8080);

console.log('Running at Port 8080');