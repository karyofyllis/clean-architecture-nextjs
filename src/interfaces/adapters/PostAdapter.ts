import { Post } from '@/src/domain/post/entities/Post';

export const PostAdapter = {
  toDomain: (rawPost: any) => new Post(
    rawPost.id,
    rawPost.title,
    rawPost.body,
    rawPost.userId,
    null
  ),
};
