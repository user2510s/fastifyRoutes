import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";

export const CreateUser = async (app: FastifyInstance) => {
  app.get("/User", (request: FastifyRequest, reply: FastifyReply) => {
    return reply.status(200).send("usuario criado com sucesso");
  });
};
