/**
 * Checks if a URL is external (starts with http, https, or //)
 * @param url - The URL to check
 * @returns true if the URL is external, false otherwise
 */
export function isExternalUrl(url: string): boolean {
  return url.startsWith("http") || url.startsWith("//");
}
