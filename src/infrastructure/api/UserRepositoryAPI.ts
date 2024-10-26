import { UserRepository } from '@/src/domain/user/repositories/UserRepository';
import { User } from '@/src/domain/user/entities/User';
import { ApiClient } from '@/src/infrastructure/shared/ApiClient';
import { UserAdapter } from '@/src/interfaces/adapters/UserAdapter';

export class UserRepositoryAPI implements UserRepository {
  private api = ApiClient.shared;

  async getAllUsers(): Promise<User[]> {
    const response = await this.api.get<any[]>('/users');
    return response.map((rawUser: any) => UserAdapter.toDomain(rawUser));
  }
}
