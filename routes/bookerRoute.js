const booker = require('express').Router();

booker
  .route('/')
  .get((req, res) => {
    res.send('Get all books');
  })
  .post((req, res) => {
    res.status(405).send('Not allow to add a book');
  })
  .put((req, res) => {
    res.status(405).send('Not allow to update a book');
  })
  .delete((req, res) => {
    res.status(405).send('Not allow to delete a book');
  });

booker
  .route('/:id')
  .get((req, res) => {
    const id = req.params.id;
    res.send('Get a book, URL: /' + id);
  })
  .post((req, res) => {
    res.status(405).send('Not allow when adding a book within a existing book');
  })
  .put((req, res) => {
    const id = req.params.id;
    res.send('Updated this book, URL: /' + id);
  })
  .delete((req, res) => {
    const id = req.params.id;
    res.send('Deleted this book, URL: /' + id);
  });

module.exports = booker;
