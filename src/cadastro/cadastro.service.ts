import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from './entities/user.entity';
import { DeepPartial, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDTO } from './dto/create-user.dto';
import { UpdateUserDTO } from './dto/update-user.dto';
import { Adress } from './entities/adress.entity';
import { Telephone } from './entities/telephone.entity';

@Injectable()
export class CadastroService {
  constructor(
    @InjectRepository(User)
    private readonly registerRepository: Repository<User>,

    @InjectRepository(Adress)
    private readonly adressRepository: Repository<Adress>,

    @InjectRepository(Telephone)
    private readonly phoneRepository: Repository<Telephone>,
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

  async create(createUser: CreateUserDTO) {
    const adress = await Promise.all(
      createUser.adress.map((id) => this.preloadAdressById(id)),
    );

    const user = this.registerRepository.create({
      ...createUser,
      adress,
    });
    return this.registerRepository.save(user);
  }

  async update(cpf: string, updateUser: UpdateUserDTO) {
    const user = await this.registerRepository.preload({
      ...updateUser,
      cpf,
    });
    if (!user) {
      throw new NotFoundException(`User whit cpf ${cpf} not found!`);
    }
    return this.registerRepository.save(user);
  }

  async delete(cpf: string) {
    const user = await this.registerRepository.findOne({
      where: { cpf },
    });
    if (!user) {
      throw new NotFoundException(`User not found!`);
    }
    return this.registerRepository.remove(user);
  }

  private async preloadAdressById(id: number): Promise<Adress> {
    let adress = await this.adressRepository.findOne({ where: { id } });
    if (!adress) {
      adress = this.adressRepository.create({ id });
    }
    return adress;
  }
}
