import User from "../Modal/user.modal.js";
import bcrypt from "bcrypt";
export const signup = async (req, res) => {
  try {
    const { fullname, email, password } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "User already exist" });
    }
    const hashPassword = await bcrypt.hash(password, 10);
    const createUser = new User({
      fullname: fullname,
      email: email,
      password: hashPassword,
    });
    await createUser.save();
    res.status(201).json({ message: "user created succesfully ",
        user:{
        _id:createUser._id,
        fullname:createUser.fullname,
        email:createUser.email
    }});
  } catch (error) {
    console.log("Error:" + error.message);
    res.status(500).json({ message: "internal server error" });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    const ismatch = await bcrypt.compare(password, user.password);
    if (!user || !ismatch) {
      return res.status(400).json({ message: "invalid email & password" });
    } else {
      res.status(200).json({
        message: "login suceefully",
        user: {
          _id: user._id,
          fullname: user.fullname,
          email: user.email,
        },
      });
    }
  } catch (error) {
    console.log("Error:" + error.message);
    res.status(500).json({ message: "internal server error" });
  }
};
