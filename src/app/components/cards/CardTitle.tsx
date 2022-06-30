import { ArrowLeftCircle } from "@emotion-icons/bootstrap";
import { IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";

type CardTitleProps = {
    title: string,
    withBackButton?: boolean,
    buttonSize?: number
}
export default function CardTitle(props: CardTitleProps) {
    const {
        title,
        withBackButton,
        buttonSize = 24
    } = props;

    // Independent hooks
    const navigate = useNavigate();

    // Methods
    const onBack = () => { navigate(-1); }
    return (
        <div className="flex flex-row items-center">
            {withBackButton && <IconButton color="primary" size="small" className="mr-2" onClick={onBack}>
                <ArrowLeftCircle width={buttonSize} />
            </IconButton>}
            <div>{title}</div>
        </div>
    );
}