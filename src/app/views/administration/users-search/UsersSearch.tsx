import { Plus } from "@emotion-icons/bootstrap";
import { Button } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router";
import { PagingFilterDto, UserListFilterDto } from "../../../../types/demoTypes";
import { PageSizes, pagingOptions, pagingReset } from "../../../../utilities/paginationUtilities";
import MainCard from "../../../components/cards/MainCard";
import Page from "../../../components/page/Page";
import { AdministrationRoutes } from "../../../routes/administrationRoutes";
import UserSearchForm from "./components/UserSearchForm";
import UserSearchGrid from "./components/UserSearchGrid";
import { useUserSearchActions } from "./hooks/useUserSearchActions";

export default function UsersSearch() {
    // State
    const [filter, setFilter] = useState<UserListFilterDto>({} as any);
    const [paging, setPaging] = useState<PagingFilterDto>({
        page: 1,
        pageSize: PageSizes._10
    });

    // Independent hooks
    const navigate = useNavigate();
    const { data, search, loading } = useUserSearchActions();

    // Methods
    const onFilterChanged = (filter: UserListFilterDto) => {
        setFilter(filter);
        doSearch(filter, pagingReset(paging));
    }
    const onPagingChanged = (options: PagingFilterDto) => {
        doSearch(filter, pagingOptions(paging, options));
    }
    const doSearch = (filter: UserListFilterDto, paging: PagingFilterDto) => {
        setPaging(paging);
        search(filter, paging);
    }
    const onAdd = () => { navigate(AdministrationRoutes.userDetail.createPath!); }

    return (
        <Page>
            <MainCard title="User Administration" secondary={generateAddButton(onAdd)}>
                <UserSearchForm filter={filter} onSubmit={onFilterChanged} triggerByDefault />
                <UserSearchGrid filter={paging} data={data} loading={loading} onChange={onPagingChanged} />
            </MainCard>
        </Page>
    );
}

// Pure Component Functions
const generateAddButton = (onAdd: () => void) => (<Button variant="outlined" color="secondary" size="small" startIcon={<Plus size={19} />} onClick={onAdd}>Add user</Button>);
