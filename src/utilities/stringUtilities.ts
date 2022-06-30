export const toTitleCase = (str: string) => str.replace(/\b\S/g, t => t.toUpperCase());
export const contains = (search: string | undefined, value: string | undefined) => search && value ? (search.indexOf(value) > -1) : false;
export const isString = (value: any) => value instanceof String || typeof value == 'string';