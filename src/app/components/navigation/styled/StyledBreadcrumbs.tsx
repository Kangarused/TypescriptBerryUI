import { Breadcrumbs, styled } from "@mui/material";

export const StyledBreadcrumbs = styled(Breadcrumbs)(({ theme }) => ({
    '& .MuiBreadcrumbs-separator': {
        width: 20,
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1)
    }
}));