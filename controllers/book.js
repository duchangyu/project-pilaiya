/**
 * GET /books
 * List all books.
 */
var Book = require('../models/Book.js');

exports.getBooks = function(req, res) {
  Book.find(function(err, docs) {
    res.render('books', { books: docs });
  });
};

exports.createBooks = function(req, res) {
  // Book.find(function(err, docs) {
  //   res.render('books', { books: docs });
  // });
};

exports.updateBooks = function(req, res) {
  // Book.find(function(err, docs) {
  //   res.render('books', { books: docs });
  // });
};

exports.deleteBooks = function(req, res) {
  // Book.find(function(err, docs) {
  //   res.render('books', { books: docs });
  // });
};