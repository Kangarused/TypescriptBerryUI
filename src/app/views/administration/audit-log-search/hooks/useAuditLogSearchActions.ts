import { useState } from "react";
import { AuditListItemDtoPagedResponseDto, AuditListFilterDto, PagingFilterDto } from "../../../../../types/demoTypes";
import { getDefaultPagedResponse } from "../../../../../utilities/paginationUtilities";

export function useAuditLogSearchActions() {
    // State
    const [data, setData] = useState<AuditListItemDtoPagedResponseDto>(getDefaultPagedResponse());

    // Mutation hooks
    const filterMutation: any = { isLoading: false };

    // Methods
    const search = (filter: AuditListFilterDto, paging: PagingFilterDto) => {
        // Example
        // filterMutation.mutateAsync({ data: { ...filter, ...paging } }).then((response) => {
        //     if (response != null && response.items != null) {
        //         setData(response);
        //     } else {
        //         setData({});
        //     }
        // });
        setData({
            items: [{
                auditId: 1,
                code: 'PageAccess',
                createdOn: new Date().toString(),
                createdBy: 'Example User',
                message: 'User accessed the user administration page'
            }],
            totalRecords: 1
        });
    }

    return { data, search, loading: filterMutation.isLoading };
}