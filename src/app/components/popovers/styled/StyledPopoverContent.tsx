import { Box, styled } from "@mui/material";

export const StyledPopoverContent = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
    border: '2px solid',
    borderColor: theme.palette.background.contentContrast,
    borderRadius: '10px',
    padding: theme.spacing(2)
}));