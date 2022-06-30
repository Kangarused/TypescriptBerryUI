import { styled } from "@mui/material";
import { shouldForwardWithout } from "../../../../utilities/styledUtilities";
import { MenuItem } from "../../../../types/menuItem";
import { FiberManualRecord } from "@emotion-icons/material";

export const SidebarItemDefaultIcon = styled(FiberManualRecord, shouldForwardWithout('selected', 'item'))
    <{ selected: boolean, item: MenuItem }>(({ theme, selected, item }) => ({
        width: selected ? 8 : 6,
        height: selected ? 8 : 6
    }));