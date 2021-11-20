import {Request,Response} from 'express'

let dateTime = new Date()

export default {
    async create(req: Request, res: Response) {
        const {nome,cpf} = req.body;
        const id=3;
        const data = {id,nome,cpf};
        return res.status(201).json({data:data});
    },

    async list(req: Request, res: Response) {
        var result=[{id:1, cpf:"989809088", nome:"Jose da Silva"},{id:1, cpf:"989809077", nome:"Maria da Silva"}]
        return res.status(200).json({data:result});
    },

    async update(req: Request, res: Response) {
        const {nome,cpf} = req.body;
        const dataAlteracao= dateTime;
        const cadastro = {nome,cpf,dataAlteracao};
        cadastro.nome = "Jose da Silva Lima"
        return res.status(200).json({data:cadastro});
    },
    

}