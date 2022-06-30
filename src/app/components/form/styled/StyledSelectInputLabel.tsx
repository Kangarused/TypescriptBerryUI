import { InputLabel, styled } from "@mui/material";
import { shouldForwardWithout } from "../../../../utilities/styledUtilities";

export const StyledSelectInputLabel = styled(InputLabel, shouldForwardWithout('readonly'))
    <{ readonly: boolean }>(({ theme, readonly }) => ({
        "&.MuiInputLabel-root": {
            msTransform: 'translate(14px, 10px) scale(1)',
            transform: 'translate(14px, 10px) scale(1)',
        },
        "&.MuiInputLabel-shrink": {
            transform: 'translate(14px, -9px) scale(0.75)',
        },
        "&.Mui-focused": {
            transform: 'translate(14px, -9px) scale(0.75)',
            color: readonly ? `${theme.palette.grey[500]} !important` : theme.palette.primary.main
        }
    }));