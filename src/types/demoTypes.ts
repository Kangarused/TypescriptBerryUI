import { SortDirection } from "@mui/material"

export type AuditListFilterDto = {
    name: string,
    dateFrom: Date,
    dateTo: Date
}
export type AuditListItemDto = {
    auditId: number,
    code: string,
    message: string,
    createdOn: string,
    createdBy: string,
}
export type AuditListItemDtoPagedResponseDto = {
    items: AuditListItemDto[] | null,
    totalRecords: number,
}
export type PagingFilterDto = {
    page?: number,
    pageSize?: number,
    sortColumn?: string | null,
    sortDirection?: SortDirection | undefined
}
export type OptionItemDto = {

}
export type UserListFilterDto = {
    username: string,
    name: string,
    email: string,
}
export type UserListItemDto = {
    userId: number,
    username: string,
    name: string,
    email: string,
}
export type UserListItemDtoPagedResponseDto = {
    items: UserListItemDto[] | null,
    totalRecords: number,
}
export type UserDetailDto = {
    userId: number,
    username: string,
    name: string,
    email: string,
}
export type UserAuthDto = {
    name: string,
    email: string,
    roles: string[]
}