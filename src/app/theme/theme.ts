import { createTheme } from '@mui/material/styles';

// assets
import lightTheme from '../../assets/scss/light.module.scss';
import darkTheme from '../../assets/scss/dark.module.scss';
import { CustomThemeOptions } from '../../types/customThemeOptions';
import { LayoutState } from '../../types/layoutState';
import componentStyleOverrides from './compStyleOverride';
import themePalette from './palette';
import themeTypography from './typography';

/**
 * Represent theme style and structure as per Material-UI
 * @param {JsonObject} customisation customisation parameter object
 */

export const theme = (layout: LayoutState) => {
    const themeColours = layout.isDarkTheme ? darkTheme : lightTheme;
    let themeOption: CustomThemeOptions = {
        colors: { ...themeColours } as any,
        layout
    };

    const themes = createTheme({
        direction: 'ltr',
        palette: themePalette(themeOption),
        mixins: {
            toolbar: {
                minHeight: '48px',
                padding: '16px',
                '@media (min-width: 600px)': {
                    minHeight: '48px'
                }
            }
        },
        typography: themeTypography(themeOption),
        components: componentStyleOverrides(themeOption)
    });

    return themes;
};

export default theme;
