/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_APP_TITLE: string
    // more env variables...
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}

export interface ReleaseInfoData {
    version: string,
    date: Date,
    environment: string,
    showEnvironment: boolean
}
declare global {
    const ReleaseInfo: ReleaseInfoData;
}