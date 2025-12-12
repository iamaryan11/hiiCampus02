// import mongoose from 'mongoose';
import mongoose, { type Document, type HydratedDocument, type Model } from 'mongoose';
const {Schema}=mongoose;
import { type Reviews,ReviewSchema } from './review.js';
export interface Products{
    _id:number;
    name:string;
    category:string;
    price:number;
    rating:number;
    tags:("new"|"hot"|"sale"|"popular"|"featured"|"premium"|"limited"|"trending")[];
    stock:number;
    reviews:Reviews[];

}

export const ProductSchema=new Schema<Products>({
    _id:{
        type:Number,
        required:true,
    },
    name:{
        type:String,
        required:true,
    },
    category:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
        minLength:2,
        maxLength:5,
    },
    rating:{
        type:Number,
        default:0,
        min:0,
        max:5
    },
    tags:[{
        type:String,
        enum:["new","hot","sale","popular","featured","premium","limited","trending"],
        required:true,
    }],
    stock:{
        type:Number,
        minLength:1,
        maxLength:10,
        required:true,
    },
   reviews:[ReviewSchema]
},{timestamps:true});



export const Products=mongoose.model("products",ProductSchema);
// {"_id":1,"name":"Product 1","category":"Electronics","price":100,"rating":4.5,"tags":["new","hot"],"stock":50,"reviews":[{"user":"Alice","score":5},{"user":"Bob","score":4}]},