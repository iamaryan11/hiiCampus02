import mongoose from 'mongoose';
const {Schema}=mongoose;
export interface Reviews{
    user:string,
    score:number,
}
export const ReviewSchema=new Schema<Reviews>({
    user:{
        type:String,
        required:true,
    },
    score:{
        type:Number,
        required:true,
    }
},{
    _id:false // written so that mongoose does not generate the id field for review schema as we already have _id in productsschema and we are embedding reviewshcema as an array inside productsschema
})