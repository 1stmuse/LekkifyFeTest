import * as React from "react"
import {RouteComponentProps} from 'react-router-dom'

import {Box, Center, CircularProgress} from '@chakra-ui/react'
import {Layout} from '../Layout'
import { AppButton } from "../components/Button"
import { AddIcon } from "@chakra-ui/icons"
import { ProductsGrid } from "../components/ListProducts"
import {getProducts} from '../Api'

interface homeProp extends RouteComponentProps {

}
export const Home :React.FC<homeProp> =({history}) =>{
const [products, setProducts] = React.useState<IProduct[] | []>([])
const [loading, setLoading] = React.useState<boolean>(false)


React.useEffect(()=>{
    setLoading(true)
    getProducts().then(data=>{
        setProducts(prevProd => [...prevProd, ...data?.data.products] )
        setLoading(false)
    })
},[])

    return (
        <Layout>
            <Box my={10}>
                <Box  display='flex' justifyContent='space-between'>
                    <Box>
                        <AppButton mRight={2} text='All' hoverBg='black' hoverColor='#fff'/>
                        <AppButton mRight={2} text='Highest prices' hoverBg='black' hoverColor='#fff' />
                        <AppButton text='Lowest Prices' hoverBg='black' hoverColor='#fff' />
                    </Box>
                    <Box>
                        <AppButton width={120} text='add' hoverBg='black' hoverColor='#fff'
                            icon={<AddIcon/>}
                            onClick={()=> history.push('/addProduct')}
                        />
                    </Box>
                </Box>
                <Box>
                    {loading ? 
                        <Center w='100%' minH={400}>
                            <CircularProgress isIndeterminate color="green.300" /> 
                        </Center>
                        :
                        <ProductsGrid products={products} history={history} />
                    }
                </Box>
            </Box>
        </Layout>
    )
}