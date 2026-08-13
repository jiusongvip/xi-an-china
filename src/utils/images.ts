const RESPONSIVE_WIDTHS = [480, 768, 1024] as const;

/** Build a srcset string for images that have pre-generated responsive variants. */
export function responsiveSrcset(src: string): string {
  const base = src.replace(/\.webp$/, "");
  return RESPONSIVE_WIDTHS.map((w) => `${base}-${w}.webp ${w}w`).join(", ");
}

/** Build the primary src used along with responsiveSrcset. */
export function responsiveFallback(src: string): string {
  return `${src.replace(/\.webp$/, "")}-1024.webp`;
}