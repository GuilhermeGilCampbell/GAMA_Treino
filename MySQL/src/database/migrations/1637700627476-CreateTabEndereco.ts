import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTabEndereco1637700627476 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "tab_endereco",
                columns: [
                    { name: "id", type: "integer", isPrimary: true, isGenerated: true, generationStrategy: "increment" },
                    { name: "numero", type: "varchar", length: "5" },
                    { name: "logradouro", type: "varchar", length: "50" },
                    { name: "cidade", type: "varchar", length: "50" }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("tab_endereco")
    }

}
