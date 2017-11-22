const Note = require('../models/note');
const router = require('express').Router();

router.put('/', (req, res) => {
  Note.create(req.body).then((note) => {
    console.log(note);
    res.send({message:'PUT', note});
  });
});

router.get(`/:id`, (req, res) => {
  console.log(req.body);
  res.send({message:'get note#' + req.params.id});
});

router.patch('/:id', (req, res) => {
  console.log(req.body);
  res.send({message:'patch'});
});

module.exports = router;