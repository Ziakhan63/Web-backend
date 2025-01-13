//require('dotenv').config({path:'./env'})
import dotenv from 'dotenv';
import { app } from './app.js';
import connectDB from "./db/index.js";
dotenv.config({
    path:'./env'
})


connectDB()
.then(()=>{
    app.listen(process.env.PORT || 3000,()=>{
        console.log(`Server is Running at port ${process.env.PORT}`)
    })
})
.catch((err)=>{
        console.log(`MongoDb Connection Failed`)
})










// import express from 'express'
// const app=express();
// (async () => {
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_Name}`)
//         app.on("Error",(error)=>{
//             console.log("ERR",error)
//             throw err
//         })
//         app.listen(process.env.PORT,()=>{
//             console.log(`App is running on ${process.env.PORT}`)
//         })
   
//     } catch (error) {
//         console.log("Error", error)
//         throw err
//     }
// })()