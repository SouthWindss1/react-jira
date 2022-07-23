import { Users } from "../screenes/project-list/type";
export type AuthUser = {
    username: string,
    password: string
}

export type ProviderProps = {
    user: Users | null,
    login: (form: AuthUser) => Promise<void>,
    register: (form: AuthUser) => Promise<void>,
    logout: () => Promise<void>
}