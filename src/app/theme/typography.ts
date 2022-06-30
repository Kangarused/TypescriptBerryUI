/**
 * Typography used in theme
 * @param {JsonObject} theme theme customization object
 */

import { ThemeOptions } from "@mui/material";
import { TypographyOptions } from "@mui/material/styles/createTypography";
import { CustomThemeOptions } from "../../types/customThemeOptions";

export default function themeTypography(theme: CustomThemeOptions & ThemeOptions): TypographyOptions {
    return <TypographyOptions>{
        fontFamily: theme?.layout?.fontFamily,
        h6: {
            fontWeight: 500,
            color: theme.colors.textPrimary,
            fontSize: '0.75rem'
        },
        h5: {
            fontSize: '0.875rem',
            color: theme.colors.textPrimary,
            fontWeight: 500
        },
        h4: {
            fontSize: '1rem',
            color: theme.colors.textPrimary,
            fontWeight: 600
        },
        h3: {
            fontSize: '1.25rem',
            color: theme.colors.textPrimary,
            fontWeight: 600
        },
        h2: {
            fontSize: '1.5rem',
            color: theme.colors.textPrimary,
            fontWeight: 700
        },
        h1: {
            fontSize: '2.125rem',
            color: theme.colors.textPrimary,
            fontWeight: 700
        },
        subtitle1: {
            fontSize: '0.875rem',
            fontWeight: 500,
            color: theme.colors.textDefault
        },
        subtitle2: {
            fontSize: '0.75rem',
            fontWeight: 400,
            color: theme.colors.textSecondary
        },
        caption: {
            fontSize: '0.75rem',
            color: theme.colors.textSecondary,
            fontWeight: 400
        },
        body1: {
            fontSize: '0.875rem',
            fontWeight: 400,
            lineHeight: '1.334em',
            color: theme.colors.textDefault,
        },
        body2: {
            letterSpacing: '0em',
            fontWeight: 400,
            lineHeight: '1.5em',
            color: theme.colors.textDefault
        },
        button: {
            textTransform: 'capitalize'
        },
        customInput: {
            marginTop: 1,
            marginBottom: 1,
            '& > label': {
                top: 23,
                left: 0,
                color: theme.colors.grey500,
                '&[data-shrink="false"]': {
                    top: 5
                }
            },
            '& > div > input': {
                padding: '30.5px 14px 11.5px !important'
            },
            '& legend': {
                display: 'none'
            },
            '& fieldset': {
                top: 0
            }
        },
        environmentBanner: {
            position: "fixed",
            top: '0px',
            width: '100%',
            marginTop: '75px',
            padding: '5px',
            paddingTop: '3px',
            paddingBottom: '10px',
            textAlign: 'center',
            fontWeight: '500',
            color: '#fff',
            borderRadius: `${theme?.layout?.borderRadius}px`,
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0,
        },
        mainContent: {
            position: "absolute",
            top: '0px',
            right: '20px',
            width: '100%',
            overflow: 'auto',
            backgroundColor: theme.colors.content,
            borderColor: theme.colors.contentContrast,
            borderStyle: 'solid',
            borderWidth: '1px',
            borderBottom: 'none',
            flexGrow: 1,
            borderRadius: `${theme?.layout?.borderRadius}px`,
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0,
        },
        menuCaption: {
            fontSize: '0.875rem',
            fontWeight: 600,
            color: theme.colors.textPrimary,
            padding: '6px',
            textTransform: 'capitalize',
            marginTop: '10px'
        },
        subMenuCaption: {
            fontSize: '0.6875rem',
            fontWeight: 500,
            color: theme.colors.textSecondary,
            textTransform: 'capitalize'
        },
        commonAvatar: {
            cursor: 'pointer',
            borderRadius: '8px'
        },
        smallAvatar: {
            width: '22px',
            height: '22px',
            fontSize: '1rem'
        },
        mediumAvatar: {
            width: '34px',
            height: '34px',
            fontSize: '1.2rem'
        },
        largeAvatar: {
            width: '44px',
            height: '44px',
            fontSize: '1.5rem'
        }
    };
}
