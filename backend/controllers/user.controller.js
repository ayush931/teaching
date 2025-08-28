import User from "../models/user.model.js";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

// 1. create token -> tells that u r logged in or not
// 2. send it through cookie -> helps to set the token into the system
// 3. hash the password

const JWT_PASSWORD = "12345";

const token = jwt.sign({
  id: createUser._id,
  email: createUser.email
  }, {
    JWT_PASSWORD
  }, {
    expiresIn: "7d"
})

const cookieOptions = {
  secure: true,
  httpOnly: true,
  maxAge: 7 * 24 * 60 * 60 * 1000
}

export const registerController = async (req, res) => {
  const { name, email, password, phone } = req.body;

  if (!name || !email || !password || !phone) {
    return res.status(400).json({
      success: false,
      message: 'All fields are required'
    })
  }

  const findUser = await User.findOne({ email });

  if (findUser) {
    return res.status(400).json({
      success: false,
      message: 'User already registered, Please login'
    })
  }

  const hashPassword = bcrypt.hash(password, 10);

  const createUser = await User.create({
    name,
    email,
    password: hashPassword,
    phone
  })

  res.cookie("token", token, cookieOptions);

  await createUser.save();

  return res.status(200).json({
    success: true,
    message: 'User registered successfully'
  })
}


export const loginController = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      success: false,
      message: 'All fields are required'
    })
  }

  const findUser = await User.findOne({ email }).select("+password");

  if (!findUser) {
    return res.status(400).json({
      success: false,
      message: 'User not exists, Register first'
    })
  }

  const comparePassword = bcrypt.compare(findUser.password, password);

  if (!comparePassword) {
    return res.status(400).json({
      success: false,
      message: 'Invalid credentials'
    })
  }

  res.cookie("token", token, cookieOptions);

  return res.status(200).json({
    success: true,
    message: 'Logged in successfully'
  })
}

export const logoutController = async (req, res) => {
  res.cookie("token", null, {
    secure: true,
    httpOnly: true,
    maxAge: 0
  });

  return res.status(200).json({
    success: true,
    message: 'Logout successfull'
  })
}
