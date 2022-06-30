import { Grid, Typography } from "@mui/material";
import { ReactElement } from "react";
import { AuditListItemDto } from "../../../../../types/demoTypes";
import { formatDate, humanizeDiff } from "../../../../../utilities/dateUtilities";
import LabelTextBlock from "../../../../components/display/LabelTextBlock";
import BaseModal from "../../../../components/modals/base/BaseModal";

type AuditLogDetailModalProps = {
    children: ReactElement,
    data: AuditListItemDto
}
export default function AuditLogDetailModal(props: AuditLogDetailModalProps) {
    const { data } = props;

    return (
        <BaseModal
            title="Audit Detail"
            content={
                <Grid className="py-4 min-w-[700px]" container spacing={1} rowSpacing={4}>
                    <Grid item xs={12}>
                        <LabelTextBlock label="Category">{data.code}</LabelTextBlock>
                    </Grid>
                    <Grid item xs={6}>
                        <LabelTextBlock label="Created on">
                            <div>{formatDate(data.createdOn)}</div>
                            <Typography variant="subtitle2">{humanizeDiff(data.createdOn!, new Date())}</Typography>
                        </LabelTextBlock>
                    </Grid>
                    <Grid item xs={6}>
                        <LabelTextBlock label="Created by">
                            <div>{data.createdBy}</div>
                        </LabelTextBlock>
                    </Grid>
                    <Grid item xs={12}>
                        <LabelTextBlock label="Message">
                            <div>{data.message}</div>
                        </LabelTextBlock>
                    </Grid>
                </Grid>
            }
        >
            {props.children}
        </BaseModal>
    );
}