import { Params } from "@interfaces/searchParams";

export function validateSearchParams(params: Params, key: string) {
  if (!params) {
    return undefined;
  }

  if (Array.isArray(params[key])) {
    return undefined;
  }

  return params[key];
}
