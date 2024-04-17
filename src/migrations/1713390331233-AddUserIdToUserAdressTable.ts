import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from 'typeorm';

export class AddUserIdToUserAdressTable1713390331233
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    // Adiciona a coluna na tabela correta
    await queryRunner.addColumn(
      'users_adresses',
      new TableColumn({
        name: 'usersCpf',
        type: 'varchar',
        isNullable: true,
      }),
    );

    // Cria a ForeignKey na tabela correta
    await queryRunner.createForeignKey(
      'users_adresses',
      new TableForeignKey({
        name: 'FK_users_cpf',
        columnNames: ['usersCpf'],
        referencedTableName: 'users',
        referencedColumnNames: ['cpf'],
        onDelete: 'SET NULL',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // Remove a ForeignKey corretamente
    await queryRunner.dropForeignKey('users_adresses', 'FK_users_cpf');

    // Remove a coluna corretamente
    await queryRunner.dropColumn('users_adresses', 'usersCpf');
  }
}
