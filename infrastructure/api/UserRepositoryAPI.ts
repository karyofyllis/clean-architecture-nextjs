import { UserRepository } from '@/domain/user/repositories/UserRepository';
import { User } from '@/domain/user/entities/User';
import { ApiClient } from '@/infrastructure/shared/ApiClient';
import { UserAdapter } from '@/interfaces/adapters/UserAdapter';

export class UserRepositoryAPI implements UserRepository {
  private api = ApiClient.shared;

  async getAllUsers(): Promise<User[]> {
    const response = await this.api.get<any[]>('/users');
    return response.map((rawUser: any) => UserAdapter.toDomain(rawUser));
  }
}
