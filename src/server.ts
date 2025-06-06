import fastify from "fastify";
import { routes } from "./routes";
import cors from "@fastify/cors";

export const app = fastify();
app.register(cors, {});

app.register(routes);

app.listen(
  { 
    // host: '0.0.0.0', 
    port: 3333,
  },
  (err, address) => {
    if (err) {
      console.log("error");
    } else {
      console.log("serve iniciado");
    }
  }
);
