import { Request, Response } from 'express';
import { RealeasesService } from './releases.service';
import { Prisma } from '@prisma/client';

const service = new RealeasesService();
export class RealeasesResolver {
  async findMany(args:Prisma.RealeasesFindManyArgs,_req:Request,res:Response) {
    const response = await service.findAll(args)
    return res.json(response).status(200)
  }
  async findUnique( _req: Request, res: Response) {
    const {where}:Prisma.RealeasesFindUniqueArgs = _req.body
    const response = await service.findAll({where})
    return res.json(response).status(200)
  }

  async create(req: Request, res: Response) {
    const { data }: Prisma.RealeasesCreateArgs = req.body
    return await service.create({data})
  }
}
