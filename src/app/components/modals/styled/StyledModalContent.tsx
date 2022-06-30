import { Box, styled } from "@mui/material";

export const StyledModalContent = styled(Box)(({ theme }) => ({
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    minWidth: 200,
    backgroundColor: theme.palette.background.card,
    border: '2px solid',
    borderColor: theme.palette.background.dividerContrast,
    borderRadius: '10px',
    padding: theme.spacing(2)
}));