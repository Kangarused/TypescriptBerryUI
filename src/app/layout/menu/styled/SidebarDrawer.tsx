import { Drawer, styled } from "@mui/material";
import { drawerWidth } from "../../../theme/constant";

export const SidebarDrawer = styled(Drawer)(({ theme }) => ({
    '& .MuiDrawer-paper': {
        width: drawerWidth,
        background: theme.palette.background.default,
        color: theme.palette.text.primary,
        borderRightColor: theme.palette.background.default,
        borderRightWidth: 5,
        [theme.breakpoints.up('md')]: {
            top: '65px',
            height: 'calc(100vh - 65px)'
        }
    }
}));