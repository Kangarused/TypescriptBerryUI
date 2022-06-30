import { PropsWithChildren, useEffect, useState } from "react";
import { usePageLoaded } from "../../hooks/usePageLoaded";

type PageProps = PropsWithChildren<{
    loadingState?: boolean[];
}>;
export default function Page(props: PageProps) {
    const [opacity, setOpacity] = useState(0);
    usePageLoaded(props.loadingState ?? [false]);
    useEffect(() => {
        setOpacity(100);
    }, []);
    return (
        <div className={`h-full w-full ease-in transition-opacity duration-300 opacity-${opacity}`}>
            {props.children}
        </div>
    );
}