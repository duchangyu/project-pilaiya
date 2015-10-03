var Sensor = require('../models/Sensor');

exports.getAllSensors = function(req, res){

    Sensor.find(function(err, sensors){
        if(err){
          res.json({message : err})
        }

        res.json(sensors);

      })


}

exports.createNewSensor = function(req,res){
 

    var sensor = new Sensor();

    sensor.name = req.body.name;
    sensor.description = req.body.description;
    sensor.values = {};

    sensor.save(function(err){
      if(err){
        res.json({message : err})
      }

      res.json(sensor);
    })

}

exports.getSensor = function(req,res){

    var sensorId = req.params.sensorId;

    Sensor.findById(sensorId, function(err, sensor){
      if(err)
        res.json(err);

      res.json(sensor);
    })


}

exports.updateSensor = function(req,res){  //update

    var sensorId = req.params.sensorId;

    Sensor.findById(sensorId, function(err, sensor){
      if(err)
        res.json(err);

      //update the sensor name
      sensor.name = req.body.name;
      sensor.description = req.body.description;
      sensor.values = req.body.values;
      //console.log(req.body.name);

      sensor.save(function(err){
        
        if(err)
          res.send(err);

        res.json(sensor);



      })
    });


}

exports.getSensorValues = function(req,res){

    var sensorId = req.params.sensorId;

    Sensor.findById(sensorId, function(err, sensor){
      if(err)
        res.json(err);

      res.json(sensor.values);
    })

}

exports.getSensorLastValue = function(req,res){

   var sensorId = req.params.sensorId;

    Sensor.findById(sensorId, function(err, sensor){
      if(err)
        res.json(err);

      var tempEntry = sensor.values[sensor.values.length];
      res.json(tempEntry);
    })

}

exports.getSensorLastNValues = function(req,res){

   var sensorId = req.params.sensorId;
   var count = req.params.count;

    Sensor.findById(sensorId, function(err, sensor){
      if(err)
        res.json(err);

      res.json(sensor.values.slice(sensor.values.length - count));
    })

}

exports.appendSensorValues = function(req,res){  //append

    var sensorId = req.params.sensorId;

    Sensor.findById(sensorId, function(err, sensor){
      if(err)
        res.json(err);

      sensor.values = sensor.values.concat(req.body.values);
    

      sensor.save(function(err){
        
        if(err)
          res.send(err);

        res.json(sensor.values);



      })
    });


}

