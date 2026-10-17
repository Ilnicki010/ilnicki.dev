export function loomId(value: string): string | null {
  try {
    const url = new URL(value);
    if (url.protocol !== 'https:' || !['loom.com', 'www.loom.com'].includes(url.hostname)) {
      return null;
    }
    return url.pathname.match(/^\/share\/([a-f0-9]{32})\/?$/i)?.[1] ?? null;
  } catch {
    return null;
  }
}
