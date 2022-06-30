import { forwardRef, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useTheme } from '@mui/material/styles';
import { Icon, ListItemText, Typography, useMediaQuery } from '@mui/material';
import { LayoutState } from '../../../types/layoutState';
import { MenuItem } from '../../../types/menuItem';
import { setMenu } from '../../store/slices/layoutSlice';
import { SidebarItemListItemButton } from './styled/SidebarItemListItemButton';
import { SidebarItemDefaultIcon } from './styled/SidebarItemDefaultIcon';
import { SidebarItemListItemCaption } from './styled/SidebarItemListItemCaption';
import { SidebarItemListItemIcon } from './styled/SidebarItemListItemIcon';

type SidebarItemProps = {
    item: MenuItem;
    level: number;
}
export default function SidebarItem(props: SidebarItemProps) {
    // Prop spreading
    const { item, level } = props;

    // State
    const [selected, setSelected] = useState(false);

    // Independent hooks
    const theme = useTheme();
    const dispatch = useDispatch();
    const location = useLocation();

    // Data hooks
    const layout = useSelector((state: { layout: LayoutState }) => state.layout);
    const matchesSM = useMediaQuery(theme.breakpoints.down('lg'));

    // Actions
    let itemTarget = '_self';
    if (item.target) {
        itemTarget = '_blank';
    }

    let listItemProps: any = { component: forwardRef<HTMLAnchorElement, any>((props, ref) => <Link ref={ref} {...props} to={item.url} target={itemTarget} />) };
    if (item?.external) {
        listItemProps = { component: 'a', href: item.url, target: itemTarget };
    }

    // Methods
    const itemHandler = (id: string) => {
        if (matchesSM) {
            dispatch(setMenu(false));
        }
    };

    // Effects
    useEffect(() => {
        const urlContainsMatch = item.url != null && item.url.length > 1 && location.pathname.indexOf(item.url) > -1;
        const urlIsExactMatch = item.url == location.pathname;
        if (urlContainsMatch || urlIsExactMatch) {
            setSelected(true);
        } else {
            setSelected(false);
        }
    }, [location]);

    return (
        <SidebarItemListItemButton
            disableTouchRipple
            {...listItemProps}
            layout={layout}
            item={item}
            level={level}
            disabled={item.disabled}
            selected={selected}
            onClick={() => itemHandler(item.id)}
        >
            <SidebarItemListItemIcon item={item}>{generateItemIcon(item, level, selected)}</SidebarItemListItemIcon>
            <ListItemText primary={generatePrimaryText(item, selected)} secondary={generateSecondaryText(item)} />
        </SidebarItemListItemButton>
    );
};

// Pure Component Functions
const generateItemIcon = (item: MenuItem, level: number, selected: boolean) => {
    const SidebarItemIcon = item.icon;
    return item?.icon ? (
        <Icon>
            <SidebarItemIcon stroke={1.5} size={20} />
        </Icon>
    ) : (
        <Icon>
            <SidebarItemDefaultIcon selected={selected} item={item} fontSize={level > 0 ? 'inherit' : 'medium'} />
        </Icon>
    );
}

const generatePrimaryText = (item: MenuItem, selected: boolean) => {
    return (
        <Typography variant={selected ? 'h5' : 'body1'} color="inherit">
            {item.title}
        </Typography>
    );
}

const generateSecondaryText = (item: MenuItem) => {
    return item.caption && (
        <SidebarItemListItemCaption variant="caption" display="block" gutterBottom>
            {item.caption}
        </SidebarItemListItemCaption>
    );
}