import { lazy } from "react";
import { Navigate } from "react-router-dom";
import { useRenderCustomBreadcrumb } from "../hooks/useCustomBreadcrumb";
import { BreadcrumbRouteObject } from "../../types/breadcrumbRouteObject";
import { route } from "../../utilities/routeUtilities";
import Loadable from "../components/loading/Loadable";
import AuthRoute from "../components/security/AuthRoute";

// Declare lazy load pages
const UserSearch = Loadable(lazy(() => import('../views/administration/users-search/UsersSearch')));
const UserDetail = Loadable(lazy(() => import('../views/administration/users-detail/UserDetail')));
const AuditLogSearch = Loadable(lazy(() => import('../views/administration/audit-log-search/AuditLogSearch')));

// Delcare route groups
const AdministrationGroups = {
    base: 'administration',
    users: '/administration/users',
    codes: '/administration/codes',
    configuration: '/administration/configuration'
}

// Declare individual routes
export const AdministrationRoutes = {
    default: route({
        path: AdministrationGroups.base,
        element: <Navigate to={AdministrationGroups.users} />
    }),
    userSearch: route({
        index: true,
        indexPath: AdministrationGroups.users,
        element: <AuthRoute><UserSearch /></AuthRoute>,
    }),
    userDetail: route({
        path: ':userId',
        createPath: './create',
        element: <AuthRoute><UserDetail /></AuthRoute>,
        breadcrumb: useRenderCustomBreadcrumb()
    }),
    codesSearch: route({
        index: true,
        indexPath: AdministrationGroups.codes,
        element: <AuthRoute></AuthRoute>,
    }),
    codesDetail: route({
        path: ':codeId',
        element: <AuthRoute></AuthRoute>,
    }),
    systemConfiguration: route({
        path: `/${AdministrationGroups.base}/configuration`,
        element: <AuthRoute></AuthRoute>
    }),
    auditLogSearch: route({
        path: `/${AdministrationGroups.base}/audit-log`,
        element: <AuthRoute><AuditLogSearch /></AuthRoute>,
    }),
}

// Declare route list
const AdministrationRoutesList: BreadcrumbRouteObject[] = [
    AdministrationRoutes.default,
    {
        path: AdministrationGroups.users,
        children: [
            AdministrationRoutes.userSearch,
            AdministrationRoutes.userDetail
        ]
    },
    {
        path: AdministrationGroups.codes,
        children: [
            AdministrationRoutes.codesSearch,
            AdministrationRoutes.codesDetail
        ]
    },
    AdministrationRoutes.systemConfiguration,
    AdministrationRoutes.auditLogSearch
]
export default AdministrationRoutesList;