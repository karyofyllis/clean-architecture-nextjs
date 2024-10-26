import PostCard from '@/ui/components/post/PostCard';
import { PostRepositoryAPI } from '@/infrastructure/api/PostRepositoryAPI';
import { UserRepositoryAPI } from '@/infrastructure/api/UserRepositoryAPI';
import { GetPostByIDWithAuthor } from '@/domain/post/useCases/GetPostByIDWithAuthor';
import { notFound } from "next/navigation";

export default async function PostPage({ params }: { params: { slug: string } }) {
  // Create repository instances
  const postRepository = new PostRepositoryAPI();
  const userRepository = new UserRepositoryAPI();
  const postID = parseInt(params.slug, 10);

  if (Number.isNaN(postID)) {
    // Handle the case where the slug is not a valid number
    return notFound(); // Return a 404 page
  }

  // Use the GetPostByIDWithAuthor use case
  const getPostByIDWithAuthor = new GetPostByIDWithAuthor(postRepository, userRepository);

  // Fetch the post with the author details
  const post = await getPostByIDWithAuthor.execute(postID);

  return <PostCard post={post} />;
}
