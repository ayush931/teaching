import { model, Schema } from "mongoose";

const userSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,    // remove all unnecessary space
    maxLength: [128, 'Name cannot exceed more than 128 characters']
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    trim: true,
    unique: [true, 'Email already exists'],
    maxLength: [500, 'Email cannot exceed more than 500 characters']
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
    trim: true,
    minLenght: [8, 'Password must have atleast 8 characters'],
    maxLength: [128, 'Password cannot exceed more than 128 characters'],
    select: false   // database cannot read the password until told to do so
  },
  phone: {
    type: Number,
    required: [true, 'Phone is required'],
    trim: true,
    maxLength: [10, 'Phone number must have maximum 10 characters']
  }
}, {
    timestamps: true // tells that when the user is created by making createdAt and updatedAt model itself
  })

const User = model('User', userSchema);
export default User;
