import { Response } from 'express';
import { RealeasesService } from './releases.service';
import { Controller, Get, Res } from '@nestjs/common';

const service = new RealeasesService();
@Controller()
export class RealeasesResolver {
  @Get('/Users')
  async findMany(@Res() res: Response) {
    const response = await service.findAll();
    return res.json(response);
  }
}
