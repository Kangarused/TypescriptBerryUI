import { Link as RouteLink } from 'react-router-dom';
import { Grid } from '@mui/material';
import useBreadcrumbs, { BreadcrumbData } from 'use-react-router-breadcrumbs';
import { routes } from '../../routes/routes';
import { useMemo } from 'react';
import { BreadcrumbLink } from './styled/BreadcrumbLink';
import { BreadcrumbItem } from './styled/BreadcrumbItem';
import { StyledBreadcrumbs } from './styled/StyledBreadcrumbs';
import { KeyboardArrowRight } from '@emotion-icons/material-rounded';

type BreadcrumbsProps = {
    maxItems?: number;
}
export default function Breadcrumbs(props: BreadcrumbsProps) {
    // Prop spreading
    const { maxItems } = props;

    // Independent hooks
    const breadcrumbData = useBreadcrumbs(routes);

    // Data hooks
    const breadcrumbs = useMemo(() => generateBreadcrumbs(breadcrumbData), [breadcrumbData])

    // Render
    if (breadcrumbData.length > 1) {
        return (
            <Grid container direction="column" justifyContent="flex-start" alignItems="flex-start" spacing={1}>
                <Grid item>
                    <StyledBreadcrumbs
                        aria-label="breadcrumb"
                        maxItems={maxItems || 8}
                        separator={<KeyboardArrowRight size={20} />}
                    >
                        {breadcrumbs}
                    </StyledBreadcrumbs>
                </Grid>
            </Grid>
        );
    }
    return null;
};

// Pure Component Functions
const generateLink = (data: BreadcrumbData<string>) => {
    return (
        <BreadcrumbLink variant="subtitle1" component={RouteLink} key={data.key} to={data.match.pathname} underline="hover">
            {data.breadcrumb}
        </BreadcrumbLink>
    );
}
const generateItem = (data: BreadcrumbData<string>) => {
    return (
        <BreadcrumbItem key={data.key} variant="subtitle1">
            {data.breadcrumb}
        </BreadcrumbItem>
    );
}

const generateBreadcrumbs = (breadcrumbs: BreadcrumbData<string>[]) => {
    return breadcrumbs.map((breadcrumb, index) => (
        index !== breadcrumbs.length - 1 ? generateLink(breadcrumb) : generateItem(breadcrumb)
    ))
}