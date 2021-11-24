import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne, JoinColumn } from 'typeorm';
import { Cliente } from './Cliente';


@Entity("tab_telefone")
export class Telefone extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    ddd: number;

    @Column()
    numero: number;

    @Column([
    type: "enum",
    enum: TelefoneTipo,
    name:"tipo"
    ])
    tipo: TelefoneTipo;

    @ManyToOne(()=> Cliente, cliente => cliente.telefones)
    @JoinColumn({name:"cd_cliente"})
    cliente: Cliente;
}