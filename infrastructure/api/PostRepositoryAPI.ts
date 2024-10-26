import { Post } from '@/domain/post/entities/Post';
import { PostRepository } from '@/domain/post/repositories/PostRepository';
import { ApiClient } from '@/infrastructure/shared/ApiClient';
import { PostAdapter } from '@/interfaces/adapters/PostAdapter';

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
