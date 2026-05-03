import type { en } from "./en";

/**
 * Locale identifier. Add new locales here.
 */
export type Locale = "en" | "es";

/**
 * Dict shape. Derived from the English dictionary so TypeScript enforces
 * key parity across all locales.
 */
export type Dict = Record<keyof typeof en, string>;

/**
 * Translation key. Autocomplete in IDEs; compile error if the key
 * doesn't exist in the English dictionary.
 */
export type DictKey = keyof typeof en;
