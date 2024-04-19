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
            ...newUser,
            accesstoken: await getJsonWebToken(email, newUser.id),
        },
    });
});

module.exports = {
    register,
}