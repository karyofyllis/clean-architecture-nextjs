import { Card, Title, Text, Stack, Flex } from '@mantine/core';
import Image from 'next/image';
import { Post } from '@/domain/post/entities/Post';
import { capitalize } from '@/ui/utilities/text.utils';

const PostCard = ({ post }: { post: Post }) => (
  <Card shadow="sm" padding="lg" radius="md" withBorder>
    <Stack gap="lg">
      <Flex align="center" gap={16}>
        {/* Author avatar image */}
        <div style={{ width: 60, height: 60, overflow: 'hidden', borderRadius: '50%' }}>
          <Image
            src="https://i.pravatar.cc/300"
            alt={post.author?.name ?? ''}
            width={60}
            height={60}
            style={{ objectFit: 'cover' }}
          />
        </div>
        <Stack gap={0}>
          <Text fw="bold">{post.author?.name}</Text>
          <Text c="gray">{new Date().toDateString()}</Text>
        </Stack>
      </Flex>
      {/* Author name */}

      {/* Post image with cover style */}
      <div style={{ height: 300, position: 'relative' }}>
        <Image
          src="https://picsum.photos/200/300"
          alt={post.title}
          fill
          style={{ objectFit: 'cover', borderRadius: 8 }}
        />
      </div>

      {/* Post title */}
      <Title>{capitalize(post.title)}</Title>

      {/* Post body text */}
      <Text>{post.body}</Text>
    </Stack>
  </Card>

);

export default PostCard;
