import { getReleaseInfo } from "../../../utilities/globalUtilities";
import { EnvironmentBannerDiv } from "./styled/EnvironmentBannerDiv";

type EnvironmentBannerProps = {
    drawerOpen: boolean;
    visible: boolean;
}
export default function EnvironmentBanner(props: EnvironmentBannerProps) {
    const environment = getReleaseInfo()?.environment ?? 'Unknown';
    return (
        <>
            <EnvironmentBannerDiv visible={props.visible} open={props.drawerOpen}>
                {props.visible && `${environment} Environment`}
            </EnvironmentBannerDiv>
        </>
    );
}