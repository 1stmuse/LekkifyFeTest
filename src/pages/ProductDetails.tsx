import * as React from 'react'
import {RouteComponentProps} from 'react-router-dom'
import { Box, Center, Image, Text, CircularProgress } from '@chakra-ui/react'
import { Layout } from '../Layout'

import {getProduct} from '../Api'
import { AppButton } from '../components/Button'

interface Props extends RouteComponentProps {
    
}

export const ProductDetails:React.FC<Props> =({history}) =>{
    const [product, setProduct] = React.useState<IProduct | null >({})
    const [loading, setLoading] = React.useState<boolean>(false)
    console.log(history.location.pathname)
    const id:string = history.location.pathname.split('/')[2]
    
    React.useEffect(()=>{
        setLoading(true)
        getProduct(id).then(data=>{
            setProduct(data?.data.product)
            setLoading(false)
        })
    },[])

    return (
        <Layout>
            {
                loading
                 ?                 
                    <Center w='100%' minH={400}>
                        <CircularProgress isIndeterminate color="green.300" /> 
                    </Center>
                :
                    <Box display='flex'alignItems='center' flexDir='column' w='50%' h={400} my={10} mx='auto' boxShadow='md'>
                        <Image src={product?.image} h='50%' />
                        <Box my={8} p={2}>
                            <Box display='flex' justifyContent='flex-start'>
                                <Text mr={2} >Name :</Text>
                                <Text > {product?.name} </Text>
                            </Box>
                            <Box display='flex'>
                                <Text mr={2}>Price :</Text>
                                <Text > {product?.price} </Text>
                            </Box>
                            <Box mt={10}>
                                <AppButton width={130} mRight={5} text= 'add to Cart' hoverBg='blue' hoverColor='white' />
                                <AppButton onClick={()=>history.goBack()} color="white" width={130} text='Cancel' bg='red' />
                            </Box>
                        </Box>
                    </Box>
            }
        </Layout>
    )
}