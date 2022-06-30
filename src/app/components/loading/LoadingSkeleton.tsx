import { CircularProgress } from "@mui/material";
import { PropsWithChildren, ReactNode } from "react";

type LoadingSkeletonProps = PropsWithChildren<{
    loading: boolean | boolean[];
    skeleton?: ReactNode;
}>
export default function LoadingSkeleton(props: LoadingSkeletonProps) {
    const { skeleton } = props;
    const loading = determineIfLoading(props.loading);
    const skeletonHtml = skeleton != null ? skeleton : defaultSkeleton;
    return (
        <>
            {loading ? skeletonHtml : props.children}
        </>
    );
}

// Constants
const determineIfLoading = (loading: boolean | boolean[]) => {
    if (Array.isArray(loading)) {
        return loading.indexOf(true) > -1;
    }
    return loading;
}

const defaultSkeleton = (
    <div className="w-full text-center">
        <CircularProgress color="default" size={50} />
    </div>
)