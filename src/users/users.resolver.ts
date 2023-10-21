import { Request, Response } from "express";
import { UsersService } from "./users.service";
import { Prisma } from "@prisma/client";

const service = new UsersService()

export class UsersResolver{

    async create(req:Request, res: Response,) {
        
        const {data}:Prisma.UsersCreateArgs = req.body
        console.log("🚀 ~ file: users.resolver.ts:12 ~ UsersResolver ~ create ~ data:", data)

        try {
            await service.create({
                data
            })
        return res.statusMessage = 'Usuario criado com sucesso'
        } catch {
            return res.status(500)
      }
    }
}