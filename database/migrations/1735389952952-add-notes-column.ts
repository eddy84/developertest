import { MigrationInterface, QueryRunner } from "typeorm";

export class AddNotesColumn1735389952952 implements MigrationInterface {
    name = 'AddNotesColumn1735389952952'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "clients" ADD "notes" character varying(2000)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "clients" DROP COLUMN "notes"`);
       
    }

}
