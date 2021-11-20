import express, { request } from "express";
import routes from './routes';

const app = express();

app.listen(3000,()=>console.log("Servidor inicializado na porta 3000"));

app.use(express.json());

app.use(routes);

app.get("/",(request,response)=>{
    return response.json({mensagem: "Bem-vindos ao Gama - XP",ano:2021});
});
