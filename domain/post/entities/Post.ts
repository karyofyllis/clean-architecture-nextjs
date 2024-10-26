import { User } from '@/domain/user/entities/User';

export class Post {
  constructor(
    public id: number,
    public title: string,
    public body: string,
    public userId: number,
    public author: User | null
  ) {}
}
