import React, {useRef, useState} from "react"
import {RouteComponentProps} from 'react-router-dom'
import {postProducts} from '../Api'
import {
    Box, 
    Text, 
    Center,
    FormControl,
    FormLabel,
    Input,
    FormHelperText
} from '@chakra-ui/react'
import {Layout} from '../Layout'
import { AppButton } from "../components/Button"

export const AddProduct:React.FC =({history}) =>{
    const uploadRef = useRef<HTMLInputElement>(null)
    const [imgUri, setImgUri] = useState<string>('')
    const [uploading, setUploading] = useState<boolean>(false)
    const [name, setName] = useState<string>('')
    const [price, setPrice] = useState<string>('')

    const uploadImg = async (file:FileList | null) =>{
        // console.log(files[0].name)
        const files = file![0]
        const data = new FormData()
        data.append('file', files)
        data.append('upload_preset', 'muse_img')
        setUploading(true)
        const res = await fetch('https://api.cloudinary.com/v1_1/muse1/image/upload',
        {
            method:'POST',
            body: data
        })

        const picture = await res.json()
        setImgUri(picture.url)
        setUploading(false)
    }

    const addProduct = () =>{
        const dataToSubmit:Omit<IProduct, '_id'> = {
            name,
            price,
            image:imgUri
        }
        postProducts(dataToSubmit).then(data=>{
            if(data?.status === 200) history.push('/')
        }).catch(er=> console.log(er))
    }

    return (
        <Layout>
            <Box my={10}>
                <Center>
                    <Text fontSize={25} color='blue.600' fontWeight='bold'>Add new Product</Text>
                </Center>
                <Center>
                <Box boxShadow='md' p={5} w={[300, 600]} >
                    <FormControl>
                        <FormLabel>Name</FormLabel>
                        <Input type='text' value={name} onChange={(e)=> setName(e.target.value)} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Price</FormLabel>
                        <Input type='text' value={price} onChange={(e)=>setPrice(e.target.value)} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Image</FormLabel>
                        <Input type='file' display='none' ref={uploadRef}
                        accept=".png, .jpg, .jpeg"
                        onChange={(e)=>uploadImg(e.target.files)}
                         />
                        <Input placeholder="upload image" cursor='pointer'
                            onClick={()=>uploadRef.current?.click()}
                            value={imgUri}
                        />
                        <FormHelperText>
                            {uploading && <Text>uploading</Text> }
                        </FormHelperText>
                    </FormControl>
                    <Center mt={8}>
                        <AppButton onClick={addProduct} width={150} text="add" hoverBg='blue' hoverColor="white" />
                    </Center>
                </Box>
                </Center>
            </Box>
        </Layout>
    )
}