import { BreadcrumbsRoute } from "use-react-router-breadcrumbs";

export type BreadcrumbRouteObject = BreadcrumbsRoute & {
    indexPath?: string,
    createPath?: string
};