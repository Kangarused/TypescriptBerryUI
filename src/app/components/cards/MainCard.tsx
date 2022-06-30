import { forwardRef, ReactNode } from 'react';
import { SxProps } from '@mui/material/styles';
import { CardContent, Divider } from '@mui/material';
import { StyledMainCard } from './styled/StyledMainCard';
import { StyledMainCardHeader } from './styled/StyledMainCardHeader';

export type MainCardProps = {
    hoverShadow?: boolean;
    children?: ReactNode;
    content?: boolean;
    contentClass?: string;
    contentSX?: any,
    secondary?: ReactNode,
    shadow?: string;
    sx?: SxProps;
    title?: ReactNode;
}
const MainCard = forwardRef<HTMLDivElement, MainCardProps>((props, ref) => {
    // Prop spreading
    const {
        hoverShadow = false,
        children,
        content = true,
        contentClass = '',
        contentSX = {},
        secondary,
        shadow,
        sx = {},
        title,
        ...others
    } = props;

    return (
        <StyledMainCard ref={ref} hoverShadow={hoverShadow} sx={sx} {...others}>
            {title && <StyledMainCardHeader title={title} action={secondary} />}
            {title && <Divider />}
            {content && (
                <CardContent sx={contentSX} className={contentClass}>
                    {children}
                </CardContent>
            )}
            {!content && children}
        </StyledMainCard>
    );
});

export default MainCard;