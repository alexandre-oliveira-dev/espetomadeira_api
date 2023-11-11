import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';
import { route } from './routes';
import cors from 'cors'

function app() {
  const app = express();

  app.use((req: Request, res: Response, next: NextFunction) => {
    express.json()(req, res, next);
  });
  app.use(cors({origin:'*'}))
  app.use(route);
  /*   app.listen(3333, ()=> console.log('api online'));*/
  app.listen(process.env.PORT, ()=> console.log('api online'));
 }
app();



