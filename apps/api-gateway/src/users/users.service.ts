import { Injectable } from '@nestjs/common';
import { Role, User } from '../models/user.model';

@Injectable()
export class UsersService {
  private readonly users: User[] = [
    {
      userId: 1,
      username: 'john',
      password: 'changeme',
      startedDate: new Date(),
      birthDate: new Date(),
      roles: [Role.standardUser],
    },
  ];

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find(user => user.username === username);
  }
}
