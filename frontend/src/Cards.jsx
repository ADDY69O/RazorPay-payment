import { Button, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const Cards = ({amount,img,checkoutHandler}) => {
  return (
   <VStack  marginBlockEnd={"1.2rem"} boxSize={'64'} objectFit={'cover'}>
    <Image src={img}/>
    <Text>{amount}</Text>
    <Button onClick={()=> checkoutHandler(amount)}>Submit</Button>
   </VStack>
  )
}

export default Cards