import { Prisma } from "@prisma/client";
import { prismaClient } from "../prisma/prismaClient";

export class RealeasesService {
  async findAll(args: Prisma.RealeasesFindManyArgs) {
    return await prismaClient.realeases.findMany(args);
  }

  async findUnique({where}:Prisma.RealeasesFindUniqueArgs) {
    return await prismaClient.realeases.findUnique({
      where
    })
  }

  async create({data}: Prisma.RealeasesCreateArgs) {
    return await prismaClient.realeases.create({data})
  }
}
