import { ReleaseInfoData } from "../vite-env";

// ReleaseInfo is a global variable that should be injected into the HTML during the deployment process, this way you can specify the version based on a deployment version and the date that it was deployed
// This utility will return the ReleaseInfo if it exists, otherwise it will return the defaultData
export const getReleaseInfo = () => {
    const defaultData: ReleaseInfoData = {
        version: '0.0.0.0',
        date: new Date(),
        environment: 'Development',
        showEnvironment: true
    }
    if (typeof ReleaseInfo !== 'undefined') {
        return ReleaseInfo;
    }
    return defaultData;
}