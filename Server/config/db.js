const mongoose = require('mongoose');
const mongo_url = process.env.MONGO_URI;

const connectDB = async () => {
    try {
        await mongoose.connect(mongo_url, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log(`MongoDB Connected... [${process.env.NODE_ENV}]`);
    } catch (err) {
        console.error('MongoDB Connection Error: ', err);
        process.exit(1);
    }
};

module.exports = connectDB;