import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class CreateTabCliente1637700683693 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "tab_cliente",
                columns: [
                    { name: "id", type: "integer", isPrimary: true, isGenerated: true, generationStrategy: "increment" },
                    { name: "cpf_cnpj", type: "varchar", length: "15", isNullable: false },
                    { name: "nome", type: "varchar", length: "50", isNullable: false },
                    { name: "ativo", type: "boolean", default: true, isNullable: false },
                    { name: "dt_inclusao", type: "timestamp", default: "now()" },
                    { name: "dt_alteracao", type: "timestamp", default: "now()" },
                    { name: "cd_endereco", type: "integer", length: "5" }
                ]
            })
        )
        await queryRunner.createForeignKey("tab_cliente", new TableForeignKey({
            columnNames: ["cd_endereco"],
            referencedColumnNames: ["id"],
            referencedTableName: "tab_endereco",
            name: "fk_cliente_endereco"
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("tab_cliente")
    }

}
