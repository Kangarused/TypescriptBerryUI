import { PersonCircle } from "@emotion-icons/bootstrap";
import { Box, Divider, IconButton, Popover, Typography } from "@mui/material";
import { useState } from "react";
import { UserAuthDto } from "../../../types/demoTypes";

type UserProfileButtonProps = {
    user: UserAuthDto | null | undefined
}
export default function UserProfileButton(props: UserProfileButtonProps) {
    const { user } = props;
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

    const handleOpen = (event: React.MouseEvent<HTMLButtonElement>) => { setAnchorEl(event.currentTarget); };
    const handleClose = () => { setAnchorEl(null); };

    return (
        <>
            <IconButton color="primary" onClick={handleOpen}>
                <PersonCircle size={20} />
            </IconButton>
            <Popover
                id="user-profile-popover"
                open={Boolean(anchorEl)}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
            >
                <Box padding={1}>
                    <Typography color="primary" variant="h5">{user?.name}</Typography>
                    <Typography variant="subtitle2" className="italic" >{user?.email}</Typography>
                    <Divider className="m-2" sx={{
                        borderColor: (theme) => theme.palette.background.dividerContrast
                    }} />
                    <Typography variant="h6">Roles: {getUserRoles(user)}</Typography>
                </Box>
            </Popover>
        </>

    );
}

// Constants
const getUserRoles = (user: UserAuthDto | null | undefined) => {
    if (user && user.roles && user.roles.length > 0) {
        return user?.roles?.join(', ');
    }
    return 'None';
}