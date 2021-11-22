import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {           //metodo up é para instruções de criacao
    return await knex.schema.createTable('tab_cadastro',(table)=>{
        table.increments('id').unique();
        table.specificType('çpf','VARCHAR(11)').notNullable().unique();
        table.specificType('nome','VARCHAR(50)').notNullable();
    })
}


export async function down(knex: Knex): Promise<void> {         //metodo up é para instruções de reversao
    return await knex.schema.dropTable('taab_cadastro');
}

