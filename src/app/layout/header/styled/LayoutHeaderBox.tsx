import { Box, styled } from "@mui/material";

export const LayoutHeaderBox = styled(Box)(({ theme }) => (
    {
        width: 228,
        display: 'flex',
        [theme.breakpoints.down('md')]: {
            width: 'auto'
        }
    }
));

