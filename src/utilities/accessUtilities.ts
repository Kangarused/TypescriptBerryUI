import { UserAuthState } from "../types/userAuthState";

export function checkAccess(state: UserAuthState) {
    return state != null && !state.loading && state.authorised && state.user != null;
}