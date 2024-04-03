import { DataSource } from 'typeorm';
import { dataSourceOptions } from './database.module';
import { CreateTableUser1712170607001 } from 'src/migrations/1712170607001-CreateTableUser';

export const dataSource = new DataSource({
  ...dataSourceOptions,
  synchronize: false,
  migrations: [CreateTableUser1712170607001],
});
