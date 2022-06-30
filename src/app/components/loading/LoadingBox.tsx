import { Box, CircularProgress } from "@mui/material";
import { PropsWithChildren } from "react";
import { LoadingBoxBackdrop } from "./styled/LoadingBoxBackdrop";

type LoadingBox = PropsWithChildren<{
    loading: boolean;
}>
export default function LoadingBox(props: LoadingBox) {
    return (
        <Box sx={{ position: 'relative' }}>
            {props.children}
            <LoadingBoxBackdrop open={props.loading}>
                <CircularProgress color="inherit" />
            </LoadingBoxBackdrop>
        </Box>
    );
}