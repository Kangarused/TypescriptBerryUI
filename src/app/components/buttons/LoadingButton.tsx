import { Button, ButtonProps, CircularProgress } from "@mui/material";

type LoadingButtonProps = {
    loading: boolean
} & ButtonProps;
export default function LoadingButton(props: LoadingButtonProps) {
    const { loading, ...buttonProps } = props;
    const loadingIcon = loading ? <CircularProgress color="inherit" size={16} /> : null;
    return (
        <Button {...buttonProps} disabled={loading} startIcon={loadingIcon ?? props.startIcon}>
            {props.children}
        </Button>
    );
}