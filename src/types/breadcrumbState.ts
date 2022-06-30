export type BreadcrumbState = { [key: string]: string | null };
export type BreadcrumbStatePayload = {
    match: string,
    replaceWith: string
}