import { prismaClient } from "../prisma/prismaClient";

export class RealeasesService {
  async findAll() {
    return await prismaClient.realeases.findMany();
  }
}
