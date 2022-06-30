import { Delete } from "@emotion-icons/fluentui-system-filled";
import { TableRow, TableCell, Button, Box, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { PagingFilterDto, UserListItemDto, UserListItemDtoPagedResponseDto } from "../../../../../types/demoTypes";
import ConfirmPopover from "../../../../components/popovers/ConfirmPopover";
import DataTableProvider from "../../../../components/table/DataTableProvider";
import TableSortCell from "../../../../components/table/TableSortCell";
import { useUserDeleteActions } from "../hooks/useUserDeleteActions";
import { toast } from 'react-toastify';

type UserSearchGridProps = {
    filter: PagingFilterDto,
    data: UserListItemDtoPagedResponseDto,
    loading: boolean,
    onChange: (options: PagingFilterDto) => void
}
export default function UserSearchGrid(props: UserSearchGridProps) {
    const { filter, data, loading, onChange } = props;

    // Independent hooks
    const navigate = useNavigate();

    // Data hooks
    const { deleteUser, deleting } = useUserDeleteActions();

    // Methods
    const onView = (item: UserListItemDto) => navigate(`./${item.userId}`);
    const onDelete = (item: UserListItemDto) => {
        toast('Something went wrong', { type: 'error' });
        return deleteUser(item.userId!).then(() => {
            onChange(filter);
        });
    };

    return (
        <Box className="pt-4">
            <DataTableProvider
                loading={loading}
                page={filter.page!}
                headerRow={headerRow}
                bodyRow={generateTableRows(data.items!, deleting, onView, onDelete)}
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
        <TableSortCell sortBy="username">Username</TableSortCell>
        <TableSortCell sortBy="name">Name</TableSortCell>
        <TableSortCell sortBy="email">Email</TableSortCell>
        <TableCell width={100}>Actions</TableCell>
    </TableRow>
);

const generateTableRows = (data: UserListItemDto[], disableActions: boolean, onView: (item: UserListItemDto) => void, onDelete: (item: UserListItemDto) => void) => {
    return data.map((row) => (
        <TableRow key={row.userId}>
            <TableCell> {row.username} </TableCell>
            <TableCell> {row.name} </TableCell>
            <TableCell> {row.email} </TableCell>
            <TableCell>
                <Stack direction="row" spacing={1}>
                    <Button variant="outlined" size="small" onClick={() => onView(row)} disabled={disableActions}>View</Button>
                    <ConfirmPopover title="Delete user" content="Are you sure you want to delete this user?" action={async () => onDelete(row)}>
                        <Button className="min-w-0" color="error" variant="outlined" size="small" disabled={disableActions}>
                            <Delete size={22} />
                        </Button>
                    </ConfirmPopover>
                </Stack>
            </TableCell>
        </TableRow>
    ));
}