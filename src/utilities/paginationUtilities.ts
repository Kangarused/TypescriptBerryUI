import { PagingFilterDto } from "../types/demoTypes";

// Paging Filter
export const pagingOptions = (currentOptions: PagingFilterDto, newOptions: PagingFilterDto) => { return { ...currentOptions, ...newOptions }; }
export const pagingReset = (currentOptions: PagingFilterDto, newOptions?: PagingFilterDto) => { return { ...currentOptions, ...(newOptions ? newOptions : { page: 1 }) }; }

// Paged Response
export type PagedResponse<T> = {
    totalRecords: number;
    items: T[] | null;
}
export const getDefaultPagedResponse = () => {
    return {
        totalRecords: 0,
        items: []
    } as PagedResponse<any>
}

// Page Sizes
export enum PageSizes {
    _5 = 5,
    _10 = 10,
    _15 = 15,
    _100 = 100
};
const keys = Object.keys(PageSizes).filter(k => typeof PageSizes[k as any] === "number");
const values = keys.map(k => +PageSizes[k as any]);
export const getDefaultPageSizeOptions = (): number[] => {
    return values;
}