
var express = require('express');
var router = express.Router();

var bookController = require('../controllers/book');
var sensorController = require('../controllers/sensor');

// middleware specific to this router
router.use(function timeLog(req, res, next) {

  //TODO: do authentication here
  
  console.log('Time: ', Date.now());
  next();
})
// // define the home page route
// router.get('/', function(req, res) {
//   res.send('books home page');
// })
// 
 
router.route('/books')
  .get(bookController.getBooks)
  .post(bookController.createBooks);


router.route('/books/:bookId')
  .get(bookController.getBookById)
  .put(bookController.updateBooks)
  .delete(bookController.deleteBooks);


router.route('/sensors')
  .get(sensorController.getAllSensors)
  .post(sensorController.createNewSensor);

router.route('/sensors/:sensorId')
  .get(sensorController.getSensor)
  .put(sensorController.updateSensor)
  .delete(function(req,res){

  });

router.route('/sensors/:sensorId/values')
  .get(sensorController.getSensorValues)
  .put(sensorController.appendSensorValues);
  

// define the about route
router.get('/about', function(req, res) {
  res.send('About books');
})

module.exports = router;


