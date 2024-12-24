import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateTableClients1735040844879 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'clients',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: 'uuid',
                    },
                    {
                        name: 'name',
                        type: 'varchar',
                        length: '60',
                    },
                    {
                        name: 'email',
                        type: 'varchar',
                    },
                    {
                        name: 'street',
                        type: 'varchar',
                        length: '60',
                    },
                    {
                        name: 'postcode',
                        type: 'varchar',
                        length: '10',
                    },
                    {
                        name: 'city',
                        type: 'varchar',
                        length: '30',
                    },
                    {
                        name: 'notes',
                        type: 'varchar',
                        isNullable: true,
                        length: '2000',
                    },
                    {
                        name: 'createdAt',
                        type: 'timestamptz',
                        default: 'CURRENT_TIMESTAMP',
                    },
                    {
                        name: 'updatedAt',
                        type: 'timestamptz',
                        default: 'CURRENT_TIMESTAMP',
                    },
                ],
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.dropTable('clients');
    }

}
