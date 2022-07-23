import { useAuth } from "../../context/auth-context";

const LoginPage = () => {
    const authValue = useAuth();
    const handleSubmit = (event: any) => {
        event.preventDefault()
        const username = (event.currentTarget.elements[0] as HTMLInputElement).value;
        const password = (event.currentTarget.elements[1] as HTMLInputElement).value;
        authValue!.login({ username, password })
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
            <button type='submit'>登陆</button>
        </form>
    </>)
}
export default LoginPage;