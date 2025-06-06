import { app } from "../../server"
import { CreateUser } from "./create-user"

export const UserRoutes = async () =>{ 
    app.register(CreateUser)
    // app.register(EditUser) -> criar outras rotas
}