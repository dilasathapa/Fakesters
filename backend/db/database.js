const mongoose = require('mongoose')
const colors = require('colors')

const dotenv = require('dotenv')
dotenv.config();

const connectDb = async()=>{
    try {
        const connect = await mongoose.connect(process.env.MONGO_URI, {
            // useNewUrlParser : true,
            // useUnifiedTopology : true,
            // // useFindAndModify : true
        })
        console.log(`MongoDB connected : ${connect.connection.host}`.cyan.underline)
    } catch (error) {
        console.log(`error : ${error.message}`);
        process.exit();
    }

}
module.exports = connectDb;