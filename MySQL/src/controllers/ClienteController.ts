import {Request,Response} from 'express'
import {getCustomRepository} from 'typeorm';
import {ClienteRepository} from "../repositories/clienteRepository";

export default {
    async create(req: Request, res: Response) {
        const {cpfCnpj,nome, endereco} = req.body;
        let data = {cpfCnpj,nome,endereco};
        
        const repository = getCustomRepository(ClienteRepository);
        data = await repository.save(data);

        return res.status(201).json({data:data});
    }

}