import { DataSource } from 'typeorm';
import { dataSourceOptions } from './database.module';
import { CreateTableUser1712170607001 } from 'src/migrations/1712170607001-CreateTableUser';
import { CreateAdressTable1712349428965 } from 'src/migrations/1712349428965-CreateAdressTable';
import { CreateUsersAdressesTable1713389429391 } from 'src/migrations/1713389429391-CreateUsersAdressesTable';
import { AddUserIdToUserAdressTable1713390331233 } from 'src/migrations/1713390331233-AddUserIdToUserAdressTable';
import { AddAdressIdToUsersAdressTable1713391758436 } from 'src/migrations/1713391758436-AddAdressIdToUsersAdressTable';

export const dataSource = new DataSource({
  ...dataSourceOptions,
  synchronize: false,
  migrations: [
    CreateTableUser1712170607001,
    CreateAdressTable1712349428965,
    CreateUsersAdressesTable1713389429391,
    AddUserIdToUserAdressTable1713390331233,
    AddAdressIdToUsersAdressTable1713391758436,
  ],
});
