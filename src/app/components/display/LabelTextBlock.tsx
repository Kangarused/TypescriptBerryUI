import { Typography } from "@mui/material";
import { PropsWithChildren } from "react";

type LabelTextBlockProps = PropsWithChildren<{
    label: string
}>
export default function LabelTextBlock(props: LabelTextBlockProps) {
    const { label } = props;
    return (
        <>
            <Typography variant="h5" fontWeight={600} gutterBottom>{label}</Typography>
            <div>{props.children}</div>
        </>
    );
} 