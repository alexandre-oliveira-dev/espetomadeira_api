import { Prisma } from '@prisma/client';
import { Request, Response } from 'express';
import { BalanceService } from './balance.service';

const service = new BalanceService();
export class BalanceResolver {
  async create(req: Request, res: Response) {
    const { data }: Prisma.BankBalanceCreateArgs = req.body;
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
    const response = await service.findMany({ where: data || {} });
    return res.json(response);
  }
}
