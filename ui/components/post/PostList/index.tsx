import { Card, Stack, Text, Title } from '@mantine/core';
import Link from 'next/link';
import { Post } from '@/domain/post/entities/Post';
import { capitalize } from '@/ui/utilities/text.utils';

const PostList = ({ posts }: { posts: Post[] }) => (
  <Stack gap="md">
    {posts.map((post) => (
      <Link prefetch key={post.id} href={`/posts/${post.id}`} passHref style={{ textDecoration: 'none' }}>
        <Card shadow="sm" padding="lg" radius="md" withBorder>
          <Title order={3}>{capitalize(post.title)}</Title>
          <Text>{post.body.slice(0, 100)}...</Text>
          <Text variant="caption" c="gray" mt={8}>{post.author?.name}</Text>
        </Card>
      </Link>
    ))}
  </Stack>
);

export default PostList;
