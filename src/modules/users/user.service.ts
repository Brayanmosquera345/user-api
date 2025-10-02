import { UserRepository } from "./user.repository.js";
import type { CreateUserDto } from "./dtos/create-user.dto.js";
import { Prisma } from "@prisma/client";
import { ApiError } from "@/utils/errors/api-error.js";
import { handlePrismaError } from "@/utils/errors/prisma-error.helper.js";

export class UserService {
    private readonly userRepository: UserRepository;

    constructor() {
        this.userRepository = new UserRepository();
    }

    async create(user: CreateUserDto) {
        try {
            return await this.userRepository.create(user);
        } catch (error) {
            handlePrismaError(error);
        }
    }

    async findAll() {
        return await this.userRepository.findAll();
    }

    async findById(id: string) {
        try {
            return await this.userRepository.findById(id);
        } catch (error) {
            handlePrismaError(error, "User");
        }
    }

    async update(id: string, user: CreateUserDto) {
        try {
            return await this.userRepository.update(id, user);
        } catch (error) {
            handlePrismaError(error);
        }
    }

    async delete(id: string) {
        try {
            return await this.userRepository.delete(id);
        } catch (error) {
            handlePrismaError(error, "User");

        }
    }
}