import { UserRepository } from '@/domain/user/repositories/UserRepository';
import { PostRepository } from '@/domain/post/repositories/PostRepository';
import { Post } from '@/domain/post/entities/Post';

export class GetPostByIDWithAuthor {
  private postRepository: PostRepository;
  private userRepository: UserRepository;

  constructor(postRepository: PostRepository, userRepository: UserRepository) {
    this.postRepository = postRepository;
    this.userRepository = userRepository;
  }

  async execute(postId: number): Promise<Post> {
    // Fetch post and users
    const [post, users] = await Promise.all([
      this.postRepository.getPostById(postId),
      this.userRepository.getAllUsers(),
    ]);

    // Adapt the post and join the author
    const author = users.find(user => user.id === post.userId) || null;

    return {
      ...post,
      author,
    };
  }
}
