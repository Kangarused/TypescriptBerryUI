import { UserAuthDto } from "./demoTypes"

export type UserAuthState = {
    loading: boolean,
    authorised: boolean,
    user?: UserAuthDto | null
}