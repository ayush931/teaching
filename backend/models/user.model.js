import { model, Schema } from "mongoose";

const userSchema = new Schema({
  name: String,
  email: String,
  password: {
    type: String,
    select: false
  },
  phone: Number,
})

const User = model('User', userSchema);
export default User;
