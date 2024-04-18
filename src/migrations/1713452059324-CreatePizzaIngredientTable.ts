import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class CreatePizzaIngredientTable1713452059324
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'pizza_ingredient',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'necessaryQuantity',
            type: 'int',
            isNullable: false,
          },
          {
            name: 'pizzaId',
            type: 'int',
            isNullable: false,
          },
          {
            name: 'ingredientId',
            type: 'int',
            isNullable: false,
          },
        ],
      }),
    );

    // Criação de Foreign Keys
    await queryRunner.createForeignKey(
      'pizza_ingredient',
      new TableForeignKey({
        columnNames: ['pizzaId'],
        referencedColumnNames: ['id'],
        referencedTableName: 'pizza',
        onDelete: 'CASCADE',
      }),
    );
    await queryRunner.createForeignKey(
      'pizza_ingredient',
      new TableForeignKey({
        columnNames: ['ingredientId'],
        referencedColumnNames: ['id'],
        referencedTableName: 'ingredient',
        onDelete: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const table = await queryRunner.getTable('pizza_ingredient');
    const foreignKeyPizza = table.foreignKeys.find(
      (fk) => fk.columnNames.indexOf('pizzaId') !== -1,
    );
    const foreignKeyIngredient = table.foreignKeys.find(
      (fk) => fk.columnNames.indexOf('ingredientId') !== -1,
    );
    if (foreignKeyPizza) {
      await queryRunner.dropForeignKey('pizza_ingredient', foreignKeyPizza);
    }
    if (foreignKeyIngredient) {
      await queryRunner.dropForeignKey(
        'pizza_ingredient',
        foreignKeyIngredient,
      );
    }

    await queryRunner.dropTable('pizza_ingredient');
  }
}
