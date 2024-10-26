import { User } from '@/src/domain/user/entities/User';

export const UserAdapter = {
  toDomain: (rawUser: any) => new User(
    rawUser.id,
    rawUser.name,
  ),
};
