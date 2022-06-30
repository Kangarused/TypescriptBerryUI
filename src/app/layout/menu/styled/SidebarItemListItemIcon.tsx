import { ListItemIcon, styled } from "@mui/material";
import { MenuItem } from "../../../../types/menuItem";
import { shouldForwardWithout } from "../../../../utilities/styledUtilities";

export const SidebarItemListItemIcon = styled(ListItemIcon, shouldForwardWithout('item'))
    <{ item: MenuItem }>(({ theme, item }) => ({
        marginTop: 'auto',
        marginBottom: 'auto',
        minWidth: !item?.icon ? 18 : 36
    }));