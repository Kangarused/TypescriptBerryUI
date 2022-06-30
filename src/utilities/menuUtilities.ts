import { MenuItem, MenuItemTypes } from "../types/menuItem";
import { toTitleCase } from "./stringUtilities";

const newMenuElement = (options: Partial<MenuItem>, defaultType: MenuItemTypes): MenuItem => {
    const id = options.id ?? 'ERROR';
    const title = options.title ?? (options.id != null ? toTitleCase(options.id) : 'ERROR');
    const type = options.type ?? (defaultType ?? MenuItemTypes.group);
    return {
        ...options,
        id,
        title,
        type
    }
}
export const newGroupItem = (options: Partial<MenuItem>): MenuItem => newMenuElement(options, MenuItemTypes.group);
export const newCollapseItem = (options: Partial<MenuItem>): MenuItem => newMenuElement(options, MenuItemTypes.collapse);