import { styled, Theme } from "@mui/material";
import { getReleaseInfo } from "../../../../utilities/globalUtilities";
import { shouldForwardWithout } from "../../../../utilities/styledUtilities";
import { drawerWidth } from "../../../theme/constant";

function getEnvironmentColour(theme: Theme) {
    const releaseInfo = getReleaseInfo();
    switch (releaseInfo.environment) {
        case 'Development':
            return theme.palette.development.main;
        case 'Test':
            return theme.palette.test.main;
        default:
            return theme.palette.common.white;
    }
}

export const EnvironmentBannerDiv = styled('div', shouldForwardWithout('open', 'visible', 'assistant'))
    <{ visible: boolean, open: boolean, assistant?: boolean }>(({ theme, visible, open, assistant = false }) => ({
        zIndex: 1100,
        position: "fixed",
        top: '0px',
        width: '100%',
        marginTop: '65px',
        padding: '5px',
        paddingTop: '3px',
        paddingBottom: '10px',
        textAlign: 'center',
        fontWeight: '400',
        color: theme.palette.common.white,
        borderRadius: `${theme.palette.border.radius}px`,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        borderTopRightRadius: 0,
        minHeight: '15px',
        right: 0,
        ...(visible && { backgroundColor: getEnvironmentColour(theme) }),
        ...(open && {
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen
            }),
            width: `calc(100% - ${drawerWidth}px)`,
            [theme.breakpoints.down('md')]: {
                borderRadius: 0,
                width: '100%'
            }
        }),
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
                width: `100%`,
            }
        })
    }));