import React from "react";

import { useState } from "react";
import LoginPage from "./login";
import RegisterPage from "./register";
const AuthPage = () => {
    const [isLogin, setIsLogin] = useState(true)

    return (<>
        {isLogin ? <LoginPage /> : <RegisterPage />}
        <button onClick={() => { setIsLogin(!isLogin) }}>{isLogin ? '切换注册' : '切换登录'}</button>
    </>)
}
export default AuthPage;