import express from "express"
import "dotenv/config"
import Razorpay from 'razorpay'
import router from "./routes/paymentRoutes.js"
import cors from "cors";
import mongoose from "mongoose";



const app = express()


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use("/api" , router)

mongoose.connect(process.env.MONGO_URL).then(({ connection }) => {
console.log("databse connected " + connection.host)
})

export const instance = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_SECRET,
});


app.get("/api/getKey", (req, res) => {
  res.json({
    key: process.env.RAZORPAY_KEY_ID,
  });
})

app.listen(process.env.PORT, () => {
     console.log('SERVER IS RUNNING ON PORT' , process.env.PORT)
})