import { CardHeader, styled } from "@mui/material";

export const StyledMainCardHeader = styled(CardHeader)(({ theme }) => ({
    '& .MuiCardHeader-action': { mr: 0 }
}));