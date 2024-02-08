import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Now when you have conditional classes,
// we can use the same utility function as
// when we have this merging issues where
// we have some className coming in
// and we want to merge it with some base styles.
//


export function capitalize(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export async function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, 1000));
}