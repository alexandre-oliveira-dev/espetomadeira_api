import { prismaClient } from 'src/prisma/prismaClient';

export class RealeasesService {
  async findAll() {
    return await prismaClient.users.findMany();
  }
}
