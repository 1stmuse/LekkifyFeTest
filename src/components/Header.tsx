import * as React from 'react'
import {BiCart} from 'react-icons/bi'
import {FaUserAlt} from 'react-icons/fa'
import {Box , Text, IconButton, Spacer} from '@chakra-ui/react'

export const Header:React.Fc = () =>{
    return (
        <Box display='flex' alignItems='center' boxShadow='base' p={5}>
            <Box display='flex'>
                <Text color='red.600' fontSize='4xl'>
                    Easy
                </Text>
                <Text color='blue.600' fontSize='4xl' >
                    Buy
                </Text>
            </Box>
            <Spacer/>
            <Box display='flex'>
                <IconButton mr={5} aria-label='cart button' icon={<BiCart/>} />
                <IconButton aria-label='user account' icon={<FaUserAlt/>}/>
            </Box>
        </Box>
    )
}