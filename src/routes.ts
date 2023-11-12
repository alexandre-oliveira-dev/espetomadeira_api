import { Router } from 'express';
import { RealeasesResolver } from './releases/realeases.resolver';
import { UsersResolver } from './users/users.resolver';
import { BalanceResolver } from './balance/balance.resolver';
import { WalletResolver } from './wallet/wallet.resolver';

export const route = Router();

route.post('/Users', new UsersResolver().create);
route.get('/Users', new UsersResolver().findMany);
route.get('/User', new UsersResolver().findUnique);
route.post('/Realeases', new RealeasesResolver().create);
route.post('/findManyRealeases', new RealeasesResolver().findMany);
route.post('/findUniqueRealeases', new RealeasesResolver().findUnique);
route.put('/updateRealeases/:id', new RealeasesResolver().update);
route.post('/bankBalance', new BalanceResolver().create);
route.post('/findManyBankbalance', new BalanceResolver().findMany);
route.put('/updateBankbalance/:id', new BalanceResolver().update);
route.post('/balance', new WalletResolver().create);
route.post('/findManybalance', new WalletResolver().findMany);
route.put('/updatebalance/:id', new WalletResolver().update);
