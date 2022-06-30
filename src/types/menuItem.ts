export type MenuItem = {
    id: string;
    title: string;
    caption?: string;
    icon?: any;
    type: string;
    children?: MenuItem[];
    url?: string;
    target?: boolean;
    external?: boolean;
    disabled?: boolean;
    breadcrumbs?: boolean;
}

export enum MenuItemTypes {
    group = 'group',
    collapse = 'collapse',
    item = 'item'
};