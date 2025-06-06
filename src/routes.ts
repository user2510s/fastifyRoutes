import { ProductsRoutes } from "./routes/products/@productsRoutes"
import { UserRoutes } from "./routes/users/@userRoutes"
// import { CreatProduct } from "./routes/products/create-products"
import { app } from "./server"

export const routes = async () => {
    app.register(ProductsRoutes)
    app.register(UserRoutes)
}