import React from "react";

import { useState } from "react";
import LoginPage from "./login";
import RegisterPage from "./register";
import { Card, Button } from 'antd';
const AuthPage = () => {
    const [isLogin, setIsLogin] = useState(true)

    return (<>
        <div style={{ display: "flex", justifyContent: 'center' }}>
            <Card>
                {isLogin ? <LoginPage /> : <RegisterPage />}
                <Button type='primary' onClick={() => { setIsLogin(!isLogin) }}>{isLogin ? '切换注册' : '切换登录'}</Button>
            </Card>
        </div>

    </>)
}
export default AuthPage;