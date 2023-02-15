const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

//@desc Register new user
//@route POST/api/users
//access  Public
const registerUser = (req, res)=>{
    res.json({message: 'Register user'})
}

//@desc Authenticate new user
//@route POST/api/users/login
//access  Public
const loginUser = (req, res)=>{
    res.json({message: 'Login user'})
}

//@desc Get user info
//@route GET/api/users/me
//access  Public
const getMe = (req, res)=>{
    res.json({message: 'User data shown'})
}


module.exports= {
    registerUser,
    loginUser,
    getMe,
}