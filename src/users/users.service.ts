import { Prisma } from "@prisma/client"
import { prismaClient } from "../prisma/prismaClient"


export class UsersService{
    async findMany(args:Prisma.UsersFindManyArgs) {
        return await prismaClient.users.findMany(args)
    }

    async create(args:Prisma.UsersCreateArgs) {
        return await prismaClient.users.create(args)
    }
}