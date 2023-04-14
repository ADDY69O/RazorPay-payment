import { Box, Heading, Text, VStack } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const PaymentSucess = () => {
    const { reference } = useParams();


    
  return (
   <Box >
        <VStack h='100vh' justifyContent={'center'} alignItems={'center'}>
            <Heading textTransform={'uppercase'}>Order Successfull ✅</Heading>
            <Text>  
                Reference No-  {reference}
            </Text>
            
        </VStack>
   </Box>
  )
}

export default PaymentSucess