import { app } from "./app"
// import 'reflect-metadata';
// import express from 'express';
// import "./database";
// const app = express();

// import { router } from "./routes"

// // /**
// //  * GET = Buscar 
// //  * POST = Salvar
// //  * PUT = Alterar
// //  * DELETE = Deletar
// //  * PATCH = Alteração especifica
// //  */

// //  //http://localhost:3333/users

// // app.get("/", (request, response) => {
// //  return response.json({messege: "Hello Word - NLW04"})
// // });

// // app.post("/", (request, response) => {
// //     //Recebeu os dados para salvar
// //     return response.json({message: "Os dados foram salvos com sucesso !"});
// // });
// app.use(express.json());
// app.use(router);

app.listen(3333, () => console.log("Server is running!"));

