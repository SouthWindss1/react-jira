import React from "react";
import { ListPage } from "./screenes/project-list";
import { useAuth } from "./context/auth-context";
const AuthentiCated = () => {
    const authValue = useAuth()
    return (<>
        <button onClick={authValue?.logout}>登出</button>
        <ListPage />
    </>)
}
export default AuthentiCated;