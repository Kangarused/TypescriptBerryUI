import { Box, styled } from "@mui/material";
import { shouldForwardWithout } from "../../../../utilities/styledUtilities";
import { drawerWidth } from "../../../theme/constant";

export const SidebarDrawerBox = styled(Box, shouldForwardWithout('matchUpMd'))
    <{ matchUpMd: boolean }>(({ theme, matchUpMd }) => ({
        backgroundColor: theme.palette.background.default,
        width: matchUpMd ? drawerWidth : 'auto',
        ...(matchUpMd && ({
            flexShrink: 0
        }))
    }));