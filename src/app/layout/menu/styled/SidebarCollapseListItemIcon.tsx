import { ListItemIcon, styled } from "@mui/material";
import { MenuItem } from "../../../../types/menuItem";
import { shouldForwardWithout } from "../../../../utilities/styledUtilities";

export const SidebarCollapseListItemIcon = styled(ListItemIcon, shouldForwardWithout('menu'))
    <{ menu: MenuItem }>(({ theme, menu }) => ({
        marginTop: 'auto',
        marginBottom: 'auto',
        minWidth: !menu.icon ? 18 : 36
    }));