import {Router} from "express";
const updateRouter=Router();
import { increaseStock,setRating,removeTagfiled,rename_price_to_cost,update_stock_rating, multiply_price_increment_stock } from "../controller/updateOperatorTasks.js";



updateRouter.patch('/increase-stock',increaseStock)
updateRouter.patch('/set-rating',setRating);
updateRouter.patch('/unset-tag-field',removeTagfiled);
updateRouter.patch('/rename-price-to-cost',rename_price_to_cost);
updateRouter.patch('/update-stock-and-rating',update_stock_rating);
updateRouter.patch('/multiply-price-update-stock',multiply_price_increment_stock);






export default updateRouter;