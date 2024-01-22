import { instance } from "../index.js";
import crypto from "crypto"
import "dotenv/config";
export async function checkOut(req ,res) {
    try {
     const orderOptions = {
       amount: Number(req.body.amount * 100), // amount in paise (100 paise = 1 INR)
       currency: "INR",
       receipt: "order_receipt_123",
       payment_capture: 1, // auto-capture
     };

     instance.orders.create(orderOptions, (error, order) => {
       if (error) {
        
         console.error(error);
       } else {
         // Send the order details to the client
         res.json(order);
       }
     });
         
        
    } catch (error) {
     
    }
}
export async function paymentVerfication(req ,res) {
    try {
     
      const { razorpay_payment_id, razorpay_order_id, razorpay_signature } =
        req.body;
      const body = razorpay_order_id + "|" + razorpay_payment_id;
       const generatedSignature = crypto
         .createHmac("sha256", process.env.RAZORPAY_SECRET)
         .update(body.toString())
         .digest("hex");
      if (razorpay_signature === generatedSignature) {
        res.redirect(`http://localhost:5173/paymentSuccessfull?reference=${razorpay_order_id}`);
        // return res.status(200).json({
        //   succss: true,
        //   referenceId: razorpay_order_id,
        // });
      } else {
        res.status(400).json({
          sucess: false,
          message : "Unauthorized login"
        })
     }
    } catch (error) {
     
    }
}