import { lazy } from "react";
import Loadable from "../components/loading/Loadable";
import NotFound from "../views/main/NotFound";
import { route } from "../../utilities/routeUtilities";
import { BreadcrumbRouteObject } from "../../types/breadcrumbRouteObject";
import NoAccess from "../views/main/NoAccess";
import AuthRoute from "../components/security/AuthRoute";
import { Box } from "@mui/material";
import { HouseFill } from "@emotion-icons/bootstrap";

// Declare lazy load pages
const Dashboard = Loadable(lazy(() => import('../views/main/Dashboard')));

// Declare individual routes
export const MainRoutes = {
    dashboard: route({
        index: true,
        indexPath: '/',
        element: <AuthRoute><Dashboard /></AuthRoute>,
        breadcrumb: () => (<Box sx={{ color: (theme) => theme.palette.primary.main, marginTop: '-6px' }}><HouseFill size={19} /></Box>)
    }),
    noAccess: route({
        path: "/unauthorised",
        element: <NoAccess />
    }),
    notFound: route({
        path: "*",
        element: <NotFound />
    })
}

// Declare route list
const MainRoutesList: BreadcrumbRouteObject[] = [
    MainRoutes.dashboard,
    MainRoutes.noAccess,
    MainRoutes.notFound
];
export default MainRoutesList;
