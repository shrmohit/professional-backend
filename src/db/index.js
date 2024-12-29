// always used a async await in database
// setup connect btw mongodb atlas and using mongooose
// async method ko call karte hai to wo ek promise return karta hai
import mongooose from "mongoose";
import { DB_NAME } from "../constants.js";

//below code baat karega database se bar bar to ham iska ek function( asynchandler ) or ose ham repar banalete hai or return karte hai
const connectdb = async () => {
  try {
    const connectionInstance = await mongooose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(
      `\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`
    );
    // console.log(connectionInstance);
  } catch (error) {
    console.log("MONGODB connection failed :", error);
    process.exit(1);
  }
};

export default connectdb;
