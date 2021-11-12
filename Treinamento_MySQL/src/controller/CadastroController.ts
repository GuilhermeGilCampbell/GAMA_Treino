import express, { Request,Response} from 'express';

export default {
    async create(req: Request, res: Response) {
        const { nome , cpf} = req.body;
        const id=4;
        const data = {id,nome,cpf};
        return res.status(201).json({data:data});
    },

    async list(req: Request, res: Response) {
        var result = [{id:1, cpf:"12312312312",nome:"JOSE DA SILVA"},{id:2,cpf:"015454545454",nome:"Maria da Silva"}]
        return res.status(200).json({data:result});
    },

    async update(req: Request, res: Response) {
        const { nome , cpf} = req.body;
        const dataAlteracao = '30/05/2021 16:00';
        const cadastro = {nome,cpf,dataAlteracao};
        cadastro.nome = "Jose da Silva Lima"
        return res.status(201).json({data:cadastro});
    }
}