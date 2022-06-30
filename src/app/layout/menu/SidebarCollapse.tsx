import { useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { Collapse, Icon, ListItemText, Typography } from '@mui/material';
import { useLocation } from 'react-router';
import { LayoutState } from '../../../types/layoutState';
import { MenuItem, MenuItemTypes } from '../../../types/menuItem';
import SidebarItem from './SidebarItem';
import { SidebarCollapseListItemButton } from './styled/SidebarCollapseListItemButton';
import { SidebarCollapseListItemIcon } from './styled/SidebarCollapseListItemIcon';
import { SidebarCollapseList } from './styled/SidebarCollapseList';
import { SidebarCollapseListItemDefaultIcon } from './styled/SidebarCollapseListItemDefaultIcon';
import { SidebarCollapseListItemCaption } from './styled/SidebarCollapseListItemCaption';
import { KeyboardArrowDown, KeyboardArrowRight } from '@emotion-icons/material-rounded';

type SidebarCollapseProps = {
    menu: MenuItem;
    level: number;
}
export default function SidebarCollapse(props: SidebarCollapseProps) {
    // Prop spreading
    const { menu, level } = props;

    // State
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState<string | null>(null);

    // Independent hooks
    const location = useLocation();

    // Data hooks
    const layout = useSelector((state: { layout: LayoutState }) => state.layout);
    const menus = useMemo(() => generateMenus(menu, level), [menu, level]);

    // Methods
    const handleClick = () => {
        setOpen(!open);
        setSelected(!selected ? menu.id : null);
    };

    // Effects
    useEffect(() => {
        const currentIndex = document.location.pathname
            .toString()
            .split('/')
            .findIndex((id) => id == menu.id);
        if (currentIndex > -1) {
            if (!open) {
                handleClick();
            }
        }
    }, [location]);

    return (
        <>
            <SidebarCollapseListItemButton layout={layout} level={level} selected={selected === menu.id} onClick={handleClick}>
                <SidebarCollapseListItemIcon menu={menu}>{generateMenuIcon(menu, level, selected)}</SidebarCollapseListItemIcon>
                <ListItemText primary={generatePrimaryText(menu, selected)} secondary={generateSecondaryText(menu)} />
                {open && <KeyboardArrowDown size={20} />}
                {!open && <KeyboardArrowRight size={20} />}
            </SidebarCollapseListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <SidebarCollapseList component="div" disablePadding>
                    {menus}
                </SidebarCollapseList>
            </Collapse>
        </>
    );
};

// Constants
const generateMenuIcon = (menu: MenuItem, level: number, selected: string | null) => {
    const SidebarCollapseIcon = menu.icon;
    return menu.icon ? (
        <Icon>
            <SidebarCollapseIcon stroke={1.5} size={20} />
        </Icon>
    ) : (
        <Icon>
            <SidebarCollapseListItemDefaultIcon menu={menu} selected={selected} fontSize={level > 0 ? 'inherit' : 'medium'} />
        </Icon>
    )
}

const generatePrimaryText = (menu: MenuItem, selected: string | null) => {
    return (
        <Typography variant={selected === menu.id ? 'h5' : 'body1'} color="inherit" sx={{ my: 'auto' }}>
            {menu.title}
        </Typography>
    );
}

const generateSecondaryText = (menu: MenuItem) => {
    return menu.caption && (
        <SidebarCollapseListItemCaption variant="caption" display="block" gutterBottom>
            {menu.caption}
        </SidebarCollapseListItemCaption>
    )
}

const generateMenus = (menu: MenuItem, level: number) => {
    return menu.children?.map((item) => {
        switch (item.type) {
            case MenuItemTypes.collapse:
                return <SidebarCollapse key={item.id} menu={item} level={level + 1} />;
            case MenuItemTypes.item:
                return <SidebarItem key={item.id} item={item} level={level + 1} />;
            default:
                return (
                    <Typography key={item.id} variant="h6" color="error" align="center">
                        Menu Items Error
                    </Typography>
                );
        }
    });
}
