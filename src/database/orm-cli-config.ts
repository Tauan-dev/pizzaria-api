import { DataSource } from 'typeorm';
import { dataSourceOptions } from './database.module';
import { CreateTableUser1712170607001 } from 'src/migrations/1712170607001-CreateTableUser';
import { CreateAdressTable1712349428965 } from 'src/migrations/1712349428965-CreateAdressTable';
import { CreateUsersAdressesTable1713389429391 } from 'src/migrations/1713389429391-CreateUsersAdressesTable';
import { AddUserIdToUserAdressTable1713390331233 } from 'src/migrations/1713390331233-AddUserIdToUserAdressTable';
import { AddAdressIdToUsersAdressTable1713391758436 } from 'src/migrations/1713391758436-AddAdressIdToUsersAdressTable';
import { CreateIngredientTable1713393235062 } from 'src/migrations/1713393235062-CreateIngredientTable';
import { CreateOrderTable1713393429178 } from 'src/migrations/1713393429178-CreateOrderTable';
import { CreatePizzaOrderTable1713450478799 } from 'src/migrations/1713450478799-CreatePizzaOrderTable';
import { CreatePizzaTable1713451576906 } from 'src/migrations/1713451576906-CreatePizzaTable';
import { CreatePizzaIngredientTable1713452059324 } from 'src/migrations/1713452059324-CreatePizzaIngredientTable';

export const dataSource = new DataSource({
  ...dataSourceOptions,
  synchronize: false,
  migrations: [
    CreateTableUser1712170607001,
    CreateAdressTable1712349428965,
    CreateUsersAdressesTable1713389429391,
    AddUserIdToUserAdressTable1713390331233,
    AddAdressIdToUsersAdressTable1713391758436,
    CreateIngredientTable1713393235062,
    CreateOrderTable1713393429178,
    CreatePizzaTable1713451576906,
    CreatePizzaOrderTable1713450478799,
    CreatePizzaIngredientTable1713452059324,
  ],
});
