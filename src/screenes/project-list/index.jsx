import { useEffect, useState } from 'react'
import { List } from "./list"
import { Search } from "./search"
import qs from 'qs'
import { clearObj } from '../../utils'
const apiUrl = process.env.REACT_APP_API_URL
export const ListPage = () => {
    const [param, setParam] = useState({
        name: '',
        personId: ""
    })
    const [users, setUsers] = useState([])
    const [list, setList] = useState([])
    useEffect(() => {
        fetch(`${apiUrl}/projects?${qs.stringify(clearObj(param))}`).then(async (res) => {
            if (res.ok) {
                await res.json().then((data) => {
                    setList(data)
                })
            }
        })
    }, [param])
    useEffect(() => {
        fetch(`${apiUrl}/users`).then(async (res) => {
            if (res.ok) {
                await res.json().then((data) => {
                    setUsers(data)
                })
            }
        })
    }, [])
    return (
        <>
            <Search param={param} setParam={setParam} users={users} />
            <List list={list} users={users} />
        </>
    )
}