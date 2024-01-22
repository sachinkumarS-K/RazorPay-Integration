import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ChakraProvider } from "@chakra-ui/react";
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './page/Home.jsx'
import PaymentSuccessful from './PaymentSuccessful.jsx';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/paymentSuccessfull" element={<PaymentSuccessful />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
