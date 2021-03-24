import axios, { AxiosResponse } from 'axios'

const rootUrl: string = 'http://localhost:8080/api'

export const getProducts = async () =>{
    try {
        const response: AxiosResponse<ApiResponseType> = await axios.get(`${rootUrl}/products`)
        return response

    } catch (error) {
        console.log(error)
    }
}

export const getProduct = async (id:string) =>{
    try {
        const response: AxiosResponse<ApiResponseType> = await axios.get(`${rootUrl}/products/${id}`)
        return response

    } catch (error) {
        console.log(error)
    }
}

export const postProducts = async (data: Omit<IProduct, '_id'>) =>{
    try {
        const product: Omit<IProduct, '_id'> ={
            name:data.name,
            price:data.price,
            image:data.image
        }
        const response: AxiosResponse<ApiResponseType> = await axios.post(`${rootUrl}/products`, product)

        return response

    } catch (error) {
        console.log(error)
    }
}