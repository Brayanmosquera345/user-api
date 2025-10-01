import prisma from "@/prisma/client.js";
import type { CreateUserDto } from "./dtos/create-user.dto.js";

export class UserRepository {
    async create(user: CreateUserDto) {
        return await prisma.users.create({ data: user });
    }

    async findAll() {
        return await prisma.users.findMany();
    }

    async findById(id: string) {
        return await prisma.users.findUnique({
            where: {
                id,
            },
        });
    }

    async update(id: string, user: CreateUserDto) {
        return await prisma.users.update({
            where: {
                id,
            },
            data: user,
        });
    }

    async delete(id: string) {
        return await prisma.users.delete({
            where: {
                id,
            },
        });
    }
}
