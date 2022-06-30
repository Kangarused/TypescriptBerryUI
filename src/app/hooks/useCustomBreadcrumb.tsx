import { Skeleton } from "@mui/material";
import { ReactNode, useEffect } from "react"
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { BreadcrumbComponentType } from "use-react-router-breadcrumbs";
import { addBreadcrumbItem, removeBreadcrumbItem } from "../store/slices/breadcrumbSlice"
import { BreadcrumbState, BreadcrumbStatePayload } from "../../types/breadcrumbState"

export function useCustomBreadcrumb(match: string | undefined, replaceWith: string | undefined) {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(addBreadcrumbItem({
            match: match,
            replaceWith: replaceWith
        } as BreadcrumbStatePayload))
        return (() => {
            dispatch(removeBreadcrumbItem({
                match: match
            } as BreadcrumbStatePayload))
        })
    }, [replaceWith])
}

export function useRenderCustomBreadcrumb(fallback?: ReactNode): BreadcrumbComponentType<any> {
    if (fallback == null) {
        fallback = (<Skeleton animation="wave" variant="text" height={30} width={75} />)
    }
    return ({ match }) => {
        const matchRoute = match.route?.path;
        const breadcrumbState = useSelector((state: { breadcrumb: BreadcrumbState }) => state.breadcrumb, shallowEqual);
        const data = breadcrumbState && matchRoute && breadcrumbState[matchRoute];
        const output = (<span>{data}</span>);
        return (
            <>
                {data != null ? output : fallback}
            </>
        );
    }
}