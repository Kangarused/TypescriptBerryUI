import { useEffect } from "react";
import MainCard from "../../components/cards/MainCard";
import Page from "../../components/page/Page";

export default function Dashboard() {
    // Data
    let loadingState = [false];

    // Effects
    useEffect(() => {
        setTimeout(() => {
            loadingState = [true];
        }, 500);
    });

    return (
        <Page loadingState={loadingState}>
            <MainCard title="Dashboard">
                <p>
                    This project is based on the awesome Berry UI free template built with React and Material UI. I have manually converted the entire project to typescript and also taken the time to reverse engineer the unfinished theming that was present in the free template.
                </p>
                <p>
                    Currently the Berry UI free template is more of a demo application, the intention of this project is to turn it back into a template that dev teams can run with immediately.
                </p>
                <p>
                    If you find this template helpful at all please star it and help spread the word!
                </p>
            </MainCard>
        </Page>
    );
}

/* 
    A loading screen is displayed while the page is loading, the above timeout is to provide an example of how this works.
    You can use this by passing in an array of booleans to indicate the full loading state 
    For example, if you are using Redux Query, you would call all your data hooks and then pass the loading props into the loadingState array which gets passed to the page
    when all loading props resolve to 'true' then the loading screen will be hidden
*/