import { Prisma } from "@prisma/client"
import { prismaClient } from "../prisma/prismaClient"

export class UsersService{
    async findMany(args:Prisma.UsersFindManyArgs) {
        return await prismaClient.users.findMany({
            where: {
              ...args.where  
            },
            select: {
                id: true,
                usuario:true
            }
        })
    }
    async findUnique({id}:Prisma.UsersCreateInput) {
        return await prismaClient.users.findUniqueOrThrow({
            where: {
              id
            },
            select: {
                id: true,
                usuario:true
            }
        })
    }

    async create(args: Prisma.UsersCreateArgs) {
        return await prismaClient.users.create(args)
    }
}