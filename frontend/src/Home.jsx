import { Box, Card, Stack } from '@chakra-ui/react'
import React from 'react'
import Cards from'./Cards'
import axios from 'axios'

function Home() {
  const checkoutHandler=async(amount)=>{

    const {data:{key}}=await axios.get("https://rr-sp6r.onrender.com/api/getKey");

    const {data:{order}}  = await axios.post("https://rr-sp6r.onrender.com/api/checkout",{
      amount
    })


  

    
const options = {
  key, // Enter the Key ID generated from the Dashboard
  amount: order.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
  currency: "INR",
  name: "ecommerce shop",
  description: " Transaction for ordered item",
  image: "https://i.pinimg.com/736x/11/fc/fd/11fcfd187dd4949d4b8559f867d9af89.jpg",
  order_id:order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
  callback_url: "https://rr-sp6r.onrender.com/api/verify",
  prefill: {
      name: "Gaurav Kumar",
      email: "gaurav.kumar@example.com",
      contact: "9000090000"
  },
  notes: {
      address: "Razorpay Corporate Office"
  },
  theme: {
      color: "#181919"
  }
};
const  razor = new window.Razorpay(options);

  razor.open();



  }
  
  return (

    
    <Box>
      <Stack h={'100vh'} alignItems={'center'} justifyContent={'center'} direction={["column","row"]}>
        <Cards  amount={88000} img={"https://m.media-amazon.com/images/I/71eXNIDUGjL._SL1500_.jpg"}  checkoutHandler={checkoutHandler}/>
        <Cards amount={1800} img={"https://m.media-amazon.com/images/I/61ljxTBpTCL._SL1500_.jpg"}checkoutHandler={checkoutHandler} />
      </Stack>

    </Box>
  )
}

export default Home;