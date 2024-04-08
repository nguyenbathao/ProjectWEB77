import express from 'express';
import dotenv from 'dotenv'
import morgan from 'morgan';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoute.js'

//config env
dotenv.config();

//database config
connectDB();

//rest object
const app = express();

//middelwares
app.use(express.json());
app.use(morgan('dev'));

app.use("/api/v1/auth", authRoutes);

// //rest api
// app.get = ("/", (req, res) => {
//     res.send("<h1>Wellcome to MERN App</h1>");
// });

//PORT
const PORT = process.env.PORT || 8080;

app.listen (PORT, () =>{
    console.log(`Server running on ${process.env.DEV_MODE} mode on port ${PORT}`)
})