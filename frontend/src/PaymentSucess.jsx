import { Box, Heading, Text, VStack } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'

const PaymentSucess = () => {
    const search = useSearchParams()[0].get('reference');


    
  return (
   <Box >
        <VStack h='100vh' justifyContent={'center'} alignItems={'center'}>
            <Heading textTransform={'uppercase'}>Order Successfull ✅</Heading>
            <Text>
                Reference No-  {search}
            </Text>
            
        </VStack>
   </Box>
  )
}

export default PaymentSucess