import { LayoutState } from "./layoutState";

export type CustomThemeColors = {
    black: string,
    white: string,

    background: string,
    content: string,
    contentContrast: string,
    paper: string,
    card: string,
    divider: string,
    dividerContrast: string,

    textLogo: string,
    textDefault: string,
    textPrimary: string,
    textSecondary: string,
    textHint: string,

    menuContrast: string,
    menuBackground: string,

    defaultLight: string,
    defaultMain: string,
    defaultDark: string,
    defaultContrast: string,

    primaryLight: string,
    primary200: string,
    primaryMain: string,
    primaryDark: string,
    primary800: string,

    secondaryLight: string,
    secondary200: string,
    secondaryMain: string,
    secondaryDark: string,
    secondary800: string,

    successLight: string;
    success200: string;
    successMain: string;
    successDark: string;
    successContrast: string;

    errorLight: string;
    errorMain: string;
    errorDark: string;
    errorContrast: string;

    warningLight: string;
    warningMain: string;
    warningDark: string;
    warningContrast: string;

    grey50: string;
    grey100: string;
    grey200: string;
    grey300: string;
    grey500: string;
    grey600: string;
    grey700: string;
    grey900: string;

    development: string;
    test: string;
}

export type CustomThemeOptions = {
    colors: CustomThemeColors,
    layout: LayoutState
}