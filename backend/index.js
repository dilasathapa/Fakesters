const express = require('express');
const cors = require('cors');
const connectDb = require('./db/database');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const chatRoutes = require('./routes/chatRoutes');
const dotenv = require('dotenv');
const { notFound, errorHandler } = require('./middleware/errorMiddleware');


dotenv.config();

const app = express();
app.use(express.json())
app.use(cors());
connectDb()

app.use('/api/user', userRoutes )
app.use('/api/chat', chatRoutes)


app.use(notFound);
app.use(errorHandler)

app.listen(process.env.PORT, ()=>{
    console.log(`app listening on PORT: http://localhost:${process.env.PORT}`.green.bold)
})
