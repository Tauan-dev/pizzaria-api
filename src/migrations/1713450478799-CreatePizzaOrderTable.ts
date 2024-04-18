import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class CreatePizzaOrderTable1713450478799 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'order_pizza',
        columns: [
          {
            name: 'id',
            type: 'integer',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'quantity',
            type: 'integer',
            isNullable: false,
          },
          {
            name: 'comments',
            type: 'varchar',
            length: '255',
            isNullable: true,
          },
          {
            name: 'orderId',
            type: 'integer',
            isNullable: false,
          },
          {
            name: 'pizzaId',
            type: 'integer',
            isNullable: false,
          },
        ],
      }),
    );

    // Criação de Foreign Keys
    await queryRunner.createForeignKey(
      'order_pizza',
      new TableForeignKey({
        columnNames: ['orderId'],
        referencedColumnNames: ['id'],
        referencedTableName: 'order',
        onDelete: 'CASCADE',
      }),
    );
    await queryRunner.createForeignKey(
      'order_pizza',
      new TableForeignKey({
        columnNames: ['pizzaId'],
        referencedColumnNames: ['id'],
        referencedTableName: 'pizza',
        onDelete: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // Remoção das Foreign Keys
    const table = await queryRunner.getTable('order_pizza');
    const foreignKeyOrder = table.foreignKeys.find(
      (fk) => fk.columnNames.indexOf('orderId') !== -1,
    );
    const foreignKeyPizza = table.foreignKeys.find(
      (fk) => fk.columnNames.indexOf('pizzaId') !== -1,
    );
    if (foreignKeyOrder) {
      await queryRunner.dropForeignKey('order_pizza', foreignKeyOrder);
    }
    if (foreignKeyPizza) {
      await queryRunner.dropForeignKey('order_pizza', foreignKeyPizza);
    }

    await queryRunner.dropTable('order_pizza');
  }
}
