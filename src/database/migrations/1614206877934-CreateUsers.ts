import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateUsers1614206877934 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "users",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "name",
                        type: "varchar",
                        
                    },
                    {
                        name: "email",
                        type: "varchar",
                    },
                    {
                      name: "created_at",
                      type: "varchar",
                      default: "now()",  
                    },
                    
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("users");
    }
}
