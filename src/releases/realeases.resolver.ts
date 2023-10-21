import { Request, Response } from 'express';
import { RealeasesService } from './releases.service';

const service = new RealeasesService();
export class RealeasesResolver {
  async findMany(_req:Request,res:Response) {
    const response = await service.findAll()
    return res.json(response).status(200)
  }
}
