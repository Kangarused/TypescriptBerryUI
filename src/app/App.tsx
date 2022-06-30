import { CssBaseline, StyledEngineProvider, ThemeProvider } from "@mui/material";
import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { usePageLoaded } from "./hooks/usePageLoaded";
import { LayoutState } from "../types/layoutState";
import AppRoutes from "./routes/routes";
import theme from "./theme/theme";
import useAuthentication from "./hooks/useAuthentication";
import { setDarkThemeState } from "./store/slices/layoutSlice";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

export default function App() {
    const dispatch = useDispatch();
    const { doneLoading } = usePageLoaded();
    const { isLoading: authLoading } = useAuthentication();
    const layout = useSelector((state: { layout: LayoutState }) => state.layout);
    const appTheme = useMemo(() => theme(layout), [layout.isDarkTheme]);

    // Use memo, memorises the output of the function and only recalculates it when the dependencies change (ie. doneLoading changes)
    useMemo(() => {
        if (doneLoading && !authLoading) {
            var loader = document!.getElementById('loader')!;
            if (!loader.classList.contains("fadeout")) {
                loader.classList.add('fadeout');
            }
        }
    }, [doneLoading, authLoading]);

    useEffect(() => {
        let theme = localStorage.getItem("theme");
        if (theme === 'dark') {
            dispatch(setDarkThemeState(true));
        }
    }, []);

    return (
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={appTheme}>
                <CssBaseline />
                <ToastContainer theme="colored" />
                {authLoading ? <></> : <AppRoutes />}
            </ThemeProvider>
        </StyledEngineProvider>
    )
}