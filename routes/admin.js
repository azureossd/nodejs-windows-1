var express = require('express');
var router = express.Router();
var spawn = require('child_process').spawn;

var pid = 0;

function startdbconnections() {
  var child = spawn('node', ['././tools/dbconnections.js', "www.bing.com", "80", "1000"], {detached: false});
  
  child.stdout.on('data', (data) => {
    console.log(`child stdout:\n${data}`);
  });
  
  child.stderr.on('data', (data) => {
    console.error(`child stderr:\n${data}`);
  });  

  pid = child.pid
  return pid;    
}

router.get('/connect', function(req, res, next) {
  var currentPid = pid;
  if (currentPid == null || currentPid == 0) {
    startdbconnections();
    var htmlvar = {
      response: "Database Connections opened"
    };     
    res.status(200).send(htmlvar);
  }
  else{
    var htmlvar = {
      response: "Database Connections already opened"
    };     
    res.status(200).send(htmlvar); 
  }

});

router.get('/disconnect', function(req, res, next) {
  if (pid != null && pid != 0) {
    process.kill(pid);
    pid = 0;
    var htmlvar = {
      response: "Database Connections closed"
    }; 
    res.status(200).send(htmlvar);     
  }
  else{
    var htmlvar = {
      response: "Database Connections already closed"
    }; 
    res.status(200).send(htmlvar);     
  }
});


module.exports = router;