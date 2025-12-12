import {Router} from "express";
const array_router=Router();
import {array_push_limitededition,array_pull_popular,push_reviews,pull_reviews_score,increase_score,bob_score, remove_all_reviews,verify_high_score_reviews,combined_array_updat,set_score_to_4,append_top_rated_tag} from '../controller/arrayUpdatesandFilter.js';


array_router.patch('/update-tag-limitedEdition',array_push_limitededition);
array_router.delete('/pull-tag-popular',array_pull_popular);
array_router.post('/push-review',push_reviews);
array_router.delete('/pull-reviews-score',pull_reviews_score);
array_router.patch('/filter-score-increase',increase_score);
array_router.patch('/filter-bob-score',bob_score);
array_router.patch('/filter-review-remove',remove_all_reviews);

array_router.post('/filter-verify-review',verify_high_score_reviews);
array_router.patch('/filter-increase-score-by-1',combined_array_updat);
array_router.patch('/filter-set-score-to-4',set_score_to_4);

array_router.patch('/filter-append-top-rated',append_top_rated_tag);




export default array_router;