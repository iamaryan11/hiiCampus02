import {type Request, type Response} from "express";

import { Products } from "../model/product.js";

// function to fetch all the products
export const getProducts=async(req:Request,res:Response)=>{
    try{
        const allproducts=await Products.find({}).lean();
        res.status(200).json({
            message:"All products fetched succesfully",
            allproducts:allproducts,
        });
    }catch(err){
        res.send(`An error while fetching products ${err}`);
    }
}


// Price and Rating Queries

// Find products where price > 100 OR rating >= 4.5
export const priceRating_one=async(req:Request,res:Response)=>{
    // we hvae not used any here as it will disable all the typechecking whereas this will enforce that value is an object with keys and values
        let query:Record<string,unknown>={};
        query.$or=[{
            price:{$gt:100}
        },
        {
        rating:{$gte:4.5}}
    ];
    try{
        const products=await Products.find(query).lean();
        res.status(200).json({
            message:"Products with price above 100 and rating gte 4.5 fetched successfully",
            count:products.length,
            ids: products.map(p => p._id),
            products:products,
        })
    }catch(err){
        res.send(`An error occured while fetching products > 100 and >=4.5 ${err}`);
        console.log(`Error pccured while fetching products for price gt 100 and rating gte 4.5 ${err}`)
    }
}



// ouput differs from the notion file as we have used And operator so for some cases both conditions may not satisfy
 
// Find products where price <= 120 AND rating < 4

export const priceRating_two=async(req:Request,res:Response)=>{
    let query:Record<string,unknown>={};
    query.$and=[
        {price:{$lte:120}},
        {rating:{$lt:4}},
    ];
    try{
        const products=await Products.find(query).lean();
        res.status(200).json({
            message:"Products with price less then equal to 120 and rating below 4 fetched succesfully",
            count:products.length,
            ids:products.map(p=>p._id),
            products:products,
        })
    }catch(err){
        res.send(`An error occured while fetching products for query price<=120 and rating <4 ${err}`);
        console.log(`Error pccured while fetching products for query price<=120 and rating <4 ${err}`)
    }
}


// Category Filtering
// Products in categories ["Electronics","Books"]

export const categoryFiltering_one=async(req:Request,res:Response)=>{
    const catergories=["Electronics", "Books"];
    let category_query:Record<string,unknown>={};
    category_query.$or=[
        {category:{$in:catergories}}
    ]
    try{
        const products=await Products.find(category_query).lean();
        res.status(200).json({
            message:"All products with category Electronics and Books fetched succesfully",
            count:products.length,
            ids:products.map(p=>p._id),
            products:products,
        })
    }catch(err){
         res.send(`An error occured while fetching products for category Electronics and Books ${err}`);
         console.log(`Error pccured while fetching products for catergory Electronics and Books ${err}`)
    }
}

// Products not in categories ["Apparel"]

export const categoryFiltering_two=async(req:Request,res:Response)=>{
    const not_in_catergories=["Apparel"];
    let category_query:Record<string,unknown>={};
    category_query.$or=[
        {category:{$nin:not_in_catergories}}
    ]
    try{
        const products=await Products.find(category_query).lean();
        res.status(200).json({
            message:"All products expect for the category apparel fetched sucessfully",
            count:products.length,
            ids:products.map(p=>p._id),
            products:products,
        })
    }catch(err){
         res.send(`An error occured while fetching products expects for where cat.. is apparel ${err}`);
         console.log(`Error pccured while fetching products expects for where cat.. is apparel ${err}`)
    }
}

//3.) Logical Operators

// (category="Electronics" AND price<150) OR rating>=4.8

export const LogicalOperator_one=async(req:Request,res:Response)=>{
    const allowed_catergory=["Electronics"];
    let query:Record<string,unknown>={};
    query.$or=[
        {
            category:{$in:allowed_catergory},
            price:{$lt:150},
        
        },
        {rating:{$gte:4.8},}
        
    ]
    
    try{
        const products=await Products.find(query).lean();
        res.status(200).json({
            message:"Products with Category Electronics and price 150 alongwith rating >=4.8 fetched successfully",
            count:products.length,
            ids:products.map(p=>p._id),
            products:products,
        })
    }catch(err){
        res.send(`Error Ocuured while fetching Products with Category Electronics and price 150 alongwith rating >=4.8 fetched successfully ${err}`)
        console.log(`Error Occured Products with Category Electronics and price 150 alongwith rating >=4.8 fetched successfully ${err}`)
    }


}


// Rating between 4 and 4.5 OR stock >= 20
export const LogicalOperator_two=async(req:Request,res:Response)=>{
    let query:Record<string,unknown>={};
    query.$or=[
        {
           rating:{$gt:4,$lt:4.5},
        
        },
        {
            stock:{$gte:20},
        }
        
    ]
    
    try{
        const products=await Products.find(query).lean();
        res.status(200).json({
            message:"Products with rating between 4 and 4.5 and stock value >=20 fetched successfully",
            count:products.length,
            ids:products.map(p=>p._id),
            products:products,
        })
    }catch(err){
        res.send(`Error Ocuured while fetching Products with rating between 4 and 4.5 and stock value >=20...
        ${err}`)
        console.log(`Error Ocuured while fetching Products with rating between 4 and 4.5 and stock value >=20..., ${err}`)
    }


}

// 4.) Regex Search

// Products with name containing "Product 1"

export const RegexSearch_one=async(req:Request,res:Response)=>{
    let query:Record<string,unknown>={};
    // hum array me tbhi wrap krkre pass krte hai jb logical operator use kre query me ya fir humare pss multiple queries fields ho abhi sirf ek ho hai so we have not wrapped it
    query.name=
        {$regex:'Product 1'}
       try{
        const products=await Products.find(query).lean();
        res.status(200).json({
            message:"Products with name as Product 1 fetched successfully",
            count:products.length,
            ids:products.map(p=>p._id),
            products:products,
        })
    }catch(err){
        res.send(`Error Ocuured while fetching Products with name as Product 1
        ${err}`)
        console.log(`Error Ocuured while fetching Products with name as Product 1, ${err}`)
    }
}

// Products with tags containing "new"

export const RegexSearch_two=async(req:Request,res:Response)=>{
    let query:any={};
    // hum array me tbhi wrap krkre pass krte hai jb logical operator use kre query me ya fir humare pss multiple queries fields ho abhi sirf ek ho hai so we have not wrapped it
    query.tags={
        $regex:'new'
    }
       try{
        const products=await Products.find(query).lean();
        res.status(200).json({
            message:"Products with name as Product 1 fetched successfully",
            count:products.length,
            ids:products.map(p=>p._id),
            products:products,
        })
    }catch(err){
        res.send(`Error Ocuured while fetching Products with name as Product 1
        ${err}`)
        console.log(`Error Ocuured while fetching Products with name as Product 1, ${err}`)
    }
}

// 5.)Existence Check part 01
//  Products that have tags

export const ExistenceCheck_one=async(req:Request,res:Response)=>{
    let query:Record<string,unknown>={};
    query.tags={
        $exists:true,
        $ne:[],
    }
     try{
        const products=await Products.find(query).lean();
        res.status(200).json({
            message:"Products where tags are available fetched successfully",
            count:products.length,
            ids:products.map(p=>p._id),
            products:products,
        })
    }catch(err){
        res.status(500).json({
            message:`Error Ocuured while fetching Products with where tags are available...
        ${err}`
        })
        console.log(`Error Ocuured while fetching Products with where tags are available...${err}`)
    }
}


// 5.)Existence Check part 02--> Products without stock → none in this dataset

export const ExistenceCheck_two=async(req:Request,res:Response)=>{
    let query: Record<string, unknown> = {};
    query.stock={
        $exists:false,
    }
     try{
        const products=await Products.find(query).lean();
        res.status(200).json({
            message:"Products where stock field is not available fetched successfully",
            count:products.length,
            ids:products.map(p=>p._id),
            products:products,
        })
    }catch(err){
        res.status(500).json({
            message:`Error Ocuured while fetching Products with where stocks field is not available...
        ${err}`
        })
        console.log(`Error Ocuured while fetching Products with where stocks field is not available...${err}`)
    }
}