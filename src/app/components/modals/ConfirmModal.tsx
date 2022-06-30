import { Stack, Button } from "@mui/material";
import { ReactElement, ReactNode } from "react";
import LoadingButton from "../buttons/LoadingButton";
import BaseModal from "./base/BaseModal";

type ConfirmModalProps = {
    children: ReactElement,
    title: ReactNode,
    content: ReactNode,
    action: () => Promise<void>
}
export default function ConfirmModal(props: ConfirmModalProps) {
    const { title, content, action } = props;
    return (
        <BaseModal title={title} content={content} action={action} renderActions={(busy, handleClose, handleAction) => (
            <Stack className="text-right pt-4" direction="row-reverse" spacing={1}>
                <LoadingButton fullWidth color="primary" variant="outlined" onClick={handleAction} loading={busy}>
                    Confirm
                </LoadingButton>
                <Button color="default" variant="outlined" onClick={handleClose}>Cancel</Button>
            </Stack>
        )}>
            {props.children}
        </BaseModal>
    );
}
