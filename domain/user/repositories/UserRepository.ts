import { User } from '../entities/User';

export interface UserRepository {
  getAllUsers: () => Promise<User[]>; // A method to fetch all users
}
