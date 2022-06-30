/**
 * Color intention that you want to used in your theme
 * @param {JsonObject} theme Theme customization object
 */

import { PaletteOptions, ThemeOptions } from "@mui/material";
import { CustomThemeOptions } from "../../types/customThemeOptions";

export default function themePalette(theme: CustomThemeOptions & ThemeOptions): PaletteOptions {
    return {
        mode: theme?.layout?.isDarkTheme ? 'dark' : 'light',
        border: {
            radius: theme?.layout?.borderRadius
        },
        common: {
            black: theme.colors.black,
            white: theme.colors.white
        },
        default: {
            light: theme.colors.defaultLight,
            main: theme.colors.defaultMain,
            dark: theme.colors.defaultDark,
            contrastText: theme.colors.defaultContrast
        },
        primary: {
            light: theme.colors.primaryLight,
            main: theme.colors.primaryMain,
            dark: theme.colors.primaryDark,
            200: theme.colors.primary200,
            800: theme.colors.primary800
        },
        secondary: {
            light: theme.colors.secondaryLight,
            main: theme.colors.secondaryMain,
            dark: theme.colors.secondaryDark,
            200: theme.colors.secondary200,
            800: theme.colors.secondary800
        },
        error: {
            light: theme.colors.errorLight,
            main: theme.colors.errorMain,
            dark: theme.colors.errorDark,
            contrastText: theme.colors.errorContrast,
        },
        warning: {
            light: theme.colors.warningLight,
            main: theme.colors.warningMain,
            dark: theme.colors.warningDark,
            contrastText: theme.colors.warningContrast,
        },
        success: {
            light: theme.colors.successLight,
            200: theme.colors.success200,
            main: theme.colors.successMain,
            dark: theme.colors.successDark,
            contrastText: theme.colors.successContrast,
        },
        grey: {
            50: theme.colors.grey50,
            100: theme.colors.grey100,
            200: theme.colors.grey200,
            300: theme.colors.grey300,
            500: theme.colors.grey500,
            600: theme.colors.grey600,
            700: theme.colors.grey700,
            900: theme.colors.grey900,
        },
        text: {
            logo: theme.colors.textLogo,
            default: theme.colors.textDefault,
            primary: theme.colors.textPrimary,
            secondary: theme.colors.textSecondary,
            hint: theme.colors.textHint
        },
        background: {
            default: theme.colors.background,
            content: theme.colors.content,
            contentContrast: theme.colors.contentContrast,
            paper: theme.colors.paper,
            card: theme.colors.card,
            divider: theme.colors.divider,
            dividerContrast: theme.colors.dividerContrast
        },
        menu: {
            background: theme.colors.menuBackground,
            contrast: theme.colors.menuContrast
        },
        development: {
            main: theme.colors.development
        },
        test: {
            main: theme.colors.test
        }
    };
}
