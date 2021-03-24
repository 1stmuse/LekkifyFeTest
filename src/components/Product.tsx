import React from 'react'
import { RouteComponentProps} from 'react-router-dom'
import {Box, Image, Text} from '@chakra-ui/react'

interface Prop extends RouteComponentProps {
    product: IProduct
}

export const Product:React.FC<Prop> =({product, history}) =>{
    return(
        <Box onClick={()=>history.push(`/product/${product._id}`)} rounded={8} w={[400, 180,]} boxShadow='lg' h={250} mr={5} mt={10} cursor='pointer' 
        _hover={{
            transform:'scale(1.1)',
            transition:'.3s'
        }}
         >
            <Image src={product.image} w='100%' h='70%' />
            <Box my={8} p={2}>
                <Box display='flex' justifyContent='flex-start'>
                    <Text mr={2} fontSize={10}>Name :</Text>
                    <Text fontSize={10}> {product.name} </Text>
                </Box>
                <Box display='flex'>
                    <Text mr={2} fontSize={10}>Price :</Text>
                    <Text fontSize={10}> {product.price} </Text>
                </Box>
            </Box>

        </Box>
    )
}