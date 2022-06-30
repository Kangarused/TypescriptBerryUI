import { Brightness4, Brightness5 } from "@emotion-icons/material";
import { IconButton } from "@mui/material";
import { ReactNode } from "react";
import useThemeChanger from "../../hooks/useThemeChanger";

type ThemeChangerButtonProps = {
    lightThemeIcon?: ReactNode,
    darkThemeIcon?: ReactNode,
}
export default function ThemeChangerButton(props: ThemeChangerButtonProps) {
    // Prop spreading
    const { lightThemeIcon, darkThemeIcon } = props;

    // Data hooks
    const { isDarkTheme, changeTheme } = useThemeChanger();

    return (
        <div className="pl-4">
            {!isDarkTheme &&
                <IconButton color="primary" onClick={changeTheme}>
                    {lightThemeIcon ?? <Brightness5 size={22} />}
                </IconButton>
            }
            {isDarkTheme &&
                <IconButton color="primary" onClick={changeTheme}>
                    {darkThemeIcon ?? <Brightness4 size={22} />}
                </IconButton>
            }
        </div>
    );
}