import { useMediaQuery, Box, AppBar, Toolbar, useTheme } from "@mui/material";
import { useEffect, useMemo, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import { setMenu } from "../store/slices/layoutSlice";
import { LayoutState } from "../../types/layoutState";
import { UserAuthState } from "../../types/userAuthState";
import { checkAccess } from "../../utilities/accessUtilities";
import { MainContent } from "./styled/MainContent";
import EnvironmentBanner from "./header/EnvironmentBanner";
import MainLayoutHeader from "./header/MainLayoutHeader";
import Sidebar from "./menu/Sidebar";
import MainLayoutFooter from "./footer/MainLayoutFooter";
import NavigationScrollTop from "../components/navigation/NavigationScrollTop";
import { getReleaseInfo } from "../../utilities/globalUtilities";

export default function MainLayout() {
    // Independent hooks
    const scrollBarRef = useRef<HTMLElement>();
    const theme = useTheme();
    const dispatch = useDispatch();

    // Data hooks
    const matchDownLg = useMediaQuery(theme.breakpoints.down('lg'));
    const leftDrawerOpened = useSelector((state: { layout: LayoutState }) => state.layout.drawerOpen);
    const userAuth = useSelector((state: { userAuth: UserAuthState }) => state.userAuth);
    const hasAccess = useMemo(() => checkAccess(userAuth), [userAuth]);

    // Methods
    const showEnvironment = getReleaseInfo()?.showEnvironment ?? false;
    const handleLeftDrawerToggle = () => dispatch(setMenu(!leftDrawerOpened));

    // Effects
    useEffect(() => {
        dispatch(setMenu(!matchDownLg));
    }, [matchDownLg]);

    return (
        <Box sx={{ display: 'flex' }}>
            <AppBar
                enableColorOnDark
                position="fixed"
                color="inherit"
                elevation={0}
                sx={{
                    maxHeight: '65px',
                    bgcolor: theme.palette.background.default,
                    transition: (leftDrawerOpened && hasAccess) ? theme.transitions.create('width') : 'none'
                }}
            >
                <Toolbar>
                    <MainLayoutHeader handleLeftDrawerToggle={handleLeftDrawerToggle} />
                </Toolbar>
            </AppBar>
            <Sidebar drawerOpen={leftDrawerOpened && hasAccess} drawerToggle={handleLeftDrawerToggle} />
            <EnvironmentBanner visible={showEnvironment} drawerOpen={leftDrawerOpened && hasAccess} />
            <MainContent theme={theme} open={leftDrawerOpened && hasAccess} withEnv={showEnvironment}>
                <NavigationScrollTop container={scrollBarRef!}>
                    <Box className="min-h-full flex flex-col justify-between" sx={{ backgroundColor: (theme) => theme.palette.background.content, padding: '20px' }}>
                        <div className="min-h-full">
                            <Outlet />
                        </div>
                        <MainLayoutFooter></MainLayoutFooter>
                    </Box>
                </NavigationScrollTop>
            </MainContent>
        </Box>
    );
};