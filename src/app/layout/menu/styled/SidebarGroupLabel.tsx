import { styled, Typography } from "@mui/material";

export const SidebarGroupLabel = styled(Typography)(({ theme }) => ({
    ...theme.typography.menuCaption
}));