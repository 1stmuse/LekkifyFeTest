import * as React from 'react'

import {Button, Box} from '@chakra-ui/react'

interface buttonProp {
    text: string,
    bg?: string
    mRight?:number
    onClick?():void
    hoverBg?:string
    hoverColor?:string
    icon?:React.ReactNode
    width?:string | number
    color?:string

}

export const AppButton: React.FC<buttonProp> =({text, color ,width, bg, mRight, hoverBg, hoverColor, icon, onClick})=>{
    return (
        <Button bg={bg} w={width}
        color={color}
        mr={mRight}
         _hover={{
             background: hoverBg,
             color: hoverColor
         }}
         onClick={onClick}
        >
            {icon && <Box mr={3}>
                {icon}
            </Box> }
            {text}
        </Button>
    )

}