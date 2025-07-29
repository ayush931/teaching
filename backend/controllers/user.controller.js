import UserModel from "../models/user.model.js"

export const register = async (req, res) => {
  const username = req.body.name   // json
  const useremail = req.body.email
  const userpassword = req.body.password

  await UserModel.create({
    name: username,
    email: useremail,
    password: userpassword
  })

  res.send("Registration successfull")
}