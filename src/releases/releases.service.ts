import { Injectable } from '@nestjs/common';
import { prismaClient } from 'src/prisma/prismaClient';

@Injectable()
export class RealeasesService {
  async findAll() {
    return await prismaClient.users.findMany();
  }
}
