import { formatDate } from "../../../utilities/dateUtilities";
import { getReleaseInfo } from "../../../utilities/globalUtilities";
import { LayoutFooterBox } from "./styled/LayoutFooterBox";

export default function MainLayoutFooter() {
    const releaseInfo = getReleaseInfo();
    return (
        <LayoutFooterBox className="text-center p-4 flex flex-row flex-wrap items-center justify-center">
            <div className="pr-3">{import.meta.env.VITE_APP_TITLE}</div>
            <div className="pr-3">{import.meta.env.VITE_ENVIRONMENT}</div>
            <div className="pr-3">{releaseInfo.version}</div>
            <div>{formatDate(releaseInfo.date)}</div>
        </LayoutFooterBox>
    );
}

