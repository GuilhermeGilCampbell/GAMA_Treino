import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, BaseEntity, OneToOne, JoinColumn, OneToMany } from 'typeorm';
import { CreateTabClienteTelefone1637700701482 } from '../database/migrations/1637700701482-CreateTabClienteTelefone';
import { Endereco } from './Endereco';


@Entity("tab_cliente")
export class Cliente extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({name:"cpf_cnpj"})
    cpfCnpj: string;

    @Column()
    nome: string;

    @Column()
    ativo: boolean;

    @OneToOne(()=>Endereco, {cascade:true, eager: true})
    @JoinColumn({name:"cd_endereco"})
    endereco: Endereco;

    @OneToMany(()=>CreateTabClienteTelefone)

    @CreateDateColumn({name:"dt_inclusao"})
    dataInclusao: Date;

    @UpdateDateColumn({name:"dt_alteracao"})
    dataAlteracao: Date;


}