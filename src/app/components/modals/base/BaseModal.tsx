import { Button, Modal, Stack, Typography } from "@mui/material";
import { cloneElement, ReactElement, ReactNode, useState } from "react";
import { StyledModalContent } from "../styled/StyledModalContent";

type BaseModalProps = {
    children: ReactElement,
    title: ReactNode,
    content: ReactNode,
    action?: () => Promise<void>,
    renderActions?: (busy: boolean, handleClose: () => void, handleAction: () => void) => ReactNode
}
export default function BaseModal(props: BaseModalProps) {
    const { title, content, action, renderActions } = props;

    const [open, setOpen] = useState(false);
    const [busy, setBusy] = useState(false);

    const handleOpen = () => { setOpen(true); }
    const handleClose = () => { setOpen(false); }
    const handleAction = () => {
        if (action == null) { return; }
        setBusy(true);
        return action().then(() => {
            handleClose();
        }).finally(() => {
            setBusy(false)
        });
    }

    const defaultActions = (
        <Stack className="text-right pt-4" direction="row-reverse" spacing={1}>
            <Button color="default" variant="outlined" onClick={handleClose}>Cancel</Button>
        </Stack>
    );

    return (
        <>
            {cloneElement(props.children, { onClick: handleOpen })}
            <Modal open={open} onClose={handleClose}>
                <StyledModalContent>
                    <Typography variant="h3" gutterBottom>{title}</Typography>
                    <div>{content}</div>
                    {renderActions != null ? renderActions(busy, handleClose, handleAction) : defaultActions}
                </StyledModalContent>
            </Modal>
        </>
    );
}
