import {Request,Response} from 'express'

import knex from '../database/connection'

let dateTime = new Date()

export default {
    async create(req: Request, res: Response) {
        const {nome,cpf} = req.body;
        
        const data = {cpf,nome};
        await knex('tab_cadastro').insert(data);

        return res.status(201).json({data:data});
    },

    async list(req: Request, res: Response) {
        var result= await knex('tab_cadastro').orderBy('nome');
        return res.status(200).json({data:result});
    },

    async find(req: Request, res: Response) {
        const {id} = req.params;
        var user= await knex('tab_cadastro').where({id});
        return res.status(200).json({user});
    },

    async update(req: Request, res: Response) {
        const { id } = req.params;
        const {nome,cpf} = req.body;

        const data = {cpf,nome};

        await knex('tab_cadastro').update(data).where({id});

        const user = await knex ('tab_cadastro').where({id});
        return res.status(200).json({data:user});
    },

    async delete(req: Request, res: Response) {
        const {id} = req.params;
        await knex('tab_cadastro').where({id}).del();
        return res.status(200).json({ message:'Cadastro nao pode ser excluido'});
       
    },

}