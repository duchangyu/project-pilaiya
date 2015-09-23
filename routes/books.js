
var express = require('express');
var router = express.Router();

// middleware specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
})
// define the home page route
router.get('/', function(req, res) {
  res.send('books home page');
})
// define the about route
router.get('/about', function(req, res) {
  res.send('About books');
})

module.exports = router;




// /**
//  * Custom Routes
//  * 
//  */
// //app.get('/books', bookController.getBooks);

// app.route('/books')
//   .get(bookController.getBooks)
//   .post(bookController.createBooks)
//   .put(bookController.updateBooks)
//   .delete(bookController.deleteBooks)