import { useDispatch, useSelector } from "react-redux";
import { setDarkThemeState } from "../store/slices/layoutSlice";
import { LayoutState } from "../../types/layoutState";

export default function useThemeChanger() {
    const dispatch = useDispatch();
    const isDarkTheme = useSelector((state: { layout: LayoutState }) => state.layout.isDarkTheme);

    const changeTheme = () => {
        let currentTheme = document.documentElement.getAttribute('data-theme') ?? 'light';
        let newTheme = 'dark';
        if (currentTheme === 'dark') {
            newTheme = 'light';
            dispatch(setDarkThemeState(false));
        } else {
            dispatch(setDarkThemeState(true));
        }
        document.documentElement.classList.remove(currentTheme);
        localStorage.setItem("theme", newTheme);
        document.documentElement.setAttribute("data-theme", newTheme);
        document.documentElement.classList.add(newTheme);
    }
    return { isDarkTheme, changeTheme };
}