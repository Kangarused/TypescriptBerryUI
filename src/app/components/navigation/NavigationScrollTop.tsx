import { MutableRefObject, ReactElement, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

type NavigationScrollProps = {
    container: MutableRefObject<HTMLElement | undefined>,
    children: ReactElement | null;
}
export default function NavigationScrollTop(props: NavigationScrollProps) {
    const location = useLocation();
    const { pathname } = location;

    useEffect(() => {
        if (props.container && props.container.current) {
            props.container.current.scrollTop = 0;
        }
    }, [pathname]);

    return props.children || null;
};
