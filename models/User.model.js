const { Schema, model } = require("mongoose")

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: [true, 'Email is required.'],
      unique: true,
      lowercase: true,
      trim: true
    },
    password: {
      type: String,
      required: [true, 'Password is required.']
    },
    username: {
      type: String,
      required: [true, 'Username is required.'],
      minlength: [3, 'Username must by more than 3 characters']
    },
    firstName: {
      type: String,
      required: [true, 'First name is required.']
    },
    lastName: {
      type: String,
      required: [true, 'Last name is required.']
    },
    role: {
      type: String,
      enum: ['USER', 'ADMIN'],
      default: 'USER'
    },
    avatar: {
      type: String,
      required: [true, 'You must add a profile image']
    },
    notes: [{
      type: Schema.Types.ObjectId,
      ref: 'Note'
    }],
    tags: [{
      type: Schema.Types.ObjectId,
      ref: 'Tag'
    }]
  },
  {
    timestamps: true
  }
)

const User = model("User", userSchema)

module.exports = User
