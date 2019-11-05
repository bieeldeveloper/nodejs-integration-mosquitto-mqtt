var mqtt = require('mqtt')

const opt = {
  username: 'user',
  password: 'pass'
};
var client  = mqtt.connect('mqtt://host:port',opt)
client.on('connect', function () {})
 
var express = require('express');
var app = express();

app.get('/:topic/:message', function (req, res) {
  const topic = req.params.topic
  const message = req.params.message
  client.publish(topic, message)  
  res.status(200).json({topic: topic, message: message})
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});


