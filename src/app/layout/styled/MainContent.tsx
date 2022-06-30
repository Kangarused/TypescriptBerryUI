import { styled } from "@mui/material";
import { shouldForwardWithout } from "../../../utilities/styledUtilities";
import { drawerWidth } from "../../theme/constant";

export const MainContent = styled('main', shouldForwardWithout('open', 'withEnv', 'theme'))
    <{ open: boolean, withEnv: boolean }>(({ theme, open, withEnv }) => ({
        // Base styles
        zIndex: 1101,
        position: "fixed",
        top: 0,
        right: 0,
        width: '100%',
        overflow: 'auto',
        overflowY: 'auto',
        backgroundColor: theme.palette.background.background,
        flexGrow: 1,
        borderRadius: `${theme.palette.border.radius}px`,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        borderTopRightRadius: 0,
        // With environment banner
        ...(withEnv && {
            marginTop: '88px',
            height: 'calc(100vh - 88px)',
        }),
        // No environment banner 
        ...(!withEnv && {
            marginTop: '65px',
            height: 'calc(100vh - 65px)',
        }),
        // Sidebar open
        ...(open && {
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen
            }),
            marginLeft: '0',
            width: `calc(100% - ${drawerWidth}px)`,
            [theme.breakpoints.down('md')]: {
                borderRadius: 0,
                width: '100%',
                right: '0px'
            }
        }),
        // Sidebar closed
        ...(!open && {
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen
            }),
            [theme.breakpoints.up('md')]: {
                width: `calc(100% - 12px)`,
            },
            [theme.breakpoints.down('md')]: {
                borderRadius: 0,
                width: '100%',
                right: '0px'
            }
        }),
    }));