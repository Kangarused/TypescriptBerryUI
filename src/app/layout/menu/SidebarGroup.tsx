import { Divider, List, Typography } from '@mui/material';
import { MenuItem, MenuItemTypes } from '../../../types/menuItem';
import { useMemo } from 'react';
import { SidebarGroupCaption } from './styled/SidebarGroupCaption';
import { SidebarGroupLabel } from './styled/SidebarGroupLabel';
import SidebarCollapse from './SidebarCollapse';
import SidebarItem from './SidebarItem';

type SidebarGroupProps = {
    item: MenuItem;
}
export default function SidebarGroup(props: SidebarGroupProps) {
    // Prop spreading
    const { item } = props;

    // Data hooks
    const items = useMemo(() => generateItems(item), [item]);

    return (
        <>
            <List
                subheader={
                    item.title && (
                        <SidebarGroupLabel variant="caption" display="block" gutterBottom>
                            {item.title}
                            {item.caption && (
                                <SidebarGroupCaption variant="caption" display="block" gutterBottom>
                                    {item.caption}
                                </SidebarGroupCaption>
                            )}
                        </SidebarGroupLabel>
                    )
                }
            >
                {items}
            </List>
            <Divider sx={{ mt: 0.25, mb: 1.25 }} />
        </>
    );
};

// Pure Component Functions
const generateItems = (item: MenuItem) => {
    return item.children?.map((menu) => {
        switch (menu.type) {
            case MenuItemTypes.collapse:
                return <SidebarCollapse key={menu.id} menu={menu} level={1} />;
            case MenuItemTypes.item:
                return <SidebarItem key={menu.id} item={menu} level={1} />;
            default:
                return (
                    <Typography key={menu.id} variant="h6" color="error" align="center">
                        Menu Items Error
                    </Typography>
                );
        }
    });
}