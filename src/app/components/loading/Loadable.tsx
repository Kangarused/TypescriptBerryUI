import { LinearProgress } from '@mui/material';
import { Suspense } from 'react';
import { LoadableContentWrapper } from './styled/LoadableContentWrapper';

const Loader = () => (
    <LoadableContentWrapper>
        <LinearProgress color="primary" />
    </LoadableContentWrapper>
);

const Loadable = (Component: React.LazyExoticComponent<() => JSX.Element>) => (props: any) =>
(
    <Suspense fallback={<Loader />}>
        <Component {...props} />
    </Suspense>
);

export default Loadable;
