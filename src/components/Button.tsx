import * as React from 'react'

import {Button} from '@chakra-ui/react'

interface buttonProp {
    text: string,
    bg?: string
    onClick?():void
    hoverBg?:string
    hoverColor?:string

}

export const AppButton: React.FC<buttonProp> =({text, bg, hoverBg, hoverColor})=>{
    return (
        <Button bg={bg}
         _hover={{
             background: hoverBg,
             color: hoverColor
         }}
        >
            {text}
        </Button>
    )

}