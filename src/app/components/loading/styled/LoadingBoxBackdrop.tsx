import { Backdrop, styled } from "@mui/material";
import { addAlpha } from "../../../../utilities/colorUtilities";

export const LoadingBoxBackdrop = styled(Backdrop)(({ theme }) => ({
    backgroundColor: addAlpha(theme.palette.background.default, 0.5),
    color: theme.palette.primary.main,
    position: 'absolute',
    zIndex: theme.zIndex.drawer + 1
}));