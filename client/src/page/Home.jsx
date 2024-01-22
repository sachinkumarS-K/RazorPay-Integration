import React, { useEffect, useState } from 'react'
import Card from '../Card'
import axios from 'axios'
import CardContainer from '../components/CardContainer';
import { useNavigate } from 'react-router-dom';

const Home = () => {
const navigate = useNavigate()
  const checkOutHandler = async (amount, img) => {
        const key = await axios.get("http://localhost:4000/api/getKey");
       const { data } = await axios.post("http://localhost:4000/api/checkout", { amount });
       const options = {
         key: key.data.key, // Enter the Key ID generated from the Dashboard
         amount: data.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
         currency: "INR",
         name: "Sachin Kumar ",
         description: "Test Transaction",
         image: img,
         order_id: data.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
         callback_url: "http://localhost:4000/api/paymentVerification",
         prefill: {
           name: "Sachin Kumar",
           email: "sachin.kumar@example.com",
           contact: "9000090000",
         },
         notes: {
           address: "Razorpay Corporate Office",
         },
         theme: {
           color: "#ccff99",
         },
       };
    
 const razor = new window.Razorpay(options);
 razor.open();
       navigate("/paymentSuccessfull");
   };
 
  return (
    <div>
      <CardContainer checkOutHandler={checkOutHandler} />
      {/* <div className="flex gap-5 justify-center">
        <Card
          amount={2500}
          img={
            "https://rukminim2.flixcart.com/image/416/416/xif0q/cycle/o/m/k/xc-900-6061-alloy-frame-shimano-acera-zoom-lockout-suspension-27-original-imagpk9gshwdhzpa.jpeg?q=70&crop=false"
          }
          checkout={checkOutHandler}
        />
        <Card
          amount={76500}
          img={
            "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/k/l/l/-original-imagtc5fz9spysyk.jpeg?q=70&crop=false"
          }
          checkout={checkOutHandler}
        />
        <Card
          amount={1500}
          img={
            "https://rukminim2.flixcart.com/image/416/416/l5fnhjk0/dslr-camera/f/t/m/eos-r10-24-2-r10-canon-original-imagg42fsbgv79da.jpeg?q=70&crop=false"
          }
          checkout={checkOutHandler}
        />
        <Card
          amount={3500}
          img={
            "https://rukminim2.flixcart.com/image/416/416/xif0q/monitor/b/m/o/ek240ye-full-hd-23-8-2024-um-qe1si-e02-acer-original-imagxftkeypr4eda.jpeg?q=70&crop=false"
          }
          checkout={checkOutHandler}
        />
      </div> */}
    </div>
  );
}

export default Home
