import { SortDirection } from "@mui/material";
import { createContext, useContext } from "react";
import { PagingFilterDto } from "../../../../types/demoTypes";

type DataTableContextProps = {
    sortColumn?: string,
    sortDirection?: SortDirection,
    onSort: (options: PagingFilterDto) => void
}
const DataTableContext = createContext<DataTableContextProps>({
    onSort: () => { }
});
function useDataTableContext() {
    const context = useContext(DataTableContext);
    if (context === undefined) {
        throw new Error('useDataTableContext must be used within a DataTableProvider');
    }
    return context;
}
export { DataTableContext, useDataTableContext }