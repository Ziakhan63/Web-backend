//require('dotenv').config({path:'./env'})
import dotenv from 'dotenv'
import connectDB from "./db/index.js";
dotenv.config({
    path:'./env'
})


connectDB()










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