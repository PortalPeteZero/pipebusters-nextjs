import { en } from "./en";
import { es } from "./es";
import type { Dict, DictKey, Locale } from "./types";

/**
 * Server-side translation lookup. Pages and components import this
 * instead of using a React context, so translations are resolved at
 * build time and the output static HTML contains the right strings
 * per locale.
 *
 * Usage:
 *   import { getDict } from "@/lib/i18n/getDict";
 *   const dict = getDict("en");
 *   return <h1>{dict["hero.headline"]}</h1>;
 */
const dicts: Record<Locale, Dict> = { en, es };

export function getDict(locale: Locale): Dict {
  return dicts[locale];
}

/**
 * Shorthand translation lookup. Prefer getDict() when reading many keys
 * from the same locale in one component.
 */
export function t(locale: Locale, key: DictKey): string {
  return dicts[locale][key];
}

export type { Locale, Dict, DictKey };
