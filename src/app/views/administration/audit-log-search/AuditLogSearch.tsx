import { useState } from "react";
import { AuditListFilterDto, PagingFilterDto } from "../../../../types/demoTypes";
import { PageSizes, pagingOptions, pagingReset } from "../../../../utilities/paginationUtilities";
import MainCard from "../../../components/cards/MainCard";
import Page from "../../../components/page/Page";
import AuditLogSearchForm from "./components/AuditLogSearchForm";
import AuditLogSearchGrid from "./components/AuditLogSearchGrid";
import { useAuditLogSearchActions } from "./hooks/useAuditLogSearchActions";

export default function AuditLogSearch() {
    // State
    const [filter, setFilter] = useState<AuditListFilterDto>({} as any);
    const [paging, setPaging] = useState<PagingFilterDto>({
        page: 1,
        pageSize: PageSizes._10
    });

    // Data hooks
    const { data, loading, search } = useAuditLogSearchActions();

    // Methods
    const onFilterChanged = (filter: AuditListFilterDto) => {
        setFilter(filter);
        doSearch(filter, pagingReset(paging));
    }
    const onPagingChanged = (options: PagingFilterDto) => {
        doSearch(filter, pagingOptions(paging, options));
    }
    const doSearch = (filter: AuditListFilterDto, paging: PagingFilterDto) => {
        setPaging(paging);
        search(filter, paging);
    }

    return (
        <Page>
            <MainCard title="Audit Log">
                <AuditLogSearchForm filter={filter} onSubmit={onFilterChanged} triggerByDefault />
                <AuditLogSearchGrid filter={paging} data={data} loading={loading} onChange={onPagingChanged} />
            </MainCard>
        </Page>
    );
}