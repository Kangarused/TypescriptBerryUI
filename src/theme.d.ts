import { Color } from "@mui/material";

declare module '@mui/material/styles' {
    interface TypographyVariants {
        commonAvatar: React.CSSProperties;
        mediumAvatar: React.CSSProperties;
        smallAvatar: React.CSSProperties;
        menuCaption: React.CSSProperties;
        subMenuCaption: React.CSSProperties;
    }
    interface TypographyVariantsOptions {
        commonAvatar: React.CSSProperties;
        mediumAvatar: React.CSSProperties;
        smallAvatar: React.CSSProperties;
        menuCaption: React.CSSProperties;
        subMenuCaption: React.CSSProperties;
    }

    interface Palette {
        border: Partial<TypeBorder>;
        default: Palette['default'];
        menu: Partial<TypeMenu>;
        grey: Palette['grey'];
        development: Palette['development'];
        test: Palette['test'];
    }

    interface PaletteOptions {
        border?: Partial<TypeBorder>;
        default?: PaletteOptions['default'];
        menu?: Partial<TypeMenu>;
        grey?: Palette['grey'];
        development?: Palette['development'];
        test?: Palette['test'];
    }
    interface PaletteColor extends Color {
        default?: string;
        menu?: string;
        grey?: string;
        development?: string;
        test?: string;
    }
    interface SimplePaletteColorOptions {
        default?: string;
        menu?: string;
        grey?: string;
        development?: string;
        test?: string;
    }

    interface TypeBorder {
        radius: number;
    }
    interface TypeMenu {
        background: string;
        contrast: string;
    }
    interface TypeBackground {
        background: string;
        content: string;
        contentContrast: string;
        paper: string;
        card: string;
        divider: string;
        dividerContrast: string;
    }
    interface TypeText {
        logo: string;
        default: string;
        hint: string;
    }
}

declare module '@mui/material/Typography' {
    interface TypographyPropsVariantOverrides {
        // Custom typography props go here
    }
}

declare module '@mui/material/Button' {
    interface ButtonPropsColorOverrides {
        default: true;
    }
}

declare module '@mui/material/Pagination' {
    interface PaginationPropsColorOverrides {
        default: true;
    }
}

declare module '@mui/material/CircularProgress' {
    interface CircularProgressPropsColorOverrides {
        default: true
    }
}