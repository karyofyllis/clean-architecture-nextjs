import { Stack } from '@mantine/core';
import { PostRepositoryAPI } from '@/src/infrastructure/api/PostRepositoryAPI';
import { GetAllPostsWithAuthors } from '@/src/domain/post/useCases/GetAllPostsWithAuthors';
import PostList from '@/src/ui/components/post/PostList';
import { UserRepositoryAPI } from '@/src/infrastructure/api/UserRepositoryAPI';
import PostSearch from '@/src/ui/components/post/PostSearch';
import { GetAllUsers } from '@/src/domain/user/useCases/GetAllUsers';

export default async function HomePage({ searchParams }: { searchParams: any }) {
  const query = searchParams?.q;

  const postRepository = new PostRepositoryAPI();
  const userRepository = new UserRepositoryAPI();

  const getAllUsers = new GetAllUsers(userRepository);
  const users = await getAllUsers.execute(); // Fetch users on the server

  const getAllPosts = new GetAllPostsWithAuthors(postRepository, users);
  const posts = await getAllPosts.execute(query); // Fetch posts on the server

  return (
    <Stack gap={36}>
      <PostSearch />
      <PostList posts={posts} />
    </Stack>
  );
}
