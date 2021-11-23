import {EntityRepository,Repository} from "typeorm";
import {Cadastro} from "../entities/Cadastro";

@EntityRepository(Cadastro)
class CadastroRepository extends Repository <Cadastro> {

}

export {CadastroRepository}