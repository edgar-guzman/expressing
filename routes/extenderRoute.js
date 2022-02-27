const extender = require('express').Router();

extender
  .route('/')
  .get((req, res) => {
    res.send('Get selected books');
  })
  .post((req, res) => {
    res.status(405).send('Not allowed when adding a book');
  })
  .put((req, res) => {
    res.status(405).send('Not allowed when updating a book');
  })
  .delete((req, res) => {
    res.status(405).send('Not allowed when deleting a book');
  });

module.exports = extender;
