import express,{type Request as req, type Response as res} from "express";
import dotenv from 'dotenv'
dotenv.config();
import master from './config/db.js'
import ProductRoute from "./routes/productRoute.js";
import updateRouter from "./routes/updateOperatorRoute.js";
import array_router from "./routes/arrayUpdateandFilterroutes.js";
const app=express();
app.use(express.json());
app.use('/products',ProductRoute);
app.use('/update',updateRouter);
app.use('/array',array_router);
const be_port=process.env.BE_PORT||1111
const connectDb=async()=>{
    try{
        await Promise.all([master()]);
        console.log(`Master database connected successfully`);
        // tki db se connect hone ke bd hi server start ho
        app.listen(be_port,()=>{
            console.log(`Server running at port ${be_port}`);
        })
    }catch(error){
        console.error(`Error occured while connecting to master db ${error}`);
    }
}
connectDb();
