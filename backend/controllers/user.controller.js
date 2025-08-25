import User from "../models/user.model.js";

export const registerController = async (req, res) => {
  const { name, email, password, phone } = req.body;

  // success -> false -> frontend;

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

  const createUser = await User.create({
    name,
    email,
    password,
    phone
  })

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

  const findUser = await User.findOne({ email });

  if (!findUser) {
    return res.status(400).json({
      success: false,
      message: 'User not exists, Register first'
    })
  }

  // findUser.password -> database ka password
  // password -> password jo user diya
  // dono ko match krega
  // compare ho jaate hai -> true

  const comparePassword = password === findUser.password; // true / false
  if (!comparePassword) {
    return res.status(400).json({
      success: false,
      message: 'Invalid credentials'
    })
  }

  return res.status(200).json({
    success: true,
    message: 'Logged in successfully'
  })
}
