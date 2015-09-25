/**
 * GET /books
 * List all books in JSON
 */
var Book = require('../models/Book.js');

exports.getBooks = function(req, res) {
  Book.find(function(err, docs) {
    //Jade
    //res.render('books', { books: docs });
    //
    //JSON
    if(err)
      res.json(err);

    res.json({ books: docs });   
  });
};

exports.createBooks = function(req, res) {
  

  var book = new Book();      // create a new instance of the book model
  book.name = req.body.name;  // set the books name (comes from the request)

  // save the book and check for errors
  book.save(function(err) {
      if (err)
          res.send(err);

      res.json({ message: 'book created!' });
  });
        
};

exports.getBookById = function(req, res){
  var bookId = req.params.bookId;

  Book.findById(bookId, function(err, book){
    if(err)
      res.json(err);

    res.json(book);
  })
};





exports.updateBooks = function(req, res) {

  var bookId = req.params.bookId;

  Book.findById(bookId, function(err, book){
    if(err)
      res.json(err);

    //update the book name
    book.name = req.body.name;
    //console.log(req.body.name);

    book.save(function(err){
      
      if(err)
        res.send(err);

      res.json(book);



    })
  });

};

exports.deleteBooks = function(req, res) {
  
  var bookId = req.params.bookId;

  Book.remove({
    _id : bookId

  },function(err, book){

    if(err)
      res.send(err);

    res.json({ message : 'book is deleted.'});
  });

 

};