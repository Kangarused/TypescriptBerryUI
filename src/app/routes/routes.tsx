import { useRoutes } from "react-router-dom";
import { BreadcrumbRouteObject } from "../../types/breadcrumbRouteObject";
import MainLayout from '../layout/MainLayout';
import AdministrationRoutesList from "./administrationRoutes";
import MainRoutesList from "./mainRoutes";

// Declare base route which renders the layout, then import all sub-routes as its children
// Export this so that it can be used by the breadcrumbs
export const routes: BreadcrumbRouteObject[] = [
    {
        path: '/',
        element: <MainLayout />,
        children: [
            ...MainRoutesList,
            ...AdministrationRoutesList
        ]
    }
];

// Export function that builds the app routes
export default function AppRoutes() {
    return useRoutes(routes)
}