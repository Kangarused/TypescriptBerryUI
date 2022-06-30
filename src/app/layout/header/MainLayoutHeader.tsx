import { useTheme } from '@mui/material/styles';
import { Box, ButtonBase, useMediaQuery } from '@mui/material';
import MainLayoutLogo from '../logo/MainLayoutLogo';
import { useSelector } from 'react-redux';
import { LayoutHeaderBox } from './styled/LayoutHeaderBox';
import { LayoutHeaderMenuAvatar } from './styled/LayoutHeaderMenuAvatar';
import Breadcrumbs from '../../components/navigation/Breadcrumbs';
import { UserAuthState } from '../../../types/userAuthState';
import { checkAccess } from '../../../utilities/accessUtilities';
import ThemeChangerButton from '../../components/buttons/ThemeChangerButton';
import UserProfileButton from '../../components/buttons/UserProfileButton';
import { Menu } from '@emotion-icons/material-rounded';

type MainLayoutHeaderProps = {
    handleLeftDrawerToggle: () => void
}
export default function MainLayoutHeader(props: MainLayoutHeaderProps) {
    // Independent hooks
    const theme = useTheme();

    // Data hooks
    const userAuth = useSelector((state: { userAuth: UserAuthState }) => state.userAuth);
    const matchUpSm = useMediaQuery(theme.breakpoints.up('sm'));

    // Data
    const hasAccess = checkAccess(userAuth);

    return (
        <>
            <LayoutHeaderBox>
                <Box component="span" sx={{ display: { xs: 'none', md: 'block' }, flexGrow: 1 }}>
                    <MainLayoutLogo />
                </Box>
                {hasAccess ? <ButtonBase sx={{ height: '40px', minWidth: '40px', borderRadius: '12px', overflow: 'hidden' }}>
                    <LayoutHeaderMenuAvatar variant="rounded" onClick={props.handleLeftDrawerToggle} color="inherit">
                        <Menu size={20} />
                    </LayoutHeaderMenuAvatar>
                </ButtonBase> : <Box sx={{ borderRadius: '12px', width: '20px' }}></Box>}
            </LayoutHeaderBox>
            <Box padding={0} sx={{ marginLeft: '20px' }}>
                {hasAccess && matchUpSm && <Breadcrumbs />}
            </Box>
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ flexGrow: 1 }} />
            {hasAccess && <UserProfileButton user={userAuth.user} />}
            <ThemeChangerButton />
        </>
    );
};