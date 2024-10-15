const jwt = require('jsonwebtoken');


const generateToken = (user) => {
    console.log(process.env.JWT_SECRET_KEY);
    return jwt.sign({email :user.email, _id: user._id}, process.env.JWT_SECRET_KEY); 
}


module.exports.generateToken = generateToken