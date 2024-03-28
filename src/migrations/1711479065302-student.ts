import {MigrationInterface, QueryRunner} from 'typeorm';

export class Student1711479065302 implements MigrationInterface {
  name = 'Student1711479065302';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "student" ("id" SERIAL NOT NULL, "email" character varying NOT NULL, "passwordHash" character varying NOT NULL, "firstName" character varying NOT NULL, "lastName" character varying, "birthdayDate" date, "mobilePhone" character varying, "discord" character varying, "avatar" character varying, "description" character varying, "github" character varying, "projectIds" integer, CONSTRAINT "UQ_a56c051c91dbe1068ad683f536e" UNIQUE ("email"), CONSTRAINT "UQ_e84e938eae7d306e4c1f15cff25" UNIQUE ("mobilePhone"), CONSTRAINT "UQ_18cbfb5b5201483d0dd8d1e0293" UNIQUE ("discord"), CONSTRAINT "PK_3d8016e1cb58429474a3c041904" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "student"`);
  }
}
