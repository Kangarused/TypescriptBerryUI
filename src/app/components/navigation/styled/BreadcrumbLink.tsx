import { Link, styled } from "@mui/material";

export const BreadcrumbLink = styled(Link)(({ theme }) => ({
    display: 'flex',
    alignContent: 'center',
    alignItems: 'center',
    color: theme.palette.text.primary
})) as typeof Link;