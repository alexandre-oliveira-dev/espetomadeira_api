import { Prisma } from '@prisma/client';
import { Request, Response } from 'express';
import { WalletService } from './wallet.service';

const service = new WalletService();
export class WalletResolver {
  async create(req: Request, res: Response) {
    const { data }: Prisma.WalletCreateArgs = req.body;
    console.log(
      '🚀 ~ file: wallet.resolver.ts:9 ~ WalletResolver ~ create ~ data:',
      data,
    );
    try {
      const response = await service.create({ data });
      return res.json(response);
    } catch (err) {
      res.json(err).status(500);
    }
  }
  async update(req: Request, res: Response) {
    const { data } = req.body;
    const { id } = req.params;
    try {
      const response = await service.update(data, id);
      return res.json(response);
    } catch (err) {
      res.json(err).status(500);
    }
  }

  async findMany(req: Request, res: Response) {
    const { data } = req.body;
    console.log(
      '🚀 ~ file: wallet.resolver.ts:33 ~ WalletResolver ~ findMany ~ data:',
      data,
    );
    const response = await service.findMany({ where: data });
    return res.json(response);
  }
}
