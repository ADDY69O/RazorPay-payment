import express from "express";

import { checkout, checkVerification } from "../controllers/PaymentControllers.js";
const router = express.Router();

router.route('/checkout').post(checkout);
router.route('/verify').post(checkVerification);

export default router;