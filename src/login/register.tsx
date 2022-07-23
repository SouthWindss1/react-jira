import React from "react";

import { useAuth } from "../context/auth-context";

const RegisterPage = () => {
    const authValue = useAuth();
    const handleSubmit = (event: any) => {
        event.preventDefault()
        const username = (event.currentTarget.elements[0] as HTMLInputElement).value;
        const password = (event.currentTarget.elements[1] as HTMLInputElement).value;
        authValue!.register({ username, password })
    }

    return (<>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="username">用户名</label>
                <input type="text" id={'username'} />
            </div>
            <div>
                <label htmlFor="password">密码</label>
                <input type="password" id={'password'} />
            </div>
            <button>注册</button>
        </form>
    </>)
}
export default RegisterPage;