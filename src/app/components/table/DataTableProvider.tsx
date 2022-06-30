import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody, SortDirection } from "@mui/material";
import { ReactNode } from "react";
import { PagingFilterDto } from "../../../types/demoTypes";
import LoadingBox from "../loading/LoadingBox";
import { DataTableContext } from "./context/DataTableContext";
import TablePager from "./TablePager";

type DataTableProviderProps = {
    loading: boolean,
    headerRow: ReactNode,
    bodyRow: ReactNode,
    page: number,
    pageSize: number,
    totalRecords: number,
    sortColumn?: string | null | undefined,
    sortDirection?: SortDirection | null | undefined,
    noResultsMessage?: string | null | undefined,
    onChange: (options: PagingFilterDto) => void
}
export default function DataTableProvider(props: DataTableProviderProps) {
    // Prop spreading
    const { loading, headerRow, bodyRow, page, pageSize, totalRecords, onChange } = props;
    const { noResultsMessage = 'No results found' } = props;
    const hasData = totalRecords > 0;

    return (
        <LoadingBox loading={loading}>
            <TableContainer component={Paper}>
                <DataTableContext.Provider value={{
                    sortColumn: props.sortColumn ?? '',
                    sortDirection: props.sortDirection ?? 'asc',
                    onSort: onChange
                }}>
                    <Table stickyHeader size="small">
                        <TableHead>
                            {headerRow}
                        </TableHead>
                        <TableBody>
                            {!hasData ? generateNoResultsCell(noResultsMessage) : bodyRow}
                        </TableBody>
                    </Table>
                </DataTableContext.Provider>
            </TableContainer>
            <TablePager page={page} pageSize={pageSize} totalRecords={totalRecords} onChange={onChange} />
        </LoadingBox>
    );
}

// Pure Component Functions
const generateNoResultsCell = (message: string | null) => (<TableRow>
    <TableCell colSpan={6} align="center">{message}</TableCell>
</TableRow>);