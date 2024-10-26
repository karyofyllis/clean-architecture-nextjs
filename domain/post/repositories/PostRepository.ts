import { Post } from '@/domain/post/entities/Post';

export interface PostRepository {
  getAllPosts: () => Promise<Post[]>;

  getPostById: (id: number) => Promise<Post>;
}
