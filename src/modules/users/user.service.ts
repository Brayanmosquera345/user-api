import { UserRepository } from "./user.repository.js";
import type { CreateUserDto } from "./dtos/create-user.dto.js";

export class UserService {
    private readonly userRepository: UserRepository;

    constructor() {
        this.userRepository = new UserRepository();
    }

    async create(user: CreateUserDto) {
        return await this.userRepository.create(user);
    }

    async findAll() {
        return await this.userRepository.findAll();
    }

    async findById(id: string) {
        return await this.userRepository.findById(id);
    }

    async update(id: string, user: CreateUserDto) {
        return await this.userRepository.update(id, user);
    }

    async delete(id: string) {
        return await this.userRepository.delete(id);
    }
}