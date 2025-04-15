const dotenv = require('dotenv');
const mongoose = require('mongoose');
dotenv.config();

const connectDb = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO);
        console.log(`connection success  ${conn.connection.host}`);
    } catch (error) {
        console.log(`Error : ${error.message} `);
        process.exit(1);
    }
}

module.exports = { connectDb };