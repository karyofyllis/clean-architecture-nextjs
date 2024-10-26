import { Post } from '@/domain/post/entities/Post';
import { PostRepository } from '@/domain/post/repositories/PostRepository';
import { User } from '@/domain/user/entities/User';

export class GetAllPostsWithAuthors {
  private postRepository: PostRepository;
  private users: User[];

  constructor(postRepository: PostRepository, users: User[]) {
    this.postRepository = postRepository;
    this.users = users;
  }

  async execute(query?: string): Promise<Post[]> {
    // Fetch raw posts and users in parallel
    const posts = await this.postRepository.getAllPosts();

    // Optionally filter posts based on the search query
    const filteredPosts = query
      ? posts.filter((post) => post.title.toLowerCase().includes(query.toLowerCase()))
      : posts;

    // Join the users with the posts inside the Use Case
    return filteredPosts.map((post) => {
      const author = this.users.find((user) => user.id === post.userId) || null; // Find author
      return { ...post, author }; // Join author with post
    });
  }
}
