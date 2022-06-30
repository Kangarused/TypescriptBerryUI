import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setPageLoaded } from "../store/slices/websiteRenderSlice";
import { WebsiteRenderState } from "../../types/websiteRenderState";

export function usePageLoaded(loadingStates?: boolean[]) {
    const doneLoading = useSelector((state: { websiteRender: WebsiteRenderState }) => state.websiteRender.complete);

    if (loadingStates != null) {
        const dispatch = useDispatch();
        useEffect(() => {
            if (loadingStates.indexOf(true) == -1 && !doneLoading) {
                dispatch(setPageLoaded(true));
            }
        }, [loadingStates, doneLoading]);
    }

    return { doneLoading };
}