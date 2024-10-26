import { Card, Title } from '@mantine/core';
import React from 'react';
import Link from 'next/link';

const Navigation = () => (
  <Card
    style={{
      position: 'sticky',
      top: 24,
      backgroundColor: 'white',
      zIndex: 999,
    }}
    shadow="sm"
    padding="lg"
    radius="md"
    withBorder>
    <Link href="/" style={{ textDecoration: 'none' }}>
      <Title c="black">Blog</Title>
    </Link>
  </Card>
);

export default Navigation;
