const storage = new Map<string, string>();
const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_-.~";
const length = 10;

/**
 * Encodes a URL to a shortened URL.
 */
export function encode(longUrl: string): string {
  let shortUrl = "";

  do {
    shortUrl = "";

    for (let i = 0; i < length; i++) {
      const idx = Math.floor(Math.random() * chars.length);

      shortUrl += chars[idx];
    }
  } while (storage.has(shortUrl));

  storage.set(shortUrl, longUrl);

  return shortUrl;
};

/**
 * Decodes a shortened URL to its original URL.
 */
export function decode(shortUrl: string): string {
  return storage.get(shortUrl) || "";
};

/**
 * Your functions will be called as such:
 * decode(encode(strs));
 */

// Test Case #1
const url = "https://leetcode.com/problems/design-tinyurl";
const shortUrl = encode(url);
console.log(shortUrl)
const result = decode(shortUrl);
console.log(result)