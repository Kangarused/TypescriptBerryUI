import { Card, styled } from "@mui/material";
import { shouldForwardWithout } from "../../../../utilities/styledUtilities";

export const StyledMainCard = styled(Card, shouldForwardWithout('hoverShadow'))
    <{ hoverShadow: boolean }>(({ theme, hoverShadow }) => ({
        border: '1px solid',
        borderColor: theme.palette.background.default,
        ':hover': {
            boxShadow: hoverShadow ? '0 2px 14px 0 rgb(32 40 45 / 8%)' : 'inherit'
        },
        [theme.breakpoints.down("md")]: {
            '& .MuiCardHeader-root': {
                padding: '15px',
                paddingLeft: '12px'
            },
            '& .MuiCardContent-root': {
                padding: '10px'
            }
        }
    }))