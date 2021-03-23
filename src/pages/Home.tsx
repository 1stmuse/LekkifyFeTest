import * as React from "react"

import {Box} from '@chakra-ui/react'
import {Layout} from '../Layout'
import { AppButton } from "../components/Button"


export const Home :React.FC =() =>{


    return (
        <Layout>
            <Box mt={10}>
                <Box w={[200, 300]} display='flex' justifyContent='space-around'>
                    <AppButton text='All' hoverBg='black' hoverColor='#fff'/>
                    <AppButton text='Highest prices' hoverBg='black' hoverColor='#fff' />
                    <AppButton text='Lowest Prices' hoverBg='black' hoverColor='#fff' />
                </Box>
            </Box>
        </Layout>
    )
}