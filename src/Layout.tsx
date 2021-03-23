import * as React from 'react'

import {Container} from '@chakra-ui/react'
import { Header } from './components/Header'

export const Layout:React.FC =({children})=>{
    return (
        <Container maxW="container.lg">
            <Header/>
            {children}
        </Container>
    )
}