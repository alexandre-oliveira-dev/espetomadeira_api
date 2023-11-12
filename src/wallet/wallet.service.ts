import { Prisma } from '@prisma/client';
import { prismaClient } from '../prisma/prismaClient';

const prisma = prismaClient;
export class WalletService {
  async create({ data }: Prisma.WalletCreateArgs) {
    return await prisma.wallet.create({ data });
  }

  async findAll({ where }: Prisma.WalletFindManyArgs) {
    return await prisma.wallet.findMany({
      where,
      orderBy: {
        updated_at: 'desc',
      },
    });
  }
  async findUnique({ where }: Prisma.WalletFindUniqueArgs) {
    return await prisma.wallet.findUnique({
      where,
    });
  }
  async update({ data }: Prisma.WalletUpdateArgs, id: string) {
    return await prisma.wallet.update({
      where: {
        id,
      },
      data,
    });
  }
}
