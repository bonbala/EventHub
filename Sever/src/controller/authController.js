const UserModel = require("../models/ModelUser");
const asyncHandle = require('express-async-handler')
const jwt = require('jsonwebtoken')

const getJsonWebToken = async (email,id) =>{
    const secretKey = 'DoAn';
    const payload = {
        email, id
    }
    const token = jwt.sign(payload, secretKey, {
        expiresIn: '7d',
    })

    return token;
}

const handleSendMail = async (val)=>{
    //send mail
}

const verification = asyncHandle (async(req,res)=>{
    const {email}=req.body;
    console.log(email);
    res.send('Nguhoc')
})

const register =  asyncHandle(async (req,res) => {
    const{email,username,password}=req.body;

    const existingUser = await UserModel.findOne({email});

    if(existingUser) {
        res.status(401);
        throw new Error ('User has already exist!!!');
    }

    const newUser = new UserModel({
        email,
        username,
        password,
    })

    await newUser.save()

    res.status(200).json({
        message:"Register new user successfully",
        data: {
            email: newUser.email,
            id: newUser.id,
            accesstoken: await getJsonWebToken(email, newUser.id),
        },
    });
});

const login = asyncHandle(async (req,res) => {
    const{email,password}= req.body;
    
    const existingUser = await UserModel.findOne({email});

    if (!existingUser) {
        res.status(403);
        throw new Error('User not found')
    }

    const isMatchPassword = await comparePasswords(password, existingUser.password)
    if (!isMatchPassword) {
      res.status(401);
      throw new Error('Email or Password is not correct !!!');
    }

    res.status(200).json({
        message:'Login is successfully',
        data:{
          id: existingUser.id,
          emai: existingUser.email,
          accesstoken: await getJsonWebToken(email, existingUser.id),
        },
    });
});


function comparePasswords(password1, password2) {
    if (password1.length !== password2.length) {
        return false;
    }
    for (let i = 0; i < password1.length; i++) {
        if (password1[i] !== password2[i]) {
            return false;
        }
    }
    return true;
}


module.exports = {
    register,login,handleSendMail,verification
}