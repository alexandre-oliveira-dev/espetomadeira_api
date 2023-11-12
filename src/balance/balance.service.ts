import { Prisma } from '@prisma/client';
import { prismaClient } from '../prisma/prismaClient';

const prisma = prismaClient;
export class BalanceService {
  async create({ data }: Prisma.BankBalanceCreateArgs) {
    return await prisma.bankBalance.create({ data });
  }

  async findMany({ where }: Prisma.BankBalanceFindManyArgs) {
    return await prisma.bankBalance.findMany({
      where,
      orderBy: {
        updated_at: 'desc',
      },
    });
  }
  async findUnique({ where }: Prisma.BankBalanceFindUniqueArgs) {
    return await prisma.bankBalance.findUnique({
      where,
    });
  }
  async update({ data }: Prisma.BankBalanceUpdateArgs, id: string) {
    return await prisma.bankBalance.update({
      where: {
        id,
      },
      data,
    });
  }
}
