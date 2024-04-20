// import mongoose, { mongo } from "mongoose";
// import { DB_NAME }from "./constants";
// import express from "express"
// const app=express()

// ;(async()=>{
//     try{
//         mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         app.on("error",(error)=>{
//             console.log("ERROr: ",error);
//             throw error;
//         })

//         app.listen(process.env.PORT,()=>{
//             console.log(`app is listning on port${process.env.PORT}` )
//         })
//     }catch(error)
//     {
//         console.log("ERROR : ",error);
//         throw error
//     }
// })()


import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import connectDB from "./db/index.js"

// require('dotenv').config({path:'.env'})
import dotenv from "dotenv";

dotenv.config({path:'.env '})

connectDB();  