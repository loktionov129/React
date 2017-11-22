const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NoteSchema = new Schema({
  title: {
    type: String,
    required: [true, 'Title field is required']
  },
  description: {
    type: String
  }
});

const Note = mongoose.model('note', NoteSchema);
module.exports = Note;