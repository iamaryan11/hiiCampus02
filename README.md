🚀 MongoDB Advanced Queries & Update Assignment Backend API

This project contains the backend API for the MongoDB Advanced Queries & Update Assignment, demonstrating mastery of advanced querying, logical operators, and various update operations, including array manipulations and array filters, using TypeScript and Mongoose.

⚙️ Setup and Installation:

Prerequisites:

Node.js (LTS recommended)

MongoDB instance (local or remote)


1.) Installation Steps

    Clone the Repository: https://github.com/iamaryan11/hiiCampus02

2.) Install Dependencies:

    npm install

3.) Configuration: Configure your MongoDB connection string in your environment variables or a .env file.

4.) The server uses ts-node for a smooth development experience.

    npm run dev

The API is accessible at: http://localhost:1111

## 🌐 API Endpoints
The endpoints are categorized into three main routes corresponding to the assignment sections: Queries, Simple Updates, and Array Updates.

1.) General Product Queries:

    Base Route: /products


    /products/allproducts

    /products/priceandrating

    /products/priceandratingtwo

    /products/category_filtering_one

    /products/category_filtering_two

    /products/logical-filtering-one

    /products/logical-filtering-two

    /products/regex-search-one

    /products/regex-search-two

    /products/existence-check-one

    /products/existence-check-two

2.) Update Operators: 

    Base Route: /update

    /update/increase-stock

    /update/set-rating

    /update/unset-tag-field

    /update/rename-price-to-cost

    /update/update-stock-and-rating

    /update/multiply-price-update-stock

3. Array Updates & Array Filters:

        Base Route: /array

        /array/update-tag-limitedEdition

        /array/pull-tag-popular

        /array/push-review

        /array/pull-reviews-score

        /array/filter-score-increase

        /array/filter-bob-score

        /array/filter-review-remove

        /array/filter-verify-review

        /array/filter-increase-score-by-1

        /array/filter-set-score-to-4

        /array/filter-append-top-rated



