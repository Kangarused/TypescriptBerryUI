import { Typography } from '@mui/material';
import { useMemo } from 'react';
import { MenuItemTypes } from '../../../types/menuItem';
import SidebarGroup from './SidebarGroup';
import SidebarItem from './SidebarItem';
import menuItems from './menuItems';
import SidebarCollapse from './SidebarCollapse';

export default function SidebarMenuList() {
    const navItems = useMemo(() => generateNavItems(), []);
    return <>{navItems}</>;
};

// Pure Component Functions
const generateNavItems = () => {
    return menuItems.items.map((item) => {
        switch (item.type) {
            case MenuItemTypes.group:
                return <SidebarGroup key={item.id} item={item} />;
            case MenuItemTypes.collapse:
                return <SidebarCollapse key={item.id} menu={item} level={1} />;
            case MenuItemTypes.item:
                return <SidebarItem key={item.id} item={item} level={1} />;
            default:
                return (
                    <Typography key={item.id} variant="h6" color="error" align="center">
                        Menu Items Error
                    </Typography>
                );
        }
    });
}
