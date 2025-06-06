import fastify from "fastify"
import { routes } from "./routes"
import cors from "@fastify/cors"

export const app = fastify()
app.register(cors, {})

app.register(routes)

app.listen({
    port: 3333,
},(err, address) =>{
    if(err){
        console.log("error")
    }else{
        console.log("serve iniciado")
    }

}
)