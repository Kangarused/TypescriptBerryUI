import { TableCell, TableCellProps, TableSortLabel } from "@mui/material";
import React, { PropsWithChildren } from "react";
import { useDataTableContext } from "./context/DataTableContext";

type TableSortCellProps = PropsWithChildren<{
    width?: string | number,
    sortBy: string
}> & TableCellProps
export default function TableSortCell(props: TableSortCellProps) {
    // Prop spreading
    const { sortBy, ...tableCellProps } = props;

    // Independent hooks
    const { sortColumn, sortDirection, onSort } = useDataTableContext();

    // Methods
    const onSortChanged = (column: string) => (event: React.MouseEvent<unknown>) => {
        if (sortColumn != column) {
            onSort({ sortColumn: column, sortDirection: 'asc' });
        } else {
            if (sortDirection != 'desc') {
                onSort({ sortColumn: column, sortDirection: 'desc' })
            } else {
                onSort({ sortColumn: null, sortDirection: 'asc' })
            }
        }
    }

    return (
        <TableCell {...tableCellProps} sortDirection={sortColumn === sortBy ? sortDirection : undefined}>
            <TableSortLabel
                active={sortColumn === sortBy}
                direction={sortColumn === sortBy ? (sortDirection as any) : "asc"}
                onClick={onSortChanged(sortBy)}
            >
                {props.children}
            </TableSortLabel>
        </TableCell>
    );
}