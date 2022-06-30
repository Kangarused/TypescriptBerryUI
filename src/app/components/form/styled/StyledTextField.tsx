import { styled, TextField } from "@mui/material";

export const StyledTextField = styled(TextField)
    <{ InputProps: { readOnly: boolean } }>(({ theme, InputProps }) => ({
        ...(InputProps.readOnly && {
            "& fieldset": {
                border: "none",
            }
        }),
        "& .Mui-focused": {
            color: InputProps.readOnly ? `${theme.palette.grey[500]} !important` : theme.palette.primary.main
        }
    })) as typeof TextField;