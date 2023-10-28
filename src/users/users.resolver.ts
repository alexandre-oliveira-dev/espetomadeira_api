import { Request, Response } from "express";
import { UsersService } from "./users.service";
import { Prisma } from "@prisma/client";

const service = new UsersService()

export class UsersResolver{

    async create(req: Request, res: Response,) {
        const {data}:Prisma.UsersCreateArgs = req.body
        const user = await service.create({
            data
        })
        return res.json(user).status(200)
    }
    async findMany(req: Request, res: Response,) {
        const {...args}: Prisma.UsersFindManyArgs = req.body
        const users = await service.findMany(args)
        return res.json(users).status(200)
    }
    async findUnique(req: Request, res: Response,) {
        const {id}: Prisma.UsersCreateInput = req.query
        const users = await service.findUnique({id})
        return res.json(users).status(200)
    }
}