import { Router } from 'express';
import { RealeasesResolver } from './releases/realeases.resolver';
import { UsersResolver } from './users/users.resolver';

export const route = Router();

route.post('/Users', new UsersResolver().create);
route.get('/Users', new UsersResolver().findMany);
route.get('/User', new UsersResolver().findUnique);
route.post('/Realeases', new RealeasesResolver().create);
route.post('/findManyRealeases', new RealeasesResolver().findMany);
route.post('/findUniqueRealeases', new RealeasesResolver().findUnique);
route.put('/updateRealeases/:id', new RealeasesResolver().update);
