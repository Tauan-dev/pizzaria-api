import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateOrderTable1713393429178 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'order',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'status',
            type: 'varchar',
            length: '255',
            isNullable: false,
          },
          {
            name: 'totalOrder',
            type: 'decimal',
            precision: 10,
            scale: 2,
            isNullable: false,
          },
          {
            name: 'dateHour',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP',
          },
          {
            name: 'userCPF',
            type: 'varchar',
            length: '15', 
            isNullable: false, 
          },
          {
            name: 'adressId',
            type: 'int',
            isNullable: false, 
          },
        ],
        foreignKeys: [
          {
            columnNames: ['userCPF'],
            referencedColumnNames: ['cpf'],
            referencedTableName: 'users',
            onDelete: 'CASCADE',
          },
          {
            columnNames: ['adressId'],
            referencedColumnNames: ['id'],
            referencedTableName: 'adresses',
            onDelete: 'CASCADE',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('order');
  }
}
