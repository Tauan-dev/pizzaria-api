import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDTO } from './dto/create-user.dto';
import { UpdateUserDTO } from './dto/update-user.dto';

@Injectable()
export class CadastroService {
  remove(cpf: any) {
      throw new Error('Method not implemented.');
  }
  update(UpdateUser: UpdateUserDTO, cpf: string) {
      throw new Error('Method not implemented.');
  }
  create(CreateUser: CreateUserDTO) {
      throw new Error('Method not implemented.');
  }
  constructor(
    @InjectRepository(User)
    private readonly registerRepository: Repository<User>,
  ) {}

  async findAllUser() {
    return await this.registerRepository.find();
  }

  async findOne(cpf: string) {
    const user = await this.registerRepository.findOne({
      where: { cpf },
    });
    if (!user) {
      throw new NotFoundException(`User whit cpf ${cpf} not found`);
    }
    return user;
  }

  async createUser(creatUser: CreateUserDTO) {
    const user = this.registerRepository.create(creatUser);
    return this.registerRepository.save(user);
  }

  async updateUser(cpf: string, updateUser: UpdateUserDTO) {
    const user = await this.registerRepository.preload({
      ...updateUser,
      cpf,
    });
    if (!user) {
      throw new NotFoundException(`User whit cpf ${cpf} not found!`);
    }
    return this.registerRepository.save(user);
  }

  async deleteUser(cpf: string) {
    const user = await this.registerRepository.findOne({
      where: { cpf },
    });
    if (!user) {
      throw new NotFoundException(`User not found!`);
    }
    return this.registerRepository.remove(user);
  }
}
