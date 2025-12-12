import {Router} from "express";
import { getProducts,priceRating_one,priceRating_two,categoryFiltering_one,categoryFiltering_two , LogicalOperator_one, LogicalOperator_two, RegexSearch_one, RegexSearch_two, ExistenceCheck_one, ExistenceCheck_two} from "../controller/productController.js";
const ProductRoute=Router();

ProductRoute.get('/allproducts',getProducts);
ProductRoute.get('/priceandrating',priceRating_one);
ProductRoute.get('/priceandratingtwo',priceRating_two);
ProductRoute.get('/category_filtering_one',categoryFiltering_one);
ProductRoute.get('/category_filtering_two',categoryFiltering_two);
ProductRoute.get('/logical-filtering-one',LogicalOperator_one);

ProductRoute.get('/logical-filtering-two',LogicalOperator_two);
ProductRoute.get('/regex-search-one',RegexSearch_one);

ProductRoute.get('/regex-search-two',RegexSearch_two);

ProductRoute.get('/existence-check-one',ExistenceCheck_one);
ProductRoute.get('/existence-check-two',ExistenceCheck_two);









export default ProductRoute;