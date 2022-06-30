import { PropsWithChildren, useEffect } from "react";
import { shallowEqual, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router";
import { UserAuthState } from "../../../types/userAuthState";
import { checkAccess } from "../../../utilities/accessUtilities";
import { getPath } from "../../../utilities/routeUtilities";
import { MainRoutes } from "../../routes/mainRoutes";

type AuthRouteProps = PropsWithChildren<{}>
export default function AuthRoute(props: AuthRouteProps) {
    // Independent hooks
    const navigate = useNavigate();
    const location = useLocation();

    // Data hooks
    const userAuth = useSelector((state: { userAuth: UserAuthState }) => state.userAuth, shallowEqual);
    const hasAccess = checkAccess(userAuth);

    // Effects
    useEffect(() => {
        if (userAuth.loading) return;
        if (!userAuth.authorised || userAuth.user == null) {
            navigate(getPath(MainRoutes.noAccess), { replace: true, state: { from: location } });
        }
    }, [userAuth]);

    return (
        hasAccess ? <>{props.children}</> : <></>
    );
}