'use client';

import { useSearchParams } from 'next/navigation';
import { TextInput } from '@mantine/core';
import { useSearchWithDebounce } from "@/ui/hooks/useSearchWithDebounce";

export default function PostSearch() {
  const searchParams = useSearchParams();
  const searchParam = searchParams.get('q') ?? '';

  const [searchTerm, handleChange] = useSearchWithDebounce(searchParam)

  return (
    <TextInput
      size="md"
      radius="md"
      type="text"
      value={searchTerm ?? ''}
      onChange={handleChange}
      placeholder="Search posts..."
    />
  );
}
