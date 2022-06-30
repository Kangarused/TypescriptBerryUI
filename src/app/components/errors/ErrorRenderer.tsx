import { HeartPulse } from "@emotion-icons/fluentui-system-filled";
import { Box, Typography } from "@mui/material";
import { AxiosError } from "axios";

type ErrorRendererProps = {
    error: AxiosError | null;
}
export default function ErrorRenderer(props: ErrorRendererProps) {
    if (props.error != null) {
        return (
            <Box className="w-full h-full flex flex-col items-center">
                <Box className="text-center">
                    <HeartPulse size={90} />
                    <Typography variant="h4" className="mb-2">Something went wrong</Typography>
                    <Typography variant="subtitle2">{props.error.message}</Typography>
                </Box>
            </Box>
        )
    }
    return null;
}