import {type Request, type Response} from "express";
import {Products} from "../model/product.js";
import { resolveSoa } from "dns";


// Part 3: Array Updates & Array Filters 

// Array Push / Pull

// Task: Add "limitedEdition" to _id:5.tags.

export const array_push_limitededition=async(req:Request,res:Response)=>{
    let id_query:Record<string,unknown>={
        _id:{$in:5},
    }
    let push_query:Record<string,unknown>={
        $push:{tags:"LimitedEdition"},
    }

    try{
        const products=await Products.updateMany(id_query,push_query);
        const final_updated_products=await Products.find(id_query).lean().select(`_id tags`);
        console.log(final_updated_products)
        res.status(201).json({
            message:`Tag LimitedEdition added succesully`,
            count:final_updated_products.length,
            updated_prodcuts:final_updated_products,
        })
    }catch(err){
        console.log(err)
        res.status(500).json({
            message:`An array occured while performing push operation to add limitedEditon tag ${err}`,
        })
    }

}

// Task: Remove "popular" from _id:5.tags.

export const array_pull_popular=async(req:Request,res:Response)=>{
    let id_query:Record<string,unknown>={
        _id:{$in:5},
    }
    let pull_query:Record<string,unknown>={
        $pull:{tags:'popular'},
    }
    try{
        const pull=await Products.updateMany(id_query,pull_query);
        console.log(pull);
        const product=await Products.find(id_query).lean().select('_id tags');
        res.status(200).json({
            message:`Tag popular removed succesfully from id ${Object.values(id_query)}`,
            count:product.length,
            product:product,
        })
    }catch(err){
        console.log(err);
        res.status(500).json({
            message:`An error occured while removing the popular tag from product having id ${id_query._id}`
        })
    }
}

// Task: Push {"user":"Zara","score":5} into _id:8.reviews.
export const push_reviews=async(req:Request,res:Response)=>{
    let id_query:Record<string,unknown>={
        _id:{$in:8},
    }
    let push_reviews_query:Record<string,unknown>={
        $push:{reviews:{"user":"Zara","score":5}},
    }

    try{
        const push_user_review=await Products.updateOne(id_query,push_reviews_query);
        console.log(push_user_review);
        const product=await Products.find(id_query).lean().select('_id reviews');
        console.log(product);
        res.status(201).json({
            message:`User review added successfully`,
            count:product.length,
            product:product,
        })
    }catch(err){
        console.log(err);
        res.status(500).json({
            message:`An error occured while adding the use review ${err}`,
        })
    }
}


// Task: Pull review(s) from _id:5.reviews where score < 5.

export const pull_reviews_score=async(req:Request,res:Response)=>{
    let id_query:Record<string,unknown>={
        _id:{$in:5},
    }
    let pull_review_query:Record<string,unknown>={
        $pull:{reviews:{score:{$lt:5}}},
    }
    try{
        const pull_reviews=await Products.updateOne(id_query,pull_review_query);
        const product=await Products.find(id_query).lean().select('_id reviews');
        console.log(product);
        res.status(201).json({
            message:`Reviews with score less than 5 deleted succesfully`,
            count:product.length,
            product:product,
        })
    }catch(err){
        console.log(err);
        res.status(500).json({
            message:`Error occured while removing the reviews where score is less than 5`
        })
    }
}


// 2. Array Filters

// Task: Increment reviews.score by 1 for all reviews where score >= 4 in _id:24.

export const increase_score=async(req:Request,res:Response)=>{
    let id_query:Record<string,unknown>={
        _id:{$in:24},
    }
    let incerase_score_query:Record<string,unknown>={
        $inc:{"reviews.$[elem].score":1},

    }
    let options:Record<string,unknown>={ 
        arrayFilters:[{"elem.score":{$gte:4},"elem.user":{$exists:true}}]
    };
    try{
        const update_score=await Products.updateMany(id_query,incerase_score_query,options);
        console.log(update_score);
        const product=await Products.find(id_query).lean().select('_id reviews');
        console.log(product)
        res.status(201).json({
            message:`Score increased by 1 succesfully`,
            count:product.length,
            product:product
        })
    }catch(err){
        console.log(err);
        res.status(500).json({
            message:`An error occured while increasing th score by 1 ${err}`,
        })
    }
}


// Task: Set reviews.score to 5 for review with user="Bob" in any document.

export const bob_score=async(req:Request,res:Response)=>{
    let id_query:Record<string,unknown>={
        _id:{$in:1},
    }
     let incerase_score_query:Record<string,unknown>={
        $set:{"reviews.$[elem].score":5},

    }
    let options:Record<string,unknown>={ 
        arrayFilters:[{"elem.user":{$in:'Bob'}}]
    };
    try{
        const set_score=await Products.updateOne(id_query,incerase_score_query,options);
        const product=await Products.find(id_query).select('_id reviews');
        res.status(200).json({
            message:`User Bob's score changed to 5 succesfully`,
            count:product.length,
            product:product,
        })
    }catch(err){
        res.send(err);
    }
}


// Task: Remove all reviews with score < 4 across the collection.

export const remove_all_reviews=async(req:Request,res:Response)=>{
    let id_exits_check:Record<string,unknown>={
        _id:{$exists:true}
    }
    let incerase_score_query:Record<string,unknown>={
        $pull:{reviews:{score:{$lt:4}}}

    }
    try{
        const remove_reviews=await Products.updateMany(id_exits_check,incerase_score_query);
        const product=await Products.find({}).lean().select('_id reviews');
        res.status(200).json({
            message:`Reviews with score less than 4 removed succeesfully`,
            count:product.length,
            product:product,
        })
    }catch(err)
{   res.status(500).send(`Error Occured while deleting reviews with score less than 4 ${err}`)
}}

// Task: Add field verified: true to reviews where score >= 5.

// currently its not working I will have to fix this 
export const verify_high_score_reviews = async (req: Request, res: Response) => {
   let filter: Record<string, unknown> = {
        _id: { $exists: true }
    };
    let push_query:Record<string,unknown>={
        $push:{reviews:"verified"},
    }
    let update_query: Record<string, unknown> = {
        $addToSet: { "reviews.$[elem].verified":'true'} 
    };
    



    let options: Record<string, unknown> = {
        arrayFilters: [
            { "elem.score": { $gte: 5 } }
        ]
    };


    try {
        const update_result = await Products.updateMany(filter, update_query,options);

        const product = await Products.find({}).lean().select('_id reviews');
        res.send({ 
            message:"Successfully added vefified:true to high score reviews.",
            update_details:update_result,
            products:product 
        });
    } catch (err) {
        res.status(500).send(`Error Ocuured while verifying the reviews with high score ${err}`)
    }
}


// Combined Updates with Array Filters

// Task: For _id:1, increment score for reviews where user starts with "A" and score < 6.

export const combined_array_updat=async(req:Request,res:Response)=>{
    let id_query:Record<string,unknown>={
        _id:{$in:1},
    }
    let update_query:Record<string,unknown>={
        $inc:{"reviews.$[elem].score":1 }
    }
    let options:Record<string,unknown>={
        arrayFilters:[
            {
                "elem.user":{$regex:/^A/},
                "elem.score":{$lt:6}
            }
        ]
    };
    try{
        const update_score=await Products.updateOne(id_query,update_query,options);
        const product=await Products.findOne(id_query).lean().select('_id reviews');
        res.status(200).json({
            message:`Score updated for user with first letter as A of their name`,
            product:product
        })
    }catch(err){
        res.send(`Error Occured ${err}`)
    }
}

// Task: For _id:15, set score to 4 for reviews where score < 4 and user name contains "S".

export const set_score_to_4=async(req:Request,res:Response)=>{
    let filter:Record<string,unknown>={
        _id:15
    };
    let update_query:Record<string,unknown>={
        $set:{"reviews.$[elem].score":4}
    };
    let options:Record<string,unknown>={
        arrayFilters:[
            {
                "elem.score":{$lt:4},
                "elem.user":{$regex:/S/i}
            }
        ]
    };

    try{
        const update_score=await Products.updateOne(filter,update_query,options);
        const product=await Products.findOne({ _id: 15 }).lean().select('_id reviews');
        
        res.send({ 
            message:"Successfully set score to 4 for id:15.",
            update_info: update_score,
            product: product
        });
    } catch (err) {
        res.status(500).send({
            message:`Error Occured while doing so ${err}`,
        });
    }
}


// Task: For _id:20, append "topRated" to tags of products where rating >= 4.5.

export const append_top_rated_tag=async(req:Request,res:Response)=>{
    let filter:Record<string,unknown>={
        _id:20,
        rating:{$gte:4.5}
    };
    let update_query:Record<string,unknown>={
        $addToSet:{tags:["topRated"]}
    };
    let options:Record<string,unknown>={};

    try {
        const update_result = await Products.updateMany(filter,update_query,options);
        const product = await Products.findOne({ _id: 20 }).lean().select('_id tags rating');
        res.send({ 
            message:`Top rated appended succesfully`,
            update_details:update_result,
            product:product
        });
    } catch (err) {
       res.status(500).json({
        message:`Error Occured while appending top rated tag ${err}`
       })
    }
}