import { Injectable, NotFoundException } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class UsersService {
  constructor(private database: DatabaseService) {}
  async getAllUsers(role?: 'INTERN' | 'ENGINEER' | 'ADMIN') {
    if (role) {
      return this.database.user.findMany({ where: { role: role } });
    }
    return this.database.user.findMany({});
  }

  async getUserById(id: number) {
    const user = await this.database.user.findUnique({ where: { id } });
    if (!user) {
      throw new NotFoundException('User Not Found');
    }
    return user;
  }

  async createUser(createUserDto: Prisma.UserCreateInput) {
    return this.database.user.create({ data: createUserDto });
  }

  async updateUser(id: number, updateUserDto: Prisma.UserUpdateInput) {
    return this.database.user.update({ where: { id }, data: updateUserDto });
  }

  async deleteUser(id: number) {
    await this.getUserById(id);
    return this.database.user.delete({ where: { id } });
  }
}
