import qs from 'qs'
import * as auth from '../auth-provider'
const apiUrl = process.env.REACT_APP_API_URL
interface ConfigProps extends RequestInit {
    data?: object | string,
    token?: string
}

export const http = async (endpoint: string, {
    data,
    token,
    headers,
    ...customConfig
}: ConfigProps = {}) => {
    const config = {
        method: 'GET',
        headers: {
            Authorization: token ? `Bearer ${token}` : '',
            "Content-Type": data ? "application/json" : "",
        },
        ...customConfig

    }
    if (config.method.toUpperCase() === 'GET') {
        endpoint += `?${qs.stringify(data)}`
    } else {
        config.body = JSON.stringify(data || '')
    }
    return window.fetch(`${apiUrl}/${endpoint}`, config).then(async response => {
        if (response.status === 401) {
            auth.logout()
            window.location.reload();
            return Promise.reject({ message: "请重新登录" })
        }
        const data = await response.json()
        if (response.ok) {
            return data
        } else {
            return Promise.reject(data)
        }
    })
}