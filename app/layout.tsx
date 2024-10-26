import '@mantine/core/styles.css';

import React from 'react';
import { ColorSchemeScript, Container, MantineProvider, Stack } from '@mantine/core';
import { theme } from '../theme';
import Navigation from '@/ui/components/core/Navigation';

export const metadata = {
  title: 'Mantine Next.js template',
  description: 'I am using Mantine with Next.js!',
};

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en">
    <head>
      <ColorSchemeScript />
      <link rel="shortcut icon" href="/favicon.svg" />
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
      />
    </head>
    <body>
    <MantineProvider theme={theme}>
      <Container size="sm">
        <Stack my={64} gap={24}>
          <Navigation />
          {children}
        </Stack>
      </Container>
    </MantineProvider>
    </body>
    </html>
  );
}
