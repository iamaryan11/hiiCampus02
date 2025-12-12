import mongoose from "mongoose";
async function master(){
    if(process.env.DB_URI){
    await mongoose.connect(process.env.DB_URI);}
    else{
        console.log(`error from the env file`)
    }
}
export default master;