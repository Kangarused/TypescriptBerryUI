import { Button, Grid, Stack } from "@mui/material";
import { useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router";
import { useCustomBreadcrumb } from "../../../hooks/useCustomBreadcrumb";
import { getPath } from "../../../../utilities/routeUtilities";
import { contains } from "../../../../utilities/stringUtilities";
import MainCard from "../../../components/cards/MainCard";
import EditFormProvider from "../../../components/form/EditFormProvider";
import FormTextInput from "../../../components/form/FormTextInput";
import Page from "../../../components/page/Page";
import { AdministrationRoutes } from "../../../routes/administrationRoutes";
import { useUserDetailCrudActions } from "./hooks/useUserDetailCrudActions";
import ErrorRenderer from "../../../components/errors/ErrorRenderer";
import { UserDetailDto } from "../../../../types/demoTypes";
import CardTitle from "../../../components/cards/CardTitle";

const mockUser: UserDetailDto = {
    userId: 1,
    username: 'Example',
    name: 'Example User',
    email: 'example.user@example.com'
}

type UserDetailParams = {
    userId: string
}
export default function UserDetail() {
    // States
    const [editing, setEditing] = useState(false);

    // Independent hooks
    const navigate = useNavigate();
    const { userId } = useParams<UserDetailParams>();
    const { onCreate, onEdit } = useUserDetailCrudActions();

    // Data hooks
    const creating = useMemo(() => contains(AdministrationRoutes.userDetail.createPath, userId), [userId]);
    const { isLoading, error, data } = { isLoading: false, error: null, data: creating ? ({} as any) : mockUser } // Redux Query hook ie. useGetUserById(+userId!, { query: { staleTime: 0, enabled: !creating } });
    const methods = useForm<UserDetailDto>({ defaultValues: data ?? {} });
    useCustomBreadcrumb(AdministrationRoutes.userDetail.path, creating ? 'Create' : data && `${data?.name}`); // Set custom breadcrumb (only works if the route is configured to use custom breadcrumbs)

    // Data
    const loadingState = [isLoading];

    // Methods
    const onUpdate = () => { setEditing(true); }
    const onDiscard = () => { setEditing(false); }
    const onSubmit = methods.handleSubmit((data: UserDetailDto) => {
        if (creating) {
            onCreate(data).then((response: any) => navigate(`${getPath(AdministrationRoutes.userSearch)}/${response}`, { replace: true }))
        } else {
            onEdit(data).then(() => onDiscard());
        }
    });
    const onReset = () => {
        methods.reset();
        onDiscard();
    }

    // Effects
    useEffect(() => {
        methods.reset(data);
    }, [data]);

    return (
        <Page loadingState={loadingState}>
            <Grid container spacing={1}>
                <Grid item xs={12} md={6} lg={4}>
                    <MainCard title={<CardTitle title={"User details"} withBackButton />}>
                        {error == null && <EditFormProvider {...methods} readonly={!editing && !creating} loading={isLoading} handleSubmit={onSubmit} handleReset={onReset}>
                            <Stack spacing={2}>
                                <FormTextInput<UserDetailDto> name="username" label="Username" />
                                <FormTextInput<UserDetailDto> name="name" label="Name" />
                                <FormTextInput<UserDetailDto> name="email" label="Email" type="email" />
                                {!isLoading && <Stack spacing={2} direction="row" justifyContent="flex-end">
                                    {!editing && !creating && <Button variant="outlined" color="primary" onClick={onUpdate} type="button">Update details</Button>}
                                    {editing && !creating && <Button variant="outlined" color="default" type="reset">Discard changes</Button>}
                                    {(editing || creating) && <Button variant="outlined" color="secondary" type="submit">{creating ? 'Create' : 'Save changes'}</Button>}
                                </Stack>}
                            </Stack>
                        </EditFormProvider>}
                        {error != null && <ErrorRenderer error={error}></ErrorRenderer>}
                    </MainCard>
                </Grid>
            </Grid>
        </Page>
    );
}