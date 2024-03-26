import { MigrationInterface, QueryRunner } from "typeorm";

export class InitUsers1711478282784 implements MigrationInterface {
    name = 'InitUsers1711478282784'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "mentor" ("id" SERIAL NOT NULL, "email" character varying NOT NULL, "passwordHash" character varying NOT NULL, "firstName" character varying NOT NULL, "lastName" character varying, "birthdayDate" date, "mobilePhone" character varying, "discord" character varying, "avatar" character varying, "description" character varying, "github" character varying, "projectIds" integer, "managerId" integer, CONSTRAINT "UQ_e03cfa18e81812d44f5cdf94795" UNIQUE ("email"), CONSTRAINT "UQ_783ec439469b74a84ebc99cec1d" UNIQUE ("mobilePhone"), CONSTRAINT "UQ_eddf6c7ac32c0ccd39da749e7e2" UNIQUE ("discord"), CONSTRAINT "PK_9fcebd0a40237e9b6defcbd9d74" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "manager" ("id" SERIAL NOT NULL, "email" character varying NOT NULL, "passwordHash" character varying NOT NULL, "firstName" character varying NOT NULL, "lastName" character varying, "birthdayDate" date, "mobilePhone" character varying, "discord" character varying, "avatar" character varying, "description" character varying, "github" character varying, CONSTRAINT "UQ_ee8fba4edb704ce2465753a2edd" UNIQUE ("email"), CONSTRAINT "UQ_a073c7dc4cda7ebb52c76b52da3" UNIQUE ("mobilePhone"), CONSTRAINT "UQ_a204b34c58e2273c2022e409b40" UNIQUE ("discord"), CONSTRAINT "PK_b3ac840005ee4ed76a7f1c51d01" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "mentor" ADD CONSTRAINT "FK_191030b57cc126fddb76ce94707" FOREIGN KEY ("managerId") REFERENCES "manager"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "mentor" DROP CONSTRAINT "FK_191030b57cc126fddb76ce94707"`);
        await queryRunner.query(`DROP TABLE "manager"`);
        await queryRunner.query(`DROP TABLE "mentor"`);
    }

}
