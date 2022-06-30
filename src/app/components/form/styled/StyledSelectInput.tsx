import { Select, styled } from "@mui/material";

export const StyledSelectInput = styled(Select)
    <{ readOnly: boolean }>(({ theme, readOnly }) => ({
        "& .MuiSelect-select": {
            cursor: readOnly ? 'text' : 'pointer',
            userSelect: 'all'
        },
        "& .MuiSelect-icon": {
            display: readOnly ? 'none' : 'block'
        },
        "& fieldset": {
            border: readOnly ? "none" : "1px solid"
        }
    }));