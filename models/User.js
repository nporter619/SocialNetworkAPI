const { Schema, model } = require('mongoose');

const userSchema = new Schema(
  {
    // Add fields as described in the project details
    // ...
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Thought'
      }
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User' // self-reference
      }
    ]
  }
);

userSchema.virtual('friendCount').get(function() {
  return this.friends.length;
});

const User = model('User', userSchema);

module.exports = User;
