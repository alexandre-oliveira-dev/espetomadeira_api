import { Router } from 'express';
import { RealeasesResolver } from './releases/realeases.resolver';

export const route = Router();

route.get('/Users', new RealeasesResolver().findMany);
