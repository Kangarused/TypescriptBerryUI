import { Avatar, styled } from "@mui/material";

export const LayoutHeaderMenuAvatar = styled(Avatar)(({ theme }) => (
    {
        ...theme.typography.commonAvatar,
        ...theme.typography.mediumAvatar,
        background: theme.palette.background.content,
        color: theme.palette.primary.main,
        border: '1px solid',
        borderColor: theme.palette.divider,
        '&:hover': {
            background: theme.palette.background.contentContrast,
            color: theme.palette.primary.main
        }
    }
));