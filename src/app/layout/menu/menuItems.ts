import { AdministrationRoutes } from "../../routes/administrationRoutes";
import { routeToMenuItem } from "../../../utilities/routeUtilities";
import { MainRoutes } from "../../routes/mainRoutes";
import { newGroupItem } from "../../../utilities/menuUtilities";
import { Fingerprint, Gear, ListOl, Speedometer2 } from "@emotion-icons/bootstrap";
import { People } from "@emotion-icons/fluentui-system-regular";

// Menu Items should only use Tabler Icons: https://tablericons.com/
const menuItems = {
    items: [
        newGroupItem({
            id: 'Dashboard',
            children: [
                routeToMenuItem(MainRoutes.dashboard, { id: 'home', title: 'Home', icon: Speedometer2 }),
            ]
        }),
        newGroupItem({
            id: 'administration',
            children: [
                routeToMenuItem(AdministrationRoutes.userSearch, { icon: People }),
                routeToMenuItem(AdministrationRoutes.codesSearch, { url: 'noCodes', icon: ListOl }),
                routeToMenuItem(AdministrationRoutes.systemConfiguration, { url: 'noSystemConfig', icon: Gear }),
                routeToMenuItem(AdministrationRoutes.auditLogSearch, { icon: Fingerprint }),
            ]
        }),
    ]
};

export default menuItems;