const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CommentSchema = new Schema({
  EventNum: { type: Schema.Types.ObjectId, ref: 'Event'},
  Num: { type: Number, required: true },
  Description: { type: String, required: true },
  User:{type: Schema.Types.ObjectId, ref: 'User'}
}, {
  timestamps: true,
});

const Comment = mongoose.model('Comment', CommentSchema);

module.exports = Comment;