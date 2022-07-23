import { createContext, ReactNode, useContext, useState } from "react";
import * as auth from '../auth-provider'
import { Users } from "../screenes/project-list/type";
import { AuthUser, ProviderProps } from "./types";
const AuthContext = createContext<ProviderProps | undefined>(undefined);
export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<Users | null>(null)
    const login = (from: AuthUser) => auth.login(from).then((user) => setUser(user))
    const register = (from: AuthUser) => auth.register(from).then((user) => setUser(user))
    const logout = () => auth.logout().then(() => setUser(null))
    return <AuthContext.Provider value={{ user, login, register, logout }} children={children} />
}

export const useAuth = () => {
    const context = useContext(AuthContext)
    return context;
}