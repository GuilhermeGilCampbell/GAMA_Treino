import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm';


@Entity("tab_endereco")
export class Endereco extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    logradouro: string;

    @Column()
    numero: string;

    @Column()
    cidade: string;
}