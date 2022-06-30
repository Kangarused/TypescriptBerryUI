import { Grid, Typography } from "@mui/material";
import { useEffect, useMemo } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { UserAuthState } from "../../../types/userAuthState";
import { checkAccess } from "../../../utilities/accessUtilities";
import { getPath } from "../../../utilities/routeUtilities";
import Page from "../../components/page/Page";
import { MainRoutes } from "../../routes/mainRoutes";

export default function NoAccess() {
    // Independent hooks
    const navigate = useNavigate();
    const location = useLocation();

    // Data hooks
    const userAuth = useSelector((state: { userAuth: UserAuthState }) => state.userAuth);
    const hasAccess = useMemo(() => checkAccess(userAuth), [userAuth]); // Wrap in memo as this is a dependency of the useEffect, we don't want to trigger the effect on every render unless userAuth has changed

    // Effects
    useEffect(() => {
        if (hasAccess) {
            const origin = (location.state as any)?.from?.pathname || getPath(MainRoutes.dashboard);
            navigate(origin, { replace: true });
        }
    }, [hasAccess]);
    return (
        <Page>
            <Grid container justifyContent="center" alignItems="center" sx={{ height: 'calc(100vh - 200px)' }}>
                <Grid item>
                    <Typography variant="h1" align="center" gutterBottom>Something went wrong...</Typography>
                    <Typography variant="h4" align="center" gutterBottom>You may not have access to this system</Typography>
                    <Typography variant="subtitle1" align="center">
                        Please send an email to <a href="mailto:youremailgoeshere@emailprovider.com">youremailgoeshere@emailprovider.com</a> to request access.
                    </Typography>
                </Grid>
            </Grid>
        </Page>
    );
}