import { http } from "../utils/http";
import React, { useEffect } from "react";
import { createContext, ReactNode, useContext, useState } from "react";
import * as auth from '../auth-provider'
import { Users } from "../screenes/project-list/type";
import { AuthUser, ProviderProps } from "./types";
const AuthContext = createContext<ProviderProps | undefined>(undefined);
const initUser = async () => {
    let user = null;
    const token = auth.getToken();
    if (token) {
        const data = await http('me', { token });
        user = data.user;
    }
    return user
}
export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<Users | null>(null)
    const login = (from: AuthUser) => auth.login(from).then((user) => setUser(user))
    const register = (from: AuthUser) => auth.register(from).then((user) => setUser(user))
    const logout = () => auth.logout().then(() => setUser(null))
    useEffect(() => {
        initUser().then((res) => {
            setUser(res)
        })
    }, [])
    return <AuthContext.Provider value={{ user, login, register, logout }} children={children} />
}

export const useAuth = () => {
    const context = useContext(AuthContext)
    return context;
}