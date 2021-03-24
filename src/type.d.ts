
interface IProduct {
    _id:string
    name:string,
    price:string,
    image:string
}

type ApiResponseType = {
    message:string
    status:string
    product?: IProduct
    products?: IProduct[]
}

interface ProductProps {
    product: IProduct
}