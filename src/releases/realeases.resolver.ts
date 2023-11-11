import { Request, Response } from 'express';
import { RealeasesService } from './releases.service';
import { Prisma } from '@prisma/client';

const service = new RealeasesService();
export class RealeasesResolver {

  async findMany(req:Request,res:Response) {
    try {
      const { data } = req.body
      console.log("🚀 ~ file: realeases.resolver.ts:11 ~ RealeasesResolver ~ findMany ~ data:", data)
    
      const response = await service.findAll({
        where:data
      })
    return res.json(response).status(200)
    } catch(err) {
      console.log('error findMany line 17',err)
    }
  } 
  async findUnique( _req: Request, res: Response) {
    const {data} = _req.body
    const response = await service.findAll({where:data})
    return res.json(response).status(200)
  }

  async create(req: Request, res: Response) {
    const { data }: Prisma.RealeasesCreateArgs = req.body
    const response = await service.create({data})
    return res.json(response)
  }
  async update(req: Request, res: Response) {
    try {
    const { data } = req.body
    const {id} = req.params
    console.log("🚀 ~ file: realeases.resolver.ts:35 ~ RealeasesResolver ~ update ~ id:", id)
    const response = await service.update(data,id)
    return res.json(response)
    } catch (err) {
      console.log(err)
    }
  }
}
