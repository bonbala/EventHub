const UserModel = require("../models/ModelUser");
const asyncHandle = require('express-async-handler')
const jwt = require('jsonwebtoken')
const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "luutep2021@gmail.com",
      pass: "apkf oqno nqmd ujgc",
    },
  });

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

const handleSendMail = async (val,email)=>{
    try {  
        await transporter.sendMail({
         from: '"Maddison Foo Koch " ', // sender address
         to: email, // list of receivers
         subject: "Verification", // Subject line
         text: "Your code to verification email", // plain text body
         html: `<h1>${val}</h1>`, // html body
        });
        
        return 'OK';

    } catch (error) {
        return error
    }
};

const verification = asyncHandle (async(req,res)=>{
    const {email}=req.body;
    const verificationCode = Math.round(1000 +Math.random()*9000);
    try {
      await handleSendMail(verificationCode,email);
      res.status(200).json({
        message:'Send verification code successfully!!!',
        data: {code:verificationCode}
    });  
    } catch (error) {
      res.status(401)
      throw new Error('Can not send email')   
    }
    
    
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