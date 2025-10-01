// src/modules/users/user.controller.ts
import type { Request, Response, NextFunction } from "express";
import { UserService } from "./user.service.js";
import type { CreateUserDto } from "./dtos/create-user.dto.js";
import { ApiError } from "@/utils/errors/api-error.js";

export class UserController {
    private readonly userService: UserService;

    constructor() {
        this.userService = new UserService();
    }

    create = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const user: CreateUserDto = req.body;
            const newUser = await this.userService.create(user);
            res.status(201).json(newUser);
        } catch (error) {
            next(error);
        }
    };

    findAll = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const users = await this.userService.findAll();
            res.json(users);
        } catch (error) {
            next(error);
        }
    };

    findById = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { id } = req.params;
            if (!id) throw new ApiError(400, "error", "User id is required");
            const user = await this.userService.findById(id);
            if (!user) {
                throw new ApiError(404, "error", "User not found");
            }
            res.json(user);
        } catch (error) {
            next(error);
        }
    };

    update = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { id } = req.params;
            const data: CreateUserDto = req.body;
            if (!id) throw new ApiError(400, "error", "User id is required");
            const updated = await this.userService.update(id, data);
            res.json(updated);
        } catch (error) {
            next(error);
        }
    };

    delete = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { id } = req.params;
            if (!id) throw new ApiError(400, "error", "User id is required");
            await this.userService.delete(id);
            res.status(204).send();
        } catch (error) {
            next(error);
        }
    };
}
