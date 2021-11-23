import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';


@Entity("tab_cadastro")
export class Cadastro{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    cpf: string;

    @Column()
    nome: string;
}
