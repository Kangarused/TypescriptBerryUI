import { styled, Typography } from "@mui/material";

export const SidebarCollapseListItemCaption = styled(Typography)(({ theme }) => ({
    ...theme.typography.subMenuCaption
}));