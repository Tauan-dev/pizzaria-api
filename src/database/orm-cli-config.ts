import { DataSource } from 'typeorm';
import { dataSourceOptions } from './database.module';
import { CreateTableUser1712170607001 } from 'src/migrations/1712170607001-CreateTableUser';
import { CreateAdressTable1712349428965 } from 'src/migrations/1712349428965-CreateAdressTable';

export const dataSource = new DataSource({
  ...dataSourceOptions,
  synchronize: false,
  migrations: [CreateTableUser1712170607001, CreateAdressTable1712349428965],
});
