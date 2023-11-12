import { Prisma } from '@prisma/client';
import { Request, Response } from 'express';
import { WalletService } from './wallet.service';

const service = new WalletService();
export class WalletResolver {
  async create(req: Request, res: Response) {
    try {
      const { data }: Prisma.WalletCreateArgs = req.body;
      const response = await service.create({ data });
      return res.json(response);
    } catch (err) {
      res.json(err).status(500);
    }
  }
  async update(req: Request, res: Response) {
    try {
      const { data } = req.body;
      const { id } = req.params;
      const response = await service.update(data, id);
      return res.json(response);
    } catch (err) {
      res.json(err).status(500);
    }
  }
  async findMany(req: Request, res: Response) {
    try {
      const { data } = req.body;

      // Certifique-se de que 'service' e 'findMany' estão definidos
      if (service && typeof service.findAll === 'function') {
        const response = await service.findAll({ where: data });
        return res.json(response);
      } else {
        // Trate o caso em que 'service' ou 'findMany' são indefinidos
        return res
          .status(500)
          .json({ error: 'Service or findMany method is undefined' });
      }
    } catch (err) {
      console.error('errorrr', err);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  /*   async findMany(req: Request, res: Response) {
    try {
      const { data } = req.body;
      const response = await service.findAll({ where: data });
      return res.json(response);
    } catch (err) {
      return console.log('errorrr', err);
    }
  } */
}
