import { BreadcrumbRouteObject } from "../types/breadcrumbRouteObject";
import { MenuItem, MenuItemTypes } from "../types/menuItem";
import { toTitleCase } from "./stringUtilities";

export const route = (options: BreadcrumbRouteObject) => options;
export const getPath = (route: BreadcrumbRouteObject) => (route.index ? route.indexPath : route.path) ?? '/';
export const getRouteName = (route: BreadcrumbRouteObject) => {
    const value = getPath(route).split(/[/]+/).pop();
    return value != null ? toTitleCase(value.replace(/-/, ' ')) : 'No route name';
}
export const routeToMenuItem = (route: BreadcrumbRouteObject, options?: Partial<MenuItem>): MenuItem => {
    const path = getPath(route);
    return {
        id: path,
        title: getRouteName(route),
        type: MenuItemTypes.item,
        url: path,
        ...options
    }
}