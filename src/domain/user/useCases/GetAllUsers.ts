import { User } from '@/src/domain/user/entities/User';
import { UserRepository } from '@/src/domain/user/repositories/UserRepository';

export class GetAllUsers {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(): Promise<User[]> {
    return this.userRepository.getAllUsers();
  }
}
