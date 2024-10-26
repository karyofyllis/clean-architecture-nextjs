import { Post } from '@/src/domain/post/entities/Post';
import { PostRepository } from '@/src/domain/post/repositories/PostRepository';
import { ApiClient } from '@/src/infrastructure/shared/ApiClient';
import { PostAdapter } from '@/src/interfaces/adapters/PostAdapter';

export class PostRepositoryAPI implements PostRepository {
  private api = ApiClient.shared;

  async getAllPosts(): Promise<Post[]> {
    const response = await this.api.get<any[]>('/posts');
    return response.map((rawPost: any) => PostAdapter.toDomain(rawPost));
  }

  async getPostById(id: number): Promise<Post> {
    const response = await this.api.get(`/posts/${id}`);
    return PostAdapter.toDomain(response);
  }
}
