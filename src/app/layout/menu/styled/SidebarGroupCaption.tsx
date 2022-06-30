import { styled, Typography } from "@mui/material";

export const SidebarGroupCaption = styled(Typography)(({ theme }) => ({
    ...theme.typography.subMenuCaption
}));