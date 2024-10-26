/**
 * capitalize - capitalizes the first letter of the given string.
 * @param text - The string to capitalize
 * @returns The capitalized string
 */
export const capitalize = (text: string): string => {
  if (!text) return '';
  return text.charAt(0).toUpperCase() + text.slice(1);
};
