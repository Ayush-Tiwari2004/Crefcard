const jwt = require('jsonwebtoken');
const secrateKey = process.env.JWT_SECRET;

const verifytoken = (req, res, next) =>{
    const token = req.headers.authorization?.split(" ")[1];
    // isame token headers se liye ja rha hai    

    if(!token){
        return res.status(404).json({
            message: "token is required"
        }) 
    }
    // agar user ke pass token na ho to usake pass error bhejega
    try{
        const user = jwt.verify(token, secrateKey);
        req.user = user;
        next();
    }
    catch(error){
        res.status(402).json({
            message: "Invalid and expired token"
        })
    }
}
module.exports = verifytoken;