import {type Request, type Response} from "express";
import { Products } from "../model/product.js";



// while demonstrating this apis reset your db okay

// Update Operator Tasks
// $inc / $set

//Task: Increase stock by 10 for all products in category="Electronics". 


export const increaseStock=async(req:Request,res:Response)=>{
    const allowed_catergory=["Electronics"]
    const category_filter:Record<string,unknown>={
        category:{$in:allowed_catergory}
    }
    const increase_value={
        $inc:{stock:10}
    };
    try{
        const stock_updated=await Products.updateMany(category_filter,increase_value);
        // cause update maby return acknowledment whether the update has been done or not it does not return the id also... so we did this but this increase db opp
        const products=await Products.find(category_filter).lean();
        res.status(200).json({
            message:"Stock value increased by 10 for products where category is Electronics",
            count:products.length,
            ids:products.map(p=>p._id),
            products:products,
        })
    }catch(err){
        res.status(500).json({
            message:`Erro occured while increasing the stock value for Electronics products ${err}`,
            
        })
    }

}


// Task: Set rating to 4.7 for _id:8 and _id:17.

export const setRating=async(req:Request,res:Response)=>{
  let id_query:Record<string, unknown>={
        _id:{$in:[8,17]}
  }
  let rating_query:Record<string,unknown>={
    $set:{rating:4.7}
  }
  try{
    const update_prod_rating=await Products.updateMany(id_query,rating_query);
    console.log(update_prod_rating);
    const product=await Products.find({_id:{$in:[8,17]}}).select('rating');
    res.status(200).json({
        message:"Rating for products with the given id update succesfully",
        product:product,
    })
        console.log(product)
  }catch(err){
    res.status(500).json({
        message:`Error occured while updating the rating of the products ${err}`,
    })
  }

}

// $unset / $rename

// Task: Remove field tags from all products in category="Apparel".

export const removeTagfiled=async(req:Request,res:Response)=>{
    const for_category=['Apparel'];
    let category_filter:Record <string,unknown>={
        category:{$in:for_category},
    }
    let unsetfilter:Record <string,unknown>={
        $unset:{tags:['']}, 
    }
    try{
    const products=await Products.updateMany(category_filter,unsetfilter);
    console.log(products);
    const final_products=await Products.find({}).lean();
    res.status(200).json({
        message:"Tag field removed from the Apparel category produts",
        ids:final_products.map(p=>p._id),
        products:final_products,
    })
    console.log(final_products);
    console.log(`------FOR SEPERATION OF CONCERNS THIS SIDE ARYAN------`)
    }catch(err){
        res.status(500).json({
            message:`Error occured while removing tag field ${err}`,
        })
        console.log(`Error occured while removing the tag field`);
    }

}

// Task: Rename price to cost in _id:1 and _id:3.

export const rename_price_to_cost=async(req:Request,res:Response)=>{
    let find_query={
        _id:{$in:[1,3]},
    }
    let rename_query={
        $rename:{price:"cost"},
    }

    try{
        const products=await Products.updateMany(find_query,rename_query);
        const final_products=await Products.find(find_query).select('_id cost');
        res.status(200).json({
            message:"Changed the price field to cost filed succesfully",
            products:final_products,
        })
        console.log(final_products);
    }catch(err){
        res.status(500).json({
            message:`Error occured while changing the name of price field to cost field ${err}`,
        })
        console.log(`Error occured while changing the name of price field to cost field`)
    }
}

// 3.) Multiple Updates:
// for id:5 increase stock by 5 and set rating to 4.8

export const update_stock_rating=async(req:Request,res:Response)=>{
    let id_query:Record<string,unknown>={
      _id:{$in:5}
    }

    let multiple_update_query:Record<string,unknown>={
        $inc:{stock:5},
        $set:{rating:4.8}
    }
    try{
        const product=await Products.updateMany(id_query,multiple_update_query)
        const updated_products=await Products.find().lean().select('_id stock rating')
        console.log(updated_products)
        console.log(product);
        res.status(200).json({
            message:`Updated the stock and rating for given id`,
            products:updated_products,
        })

    }catch(err){
        res.status(500).json({
            message:`An error occured while updating multiple fields ${err}`,
        })
        console.log(err);
    }
    
}


// Task: For _id:8, multiply price by 1.05 and increment stock by 5.

export const multiply_price_increment_stock=async(req:Request,res:Response)=>{
    let id_query:Record<string,unknown>={
        _id:{$in:8},
    }
    let multiple_update_query:Record<string,unknown>={
        $mul:{price:1.05},
        $inc:{stock:5},
    }
    try{
        const products=await Products.updateMany(id_query,multiple_update_query);
        console.log(products);
        const update_products=await Products.find(id_query).lean().select('_id price stock reviews');
        res.status(200).json({
            message:`Price multiplied by 1.05 and stock updated succesfully for given id product`,
            product:update_products,
        })
        console.log(update_products)
    }catch(err){
        res.status(500).json({
            message:`An error occured while updating(multiplying) the price and stock ${err}`
        })
        console.log(err);
    }
}


