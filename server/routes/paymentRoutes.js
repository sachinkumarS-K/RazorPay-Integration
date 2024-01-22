import express from 'express'
import { checkOut, paymentVerfication } from '../controller/paymentController.js'

const router = express.Router()

router.route("/checkout").post(checkOut);
router.route("/paymentVerification").post(paymentVerfication)

export default router