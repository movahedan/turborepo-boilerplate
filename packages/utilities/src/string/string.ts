import { twMerge } from 'tailwind-merge';

export type ClassName = string | undefined | boolean | null;

// Keep it minimal and just use it with arrays.
export function classNames(names: ClassName[]) {
  return twMerge(
    names.filter((name) => name !== true && Boolean(name)).join(' '),
  );
}
