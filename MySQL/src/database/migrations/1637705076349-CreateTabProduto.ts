import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateTabProduto1637705076349 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "tab_produto",
                columns: [
                    { name: "id", type: "integer", isPrimary: true, isGenerated: true, generationStrategy: "increment" },
                    { name: "cd_barras", type: "integer", length: "5" },
                    { name: "nome", type: "varchar", length: "50"},
                    { name: "vl_unit", type: "numeric", precision: 8, scale:2},
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("tab_produto")
    }

}
