import { Button, Grid, Stack } from "@mui/material";
import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { UserListFilterDto } from "../../../../../types/demoTypes";
import EditFormProvider from "../../../../components/form/EditFormProvider";
import FormTextInput from "../../../../components/form/FormTextInput";

type UserSearchFormProps = {
    filter: UserListFilterDto,
    onSubmit: SubmitHandler<UserListFilterDto>,
    triggerByDefault?: boolean
}
export default function UserSearchForm(props: UserSearchFormProps) {
    // Independent hooks
    const methods = useForm<UserListFilterDto>({ defaultValues: props.filter });

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
                    <FormTextInput<UserListFilterDto> name="name" label="Name" />
                </Grid>
                <Grid item xs={12} sm={6} lg={3}>
                    <FormTextInput<UserListFilterDto> name="email" label="Email" />
                </Grid>
                <Grid item xs={12} sm={6} lg={3}>
                    <FormTextInput<UserListFilterDto> name="username" label="Username" />
                </Grid>
                <Grid item xs={12} sm={6} lg={3}>
                    <Stack direction="row" spacing={1}>
                        <Button variant="outlined" color="default" type="reset">Clear search</Button>
                        <Button variant="outlined" type="submit">Search</Button>
                    </Stack>
                </Grid>
            </Grid>
        </EditFormProvider>
    );
}