import { useTheme } from '@mui/material/styles';
import { Box, useMediaQuery } from '@mui/material';
import { SidebarDrawer } from './styled/SidebarDrawer';
import SidebarMenuList from './SidebarMenuList';
import MainLayoutLogo from '../logo/MainLayoutLogo';
import { SidebarDrawerBox } from './styled/SidebarDrawerBox';

type SidebarProps = {
    drawerOpen: boolean;
    drawerToggle: () => void;
    window?: any;
}
export default function Sidebar(props: SidebarProps) {
    // Prop spreading
    const { drawerOpen, drawerToggle, window } = props;
    const container = window !== undefined ? () => window.document.body : undefined;

    // Independent hooks
    const theme = useTheme();

    // Data hooks
    const matchUpMd = useMediaQuery(theme.breakpoints.up('md'));

    return (
        <SidebarDrawerBox matchUpMd={matchUpMd} component="nav" aria-label="mailbox folders">
            <SidebarDrawer
                container={container}
                variant={matchUpMd ? 'persistent' : 'temporary'}
                anchor="left"
                open={drawerOpen}
                onClose={drawerToggle}
                ModalProps={{ keepMounted: true }}
                color="inherit"
                sx={{
                    direction: 'rtl'
                }}
            >
                <Box sx={{ display: { xs: 'block', md: 'none', direction: 'ltr' } }}>
                    <Box sx={{ display: 'flex', p: 2, mx: 'auto' }}>
                        <MainLayoutLogo />
                    </Box>
                </Box>
                <Box sx={{
                    height: matchUpMd ? 'calc(100vh - 75px)' : '100vh',
                    paddingTop: '20px',
                    paddingLeft: '16px',
                    paddingRight: '16px',
                    direction: 'ltr'
                }}>
                    <SidebarMenuList />
                </Box>
            </SidebarDrawer>
        </SidebarDrawerBox>
    );
};