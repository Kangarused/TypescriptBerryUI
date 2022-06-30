import { Popover, Typography, Button, Grid, CircularProgress } from "@mui/material";
import { cloneElement, ReactElement, ReactNode, useState } from "react";
import { StyledPopoverContent } from "./styled/StyledPopoverContent";

type ConfirmPopoverProps = {
    children: ReactElement,
    title: ReactNode,
    content: ReactNode,
    action: () => Promise<void>
}
export default function ConfirmPopover(props: ConfirmPopoverProps) {
    const { title, content, action } = props;

    const [busy, setBusy] = useState(false);
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

    const handleOpen = (event: React.MouseEvent<HTMLButtonElement>) => { setAnchorEl(event.currentTarget); };
    const handleClose = () => { setAnchorEl(null); };
    const handleAction = () => {
        setBusy(true);
        return action().then(() => {
            handleClose();
        }).finally(() => {
            setBusy(false)
        });
    }

    const loadingIcon = busy ? <CircularProgress color="inherit" size={16} /> : null;

    return (
        <>
            {cloneElement(props.children, { onClick: handleOpen })}
            <Popover
                id="confirm-popover"
                open={Boolean(anchorEl)}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
            >
                <StyledPopoverContent>
                    <Typography variant="h3" gutterBottom>{title}</Typography>
                    <Typography variant="body1" gutterBottom>{content}</Typography>
                    <Grid className="pt-4" container spacing={1} columns={2}>
                        <Grid item xs={1}>
                            <Button fullWidth color="default" variant="outlined" onClick={handleClose} disabled={busy}>Cancel</Button>
                        </Grid>
                        <Grid item xs={1}>
                            <Button fullWidth color="primary" variant="outlined" onClick={handleAction} disabled={busy} startIcon={loadingIcon}>
                                Confirm
                            </Button>
                        </Grid>
                    </Grid>
                </StyledPopoverContent>
            </Popover>
        </>
    );
}