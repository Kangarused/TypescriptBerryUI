import { useEffect, useState } from "react";
import { PagingFilterDto } from "../../../../types/demoTypes";

type HookProps = {
    page: number,
    pageSize: number,
    totalRecords: number,
    onChange: (options: PagingFilterDto) => void
}
export default function useTablePager(props: HookProps) {
    const { page, pageSize, totalRecords, onChange } = props;
    const [pageCount, setPageCount] = useState(1);

    const calculatePageCount = (): void => {
        let pageCount = 1;
        if (totalRecords > 0 && pageSize > 0) {
            pageCount = Math.ceil(totalRecords / pageSize);
        }

        setPageCount(pageCount);
    }

    const handleChangePage = (event: unknown, newPage: number) => {
        onChange({ page: newPage });
    };

    const handleChangeRowsPerPage = (newPageSize: number) => {
        let newPage = page;
        //if the current page no longer exists due to change in page size
        let pagesFraction = totalRecords! / newPageSize;
        if (page! > pagesFraction) {
            //set the current page to the last available page
            if (pagesFraction % 1 !== 0) {
                //if its not a whole number, add 1 to present the incomplete page of records
                newPage = Math.floor(totalRecords! / newPageSize) + 1;
            } else {
                newPage = Math.floor(totalRecords! / newPageSize);
                if (newPage == 0) {
                    newPage = 1;
                }
            }
        }
        onChange({ page: newPage, pageSize: newPageSize });
    };

    useEffect(() => {
        calculatePageCount();
        // if (totalRecords < (page * pageSize)) {
        //     onChange({ page: 1 });
        // }
    }, [pageSize, totalRecords])

    return { pageCount, handleChangePage, handleChangeRowsPerPage };
}