import { Button, Grid, Stack } from "@mui/material";
import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import EditFormProvider from "../../../../components/form/EditFormProvider";
import FormDatePicker from "../../../../components/form/FormDatePicker";
import FormTextInput from "../../../../components/form/FormTextInput";

type AuditListFilterDto = {
    name: string,
    dateFrom: Date,
    dateTo: Date
}
type OptionItemDto = {}

type AuditLogSearchFormProps = {
    filter: AuditListFilterDto,
    onSubmit: SubmitHandler<AuditListFilterDto>,
    triggerByDefault?: boolean
}
export default function AuditLogSearchForm(props: AuditLogSearchFormProps) {
    // Independent hooks
    const methods = useForm<AuditListFilterDto>({ defaultValues: props.filter });

    // Methods
    const onSubmit = methods.handleSubmit(props.onSubmit);
    const onReset = () => {
        methods.reset();
        onSubmit();
    }

    // Effects
    useEffect(() => {
        if (props.triggerByDefault) {
            props.onSubmit(props.filter);
        }
    }, []);

    return (
        <EditFormProvider {...methods} handleSubmit={onSubmit} handleReset={onReset} readonly={false}>
            <Grid container spacing={1}>
                <Grid item xs={12} sm={6} lg={3}>
                    <FormTextInput<AuditListFilterDto> name="name" label="Created by" />
                </Grid>
                <Grid item xs={12} sm={6} lg={3}>
                    <FormDatePicker<AuditListFilterDto> name="dateFrom" label="Date from" />
                </Grid>
                <Grid item xs={12} sm={6} lg={3}>
                    <FormDatePicker<AuditListFilterDto> name="dateTo" label="Date to" />
                </Grid>
                <Grid item xs={12} sm={12} lg={12}>
                    <Stack direction="row-reverse" spacing={1}>
                        <Button variant="outlined" type="submit">Search</Button>
                        <Button variant="outlined" color="default" type="reset">Clear search</Button>
                    </Stack>
                </Grid>
            </Grid>
        </EditFormProvider>
    );
}