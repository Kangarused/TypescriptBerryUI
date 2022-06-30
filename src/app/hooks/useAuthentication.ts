import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUserAuth, setUserAuthLoading } from "../store/slices/userAuthSlice";

export default function useAuthentication() {
    const { isLoading, error, data } = { isLoading: false, error: null, data: { name: 'Anon', email: 'anon@anon.com', roles: ['Administrator'] } } // ie. useGetAuth();
    const dispatch = useDispatch();
    useEffect(() => {
        if (!isLoading) {
            if (error == null) {
                dispatch(setUserAuth({
                    loading: false,
                    authorised: true,
                    user: data
                }));
            } else {
                dispatch(setUserAuth({
                    loading: false,
                    authorised: false,
                    user: null
                }));
            }
        } else {
            dispatch(setUserAuthLoading(isLoading));
        }
    }, [isLoading]);
    return { isLoading, error, data };
}