const bcrypt = require('bcryptjs');
const userModel = require("../models/user")
const jwt = require('jsonwebtoken')
const nodemailer = require('nodemailer');
// const user = require('../models/user');

const secrateKey = process.env.JWT_SECRET;

const signup = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const defaultProfilePic = 'http://localhost:5000/images/default.png'; // Default if no image is uploaded

        const existingUser = await userModel.findOne({ email });
        if (existingUser) {
            return res.status(409).json({
                message: 'User already exists, please login.',
                success: false
            });
        }

        // Hash password and create new user
        const hashedPassword = await bcrypt.hash(password, 12);
        const newUser = new userModel({
            username,
            email,
            password: hashedPassword,
            profilepic: defaultProfilePic,
        });
        await newUser.save();

        // Generate JWT Token
        const jwtToken = jwt.sign(
            { _id: newUser._id, email: newUser.email },
            process.env.JWT_SECRET,
            { expiresIn: '24h' }
        );

        // Respond with user details and token
        res.status(201).json({
            message: "Signup successful",
            success: true,
            _id: newUser._id, // Returning user ID
            jwtToken,         // Returning token
            username: newUser.username,
            email: newUser.email,
            profilepic: newUser.profilepic,
            
        });
    } catch (err) {
        res.status(500).json({
            message: "Internal server error",
            success: false
        });
    }
};

const login = async (req, res) =>{
    try{
        const {email, password} = req.body;
        const user = await userModel.findOne({email});
        const errorMsg = "Auth failed email or password is wrong";
        if(!user){
            return res.status(403)
            .json({
                message: errorMsg,
                success: false
            })
        }
        const isPassEqual = await bcrypt.compare(password, user.password);
        if(!isPassEqual){
            return res.status(403)
            .json({
                message: errorMsg,
                success: false
            })
        }
        const jwtToken = jwt.sign(
            {
                email: user.email,
                _id: user._id, // Corrected to use user._id
                isAdmin: user.isAdmin //
            },
                process.env.JWT_SECRET,
                {expiresIn: '24h'} 
        )
        res.status(200)
        .json({
            message: "Login Successfully",
            success: true,
            jwtToken,
            email,
            username: user.username,
            profilepic: user.profilepic,
            userId: user._id, // Add userId explicitly
        })
    }catch(err){
        res.status(500)
        .json({
            message: "Enternel server error",
            success: false
        })
    }
};

const transportar = nodemailer.createTransport({
    service: "gmail",
    auth:{
        user: process.env.EMAIL_ID,
        pass: process.env.PASSWORD
    }
});

const resetPassword = async (req, res) =>{
    console.log(req.body);
    const {email} = req.body;

    if(!email){
        return res.status(400).json({
            message: "Email is required",
            success: false,
        })
    }

    try{
        const user = await userModel.findOne({email});
        //token generate for reset password
        const token = jwt.sign({_id: user._id}, secrateKey, {
            expiresIn: "10m"
        })
        //generated token ko verifytoken ke sath add karna
        const setUserToken = await userModel.findByIdAndUpdate({_id: user._id}, {verifytoken:token}, {new: true})

        console.log('setUserToken', setUserToken);
        if(setUserToken){
            const mailOption = {
                from: process.env.EMAIL_ID,
                to: email,
                subject: "Sending Email for password Reset",
                text: `this link is valid for 2 MINUTS http://localhost:5173/forgot-password/${user._id}/${setUserToken.verifytoken}`,
            } 

            transportar.sendMail(mailOption, (error, info) =>{
                if(error){
                    res.status(401).json({
                        message: "Email not send",
                        success: false,
                        "error": "SMTP Error"
                    })
                }
                else{
                    res.status(201).json({
                        message: "Email sent Successfully",
                        success: true,
                    })
                }

            })
        }  

    }
    catch(error){
        res.status(401).json({
            message: "Email not send"
        })
    }
}

//verify for forgot password time

const forgotPassword = async (req, res) =>{
    const {id, token} = req.params;
    
    try{
        //user ko validate karna ki usake pass id and token hai ya nhi
        const validUser = await userModel.findOne({_id: id, verifytoken: token})
        
        // id match ho jayegi lekin token expire hone pr user ko login nhi hone dena hai
        const tokenVerify = jwt.verify(token, secrateKey);

        if(validUser && tokenVerify._id){
            res.status(201).json({status:201, validUser})
        }else{
            res.status(401).json({status:401, message: "user not exist"})
        }
    }
    catch(error){
        res.status(401).json({status:401, error})
    }
}
//verify for change password 

const changePassword = async (req, res) =>{
    const {id, token} = req.params;
    const {password} = req.body;

    try{
        const validUser = await userModel.findOne({_id:id, verifytoken: token});
        const tokenVerify = jwt.verify(token, secrateKey);

        if(validUser && tokenVerify._id){

            const newPassword = await bcrypt.hash(password, 12);

            const setnewuserpass = await userModel.findByIdAndUpdate({_id: id}, {password: newPassword});

            setnewuserpass.save();
            res.status(201).json({status:201, setnewuserpass})

        }else{
            res.status(401).json({status:401, message: "User not exist"})
        }
    }
    catch(error){
        res.status(401).json({status:401, error})
    }
}

module.exports = {
    signup,
    login,
    resetPassword,
    forgotPassword,
    changePassword
}
