import React from "react";
import { useAuth } from "../context/auth-context";
import { Form, Button, Input } from 'antd';
const LoginPage = () => {
    const authValue = useAuth();
    const handleSubmit = (value: { username: string, password: string }) => {
        const { username, password } = value
        authValue!.login({ username, password })
    }

    return (<>
        <Form onFinish={handleSubmit}>
            <Form.Item name="username">
                <Input type="text" />
            </Form.Item>
            <Form.Item name="password">
                <Input type="text" />
            </Form.Item>
            <Form.Item >
                <Button type='primary' htmlType="submit">登陆</Button>
            </Form.Item>
        </Form>
    </>)
}
export default LoginPage;