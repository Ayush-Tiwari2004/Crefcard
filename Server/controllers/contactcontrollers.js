const nodemailer = require('nodemailer');

const contactOnMail = async (req, res) =>{
    const {name, email, message} = req.body;

    try{
        const transportar = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_ID,
                pass: process.env.PASSWORD
            } 
        })

        //email option
        const emailOptions = {
            to: process.env.EMAIL_ID,
            from: process.env.EMAIL_ID,
            subject: `New contact form submission from ${name}`,
            text: `name : ${name} / nEmail : ${email} / nMessage : ${message}`
        }

        //send mail
        await transportar.sendMail(emailOptions);
        res.status(200).send("Message send successfully!");
    }
    catch(error){
        console.error("Error sending email:", error);
        res.status(500).send("failed to send message")
    }
}

module.exports = contactOnMail;