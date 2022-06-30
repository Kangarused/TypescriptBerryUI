import { styled, Typography } from "@mui/material";

export const BreadcrumbItem = styled(Typography)(({ theme }) => ({
    display: 'flex',
    textDecoration: 'none',
    alignContent: 'center',
    alignItems: 'center',
}));