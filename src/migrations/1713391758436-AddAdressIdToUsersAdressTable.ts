import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from 'typeorm';

export class AddAdressIdToUsersAdressTable1713391758436
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    // Adiciona a coluna na tabela correta
    await queryRunner.addColumn(
      'users_adresses',
      new TableColumn({
        name: 'adressId',
        type: 'integer',
        isNullable: true,
      }),
    );

    // Cria a ForeignKey na tabela correta
    await queryRunner.createForeignKey(
      'users_adresses',
      new TableForeignKey({
        name: 'FK_adress_id',
        columnNames: ['adressId'],
        referencedTableName: 'adresses',
        referencedColumnNames: ['id'],
        onDelete: 'SET NULL',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // Remove a ForeignKey corretamente
    await queryRunner.dropForeignKey('users_adresses', 'FK_adress_id');

    // Remove a coluna corretamente
    await queryRunner.dropColumn('users_adresses', 'adressId');
  }
}
