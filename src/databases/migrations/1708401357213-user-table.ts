import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class UserTable1708401357213 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'users',
        columns: [
          {
            name: 'id',
            type: 'varchar',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'email',
            type: 'varchar',
            isUnique: true,
            length: '255',
          },
          {
            name: 'password',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'phone',
            type: 'varchar',
            isNullable: true,
            length: '50',
          },
          {
            name: 'full_name',
            type: 'varchar',
            isNullable: false,
            length: '255',
          },
          {
            name: 'login_type',
            type: 'enum',
            enum: ['EMAIL', 'GOOGLE'],
            default: `'EMAIL'`,
          },
          {
            name: 'social_id',
            type: 'varchar',
            isNullable: true,
            length: '255',
          },
          {
            name: 'avatar',
            type: 'varchar',
            isNullable: true,
            length: '255',
          },
          {
            name: 'state',
            type: 'text',
            isNullable: true,
            isArray: true,
          },
          {
            name: 'status',
            type: 'enum',
            enum: ['PENDING', 'ACTIVE'],
            default: `'PENDING'`,
          },
          {
            name: 'payment_customer_id',
            type: 'varchar',
            isNullable: true,
            length: '255',
          },
          {
            name: 'is_deleted',
            type: 'bool',
            isNullable: false,
            default: false,
          },
          {
            name: 'role',
            type: 'enum',
            isNullable: true,
            enum: ['JOCKEY', 'ADMIN', 'TRAINER', 'MANAGER'],
            default: `'JOCKEY'`,
          },
          {
            name: 'birth_day',
            type: 'date',
            isNullable: true,
          },
          {
            name: 'address',
            type: 'varchar',
            isNullable: true,
            length: '255',
          },
          {
            default: 'now()',
            name: 'created_at',
            type: 'timestamp',
          },
          {
            default: 'now()',
            name: 'updated_at',
            type: 'timestamp',
          },
        ],
      }),
      true,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('users');
  }
}
