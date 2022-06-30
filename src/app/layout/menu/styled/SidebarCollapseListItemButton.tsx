import { ListItemButton, styled } from "@mui/material";
import { LayoutState } from "../../../../types/layoutState";
import { shouldForwardWithout } from "../../../../utilities/styledUtilities";

export const SidebarCollapseListItemButton = styled(ListItemButton, shouldForwardWithout('layout', 'level'))
    <{ layout: LayoutState, level: number }>(({ theme, layout, level }) => ({
        color: theme.palette.text.primary,
        backgroundColor: level > 1 ? 'transparent !important' : 'inherit',
        borderRadius: `${layout.borderRadius}px`,
        marginBottom: theme.spacing(0.5),
        alignItems: 'flex-start',
        paddingTop: level > 1 ? theme.spacing(1) : theme.spacing(1.25),
        paddingBottom: level > 1 ? theme.spacing(1) : theme.spacing(1.25),
        paddingLeft: level > 1 ? theme.spacing(2 * level) : theme.spacing(1 * level),
        '&.Mui-selected': {
            color: theme.palette.text.primary,
            backgroundColor: 'transparent',
            '& .MuiListItemIcon-root': {
                color: theme.palette.text.primary
            },
        },
        ':hover': {
            color: theme.palette.menu.contrast,
            '& .MuiListItemIcon-root': {
                color: theme.palette.menu.contrast
            }
        }
    }));