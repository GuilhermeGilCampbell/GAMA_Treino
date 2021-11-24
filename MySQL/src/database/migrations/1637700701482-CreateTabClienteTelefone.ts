import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class CreateTabClienteTelefone1637700701482 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        
        await queryRunner.createTable(
            new Table({
                name: "tab_cliente_telefone",
                columns: [
                    { name: "id", type: "integer", isPrimary: true, isGenerated: true, generationStrategy: "increment" },
                    { name: "cd_cliente", type: "integer", length: "5" },
                    { name: "tipo", type: "varchar", length: "10" },
                    { name: "ddd", type: "integer", length: "3" },
                    { name: "numero", type: "integer", length: "10" }
                ]
            })
        )
        await queryRunner.createForeignKey("tab_cliente", new TableForeignKey({
            columnNames: ["cd_endereco"],
            referencedColumnNames: ["id"],
            referencedTableName: "tab_cliente",
            name: "fk_telefone_endereco"
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("tab_cliente_telefone")
    }

}
