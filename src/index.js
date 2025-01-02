// (function) (immeediate execute karo) is called efie
// indedx me dbms ka code hota hai

// require("dotenv").config({ path: "./env" });
import dotenv from "dotenv";
import mongoose from "mongoose";
import { DB_NAME } from "../src/constants.js";
import connectdb from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
  path: "./.env",
});

connectdb()
  .then(() => {
    app.on("error", () => {
      console.log("ERROR:", error);
      throw error;
    });

    //app listening server
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running at port: ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("Mongo db connection failed !!!", err);
  });

// below code for setup express and mongoose
/*
import express from "express";
const app = express()

( async() => {
    try {
        // data base connect 
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        //server
        app.on("error",()=> {
            console.log("ERROR:",error);
            throw error   
        })
        app.listen(process.env.PORT,() => {
            console.log(`App is listening on port ${process.env.PORT}`);
            
        })

    } catch (error) {
        console.error("ERROR:",error)
        throw err
    }
})()
*/
