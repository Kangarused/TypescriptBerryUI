import { TableRow, TableCell, Button, Box, Stack, Typography } from "@mui/material";
import { PagingFilterDto, AuditListItemDtoPagedResponseDto, AuditListItemDto } from "../../../../../types/demoTypes";
import { formatDate } from "../../../../../utilities/dateUtilities";
import DataTableProvider from "../../../../components/table/DataTableProvider";
import TableSortCell from "../../../../components/table/TableSortCell";
import AuditLogDetailModal from "./AuditLogDetailModal";

type AuditLogSearchGridProps = {
    filter: PagingFilterDto,
    data: AuditListItemDtoPagedResponseDto,
    loading: boolean,
    onChange: (options: PagingFilterDto) => void
}
export default function AuditLogSearchGrid(props: AuditLogSearchGridProps) {
    const { filter, data, loading, onChange } = props;

    return (
        <Box className="pt-4">
            <DataTableProvider
                loading={loading}
                page={filter.page!}
                headerRow={headerRow}
                bodyRow={generateTableRows(data.items!)}
                pageSize={filter.pageSize!}
                totalRecords={data.totalRecords!}
                sortColumn={filter.sortColumn}
                sortDirection={filter.sortDirection}
                onChange={onChange}
            />
        </Box>
    );
}

// Pure Component Functions
const headerRow = (
    <TableRow>
        <TableSortCell width={250} sortBy="code">Category</TableSortCell>
        <TableSortCell width={250} sortBy="createdOn">Created on</TableSortCell>
        <TableSortCell width={250} sortBy="createdBy">Created by</TableSortCell>
        <TableSortCell sx={{ minWidth: '400px' }} sortBy="message">Message</TableSortCell>
        <TableCell width={100}>Actions</TableCell>
    </TableRow>
);

const generateTableRows = (data: AuditListItemDto[]) => {
    return data.map((row) => (
        <TableRow key={row.auditId}>
            <TableCell> {row.code} </TableCell>
            <TableCell> {formatDate(row.createdOn)} </TableCell>
            <TableCell>
                <Typography variant="inherit">{row.createdBy}</Typography>
            </TableCell>
            <TableCell className="break-all"> {row.message} </TableCell>
            <TableCell>
                <Stack direction="row" spacing={1}>
                    <AuditLogDetailModal data={row}>
                        <Button variant="outlined" size="small">View</Button>
                    </AuditLogDetailModal>
                </Stack>
            </TableCell>
        </TableRow>
    ));
}