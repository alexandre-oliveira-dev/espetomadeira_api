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
      const response = await service.findMany({ where: data });
      return res.json(response);
    } catch (err) {
      return console.log('errorrr', err);
    }
  }
}
