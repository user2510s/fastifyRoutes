import { app } from "../../server"
import { CreatProduct } from "./create-products"

export const ProductsRoutes = async() =>{
    app.register(CreatProduct)
}