import { Prisma } from '@prisma/client';
import { prismaClient } from '../prisma/prismaClient';

export class RealeasesService {
  async findAll({ where }: Prisma.RealeasesFindManyArgs) {
    return await prismaClient.realeases.findMany({
      where,
      orderBy: { id: 'asc' },
    });
  }

  async findUnique({ where }: Prisma.RealeasesFindUniqueArgs) {
    return await prismaClient.realeases.findUnique({
      where,
    });
  }

  async create({ data }: Prisma.RealeasesCreateArgs) {
    return await prismaClient.realeases.create({ data });
  }
  async update(id: string) {
    return await prismaClient.realeases.update({
      where: {
        id,
      },
      data: {
        status: { set: 'pago' },
      },
    });
  }
}
