import express from "express";
import ReviewsCtrl from "./googleReviews.controller.cjs";

const router = express.Router();

router.route("/").get(ReviewsCtrl.apiGetReviews);

export default router;
