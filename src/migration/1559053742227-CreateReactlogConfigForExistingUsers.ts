import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateReactlogConfigForExistingUsers1559053742227 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(`
        INSERT INTO reactlog_configs (fk_user_id)
        SELECT id FROM users`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(`
        DELETE FROM reactlog_configs
        WHERE true`
    );
  }
}
