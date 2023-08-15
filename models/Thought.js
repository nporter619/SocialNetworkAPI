const { Schema, model, Types } = require('mongoose'); // Ensure you have Types
const reactionSchema = require('./Reaction');

const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 280
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (timestamp) => dateFormat(timestamp) // Format timestamp using a function you'd need to define (or use a library for)
    },
    username: {
      type: String,
      required: true
    },
    reactions: [reactionSchema]
  }
);

thoughtSchema.virtual('reactionCount').get(function() {
  return this.reactions.length;
});

const Thought = model('Thought', thoughtSchema);

module.exports = Thought;
