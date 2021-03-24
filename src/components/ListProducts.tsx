import React from 'react'
import {RouteComponentProps} from 'react-router-dom'
import {sampleSize} from 'lodash'

import {Box, Text} from '@chakra-ui/react'
import { Product } from './Product'

interface ProductProps extends RouteComponentProps {
    products: IProduct[]
}

export const ProductsGrid: React.FC<ProductProps> = ({products, history}) =>{

    if(products.length < 1){
        return (
            <Box w='100%' minH={400} display='flex' justifyContent='center' alignItems='center'>
                <Text fontSize={30} color='blue.50' fontWeight='bold'>
                    No products to display 
                </Text>
            </Box>
        )
    }

    const randomProducts = sampleSize(products, products.length)
    return (
        <Box display='flex' flexWrap='wrap' >
            {randomProducts.map((product:IProduct)=>(
                <Product key={product._id} product={product} history={history} />
            ))}
        </Box>
    )
}