import { KeyboardArrowDown } from "@emotion-icons/material-rounded";
import { Button, Menu, MenuItem, Pagination } from "@mui/material";
import { useState } from "react";
import { PagingFilterDto } from "../../../types/demoTypes";
import { getDefaultPageSizeOptions } from "../../../utilities/paginationUtilities";
import useTablePager from "./hooks/useTablePager";

type TablePagerProps = {
    page: number,
    pageSize: number,
    totalRecords: number,
    onChange: (options: PagingFilterDto) => void,
    pageSizeOptions?: number[],
}
export default function TablePager(props: TablePagerProps) {
    // Prop spreading
    const {
        page,
        pageSize,
        totalRecords,
        onChange,
        pageSizeOptions = getDefaultPageSizeOptions()
    } = props;

    // Data hooks
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const { pageCount, handleChangePage, handleChangeRowsPerPage } = useTablePager({ page, pageSize, totalRecords, onChange });

    // Methods
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleMenuClosed = (rows?: number) => {
        setAnchorEl(null);
        if (rows != null) {
            handleChangeRowsPerPage(rows);
        }
    };

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2">
            <div className="pt-2 pb-2 text-center sm:text-left">
                <Button
                    id="pagination-button"
                    aria-controls={open ? 'pagination-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    color="default"
                    onClick={handleClick}
                    endIcon={<KeyboardArrowDown size={24} />}
                    sx={{ fontWeight: 'bold' }}>
                    {`${pageSize} Rows`}
                </Button>
                <Menu
                    id="pagination-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={() => handleMenuClosed()}
                    MenuListProps={{
                        'aria-labelledby': 'pagination-button',
                    }}>
                    {pageSizeOptions.map(m => <MenuItem key={`MenuItem${m}`} onClick={() => handleMenuClosed(m)}>{`${m} Rows`}</MenuItem>)}
                </Menu>
            </div>
            <div className="pt-2 pb-2 w-full flex flex-row items-center justify-center sm:justify-end">
                <Pagination color="default" page={page} count={pageCount} onChange={handleChangePage} showFirstButton showLastButton />
            </div>
        </div>
    );
}