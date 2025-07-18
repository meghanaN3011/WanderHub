const express = require("express");
const router = express.Router({mergeParams: true});
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const {reviewSchema} = require("../schema.js");
const Review = require("../models/review.js");
const Listing = require("../models/listing.js");
const {validateReview, isLoggedIn, isreviewAuthor} = require("../middleware.js");
const { createReview } = require("../controllers/reviews.js");
const reviewController = require("../controllers/reviews.js");

//Reviews
//Post Review Route
router.post("/", isLoggedIn, validateReview, wrapAsync(reviewController.createReview));

//Delete Review Route
router.delete("/:reviewId", isLoggedIn, isreviewAuthor, wrapAsync(reviewController.destroyReview));

module.exports = router;