import { List, styled } from "@mui/material";

export const SidebarCollapseList = styled(List)(({ theme }) => ({
    position: 'relative',
    '& :after': {
        content: "''",
        position: 'absolute',
        left: '20px',
        top: 0,
        height: '100%',
        width: '1px',
        opacity: 1,
        background: theme.palette.background.dividerContrast
    }
})) as typeof List;