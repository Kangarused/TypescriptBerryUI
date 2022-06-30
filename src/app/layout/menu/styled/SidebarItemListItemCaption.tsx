import { styled, Typography } from "@mui/material";

export const SidebarItemListItemCaption = styled(Typography)(({ theme }) => ({
    ...theme.typography.subMenuCaption
}));