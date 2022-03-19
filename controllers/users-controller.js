const User = require("../models/user");
const getAllUsers = async (req, res, next) => {
  let user;
  try {
    user = await User.find();
  } catch (err) {
    console.log(err);
  }

  if (!user) {
    return res.status(404).json({ message: "No products found" });
  }
  return res.status(200).json({ user });
};

const adduser = async (req, res, next) => {
    const { name, email,phonenumber,password,confirmpassword} = req.body;
    let user;
    try {
      user = new User({
        name,
        email,
        phonenumber,
        password,
        confirmpassword,
        
      });
      await user.save();
    } catch (err) {
      console.log(err);
    }
    if (!user) {
      return res.status(500).json({ message: "Unable To Add" });
    }
    return res.status(201).json({ user });
  };
const checkuser= async (req, res, next) => {
 try{
const {email,password}=req.body;
if(!email || !password){
return res.status(400).json({error:"Please fill both of the fields"})
}
User.findOne({ email: email}, (err, user) => {
  if(user){
      if(password === user.password ) {
          res.send({message: "Login Successfull", user: user})
      } else {
          res.send({ message: "Password didn't match"})
      }
  } else {
      res.send({message: "User not registered"})
  }
})


 } catch(err){
console.log(err);
 }
};

  exports.adduser = adduser;
  exports.checkuser=checkuser;
  exports.getAllUsers=getAllUsers;

  