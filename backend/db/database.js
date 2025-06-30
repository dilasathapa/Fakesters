const mongoose = require('mongoose')
const colors = require('colors')

const connectDb = async()=>{
    try {
        const connect = await mongoose.connect(process.env.MONGO_URI,{
            // useNewUrlParser: true,
            // useUnifiedTopology: true,
        })
        console.log(`MongoDB connected : ${connect.connection.host}`.cyan.underline)
    } catch (error) {
        console.log(`error : ${error.message}`);
        process.exit();
    }

}
module.exports = connectDb;