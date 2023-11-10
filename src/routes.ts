import { Router } from 'express';
import { RealeasesResolver } from './releases/realeases.resolver';
import { UsersResolver } from './users/users.resolver';

export const route = Router();

route.post('/Users', new UsersResolver().create);
route.get('/Users', new UsersResolver().findMany);
route.get('/User', new UsersResolver().findUnique);
route.post('/Realeases', new RealeasesResolver().create);
route.get('/Realeases', new RealeasesResolver().findMany);
route.get('/Realease', new RealeasesResolver().findUnique);
