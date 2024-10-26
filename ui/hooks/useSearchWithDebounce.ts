import {debounce} from "@/ui/utilities/debounce";
import {ChangeEvent, useCallback, useEffect, useState} from "react";
import {useRouter} from "next/navigation";

type Output = [string, (event: ChangeEvent<HTMLInputElement>) => void]

export const useSearchWithDebounce = (defaultValue?: string): Output => {
  const [searchTriggered, setSearchTriggered] = useState(false);
  const [searchTerm, setSearchTerm] = useState<string>(defaultValue as string || '');

  const router = useRouter();

  // Handle input change with debounce
  const handleSearchChange = debounce((query: string) => {
    // Update the URL with the query parameter 'q'
    router.push(`/?q=${query}`);
  }, 500); // 500ms delay

  useEffect(() => {
    // Fire the search input change when searchTerm updates
    if (searchTriggered) {
      handleSearchChange(searchTerm);
    }
  }, [searchTerm]);

  const handleSearchTerm = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchTerm(value);
    setSearchTriggered(true);
  }, [])

  return [searchTerm, handleSearchTerm]
}
