import { styled } from "@mui/material";
import { shouldForwardWithout } from "../../../../utilities/styledUtilities";
import { MenuItem } from "../../../../types/menuItem";
import { FiberManualRecord } from "@emotion-icons/material";

export const SidebarCollapseListItemDefaultIcon = styled(FiberManualRecord, shouldForwardWithout('menu', 'selected'))
    <{ menu: MenuItem, selected: string | null }>(({ theme, menu, selected }) => ({
        width: selected === menu.id ? 8 : 6,
        height: selected === menu.id ? 8 : 6
    }));