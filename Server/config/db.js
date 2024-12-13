const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        // Add database name at the end of URI
        const uri = `${process.env.MONGO_URI}/quizlet?retryWrites=true&w=majority`;
        console.log("Connecting to MongoDB...");
        
        const conn = await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error('MongoDB Connection Error: ', error);
        process.exit(1);
    }
};

module.exports = connectDB;