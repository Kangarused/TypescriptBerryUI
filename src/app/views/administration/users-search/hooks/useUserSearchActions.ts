import { useState } from "react";
import { UserListItemDtoPagedResponseDto, UserListFilterDto, PagingFilterDto } from "../../../../../types/demoTypes";
import { getDefaultPagedResponse } from "../../../../../utilities/paginationUtilities";

export function useUserSearchActions() {
    // State
    const [data, setData] = useState<UserListItemDtoPagedResponseDto>(getDefaultPagedResponse());

    // Mutation hooks
    const filterMutation: any = { isLoading: false }; // This should be the redux query hook ie. useFilterUsersMutation();

    // Methods
    const search = (filter: UserListFilterDto, paging: PagingFilterDto) => {
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
                userId: 1,
                username: 'Example',
                name: 'Example User',
                email: 'example.user@example.com'
            }],
            totalRecords: 1
        });
    }

    return { data, search, loading: filterMutation.isLoading };
}