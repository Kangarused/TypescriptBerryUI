import { ListItemButton, styled } from "@mui/material";
import { LayoutState } from "../../../../types/layoutState";
import { shouldForwardWithout } from "../../../../utilities/styledUtilities";

export const SidebarItemListItemButton = styled(ListItemButton, shouldForwardWithout('layout', 'level'))
    <{ layout: LayoutState, level: number }>(({ theme, layout, level }) => ({
        borderRadius: `${layout.borderRadius}px`,
        alignItems: 'flex-start',
        marginBottom: theme.spacing(0.5),
        backgroundColor: level > 1 ? 'transparent !important' : 'inherit',
        paddingTop: level > 1 ? theme.spacing(1) : theme.spacing(1.25),
        paddingBottom: level > 1 ? theme.spacing(1) : theme.spacing(1.25),
        paddingLeft: level > 1 ? theme.spacing(2 * level) : theme.spacing(2 * level)
    }));