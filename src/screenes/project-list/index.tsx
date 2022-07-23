import React from "react";
import { useEffect, useState } from 'react'
import { List } from "./list"
import { Search } from "./search"
import useDebounce from '../../hooks/use-debounce'
import useHttp from "../../hooks/use-http";
import { clearObj } from '../../utils'
export const ListPage = () => {
    const [param, setParam] = useState({
        name: '',
        personId: ""
    })
    const [users, setUsers] = useState([])
    const [list, setList] = useState([])
    const debonceValue = useDebounce(param, 1000)
    const http = useHttp()
    useEffect(() => {
        http('projects', { data: clearObj(debonceValue) }).then((res) => {
            setList(res)
        })
    }, [debonceValue])
    useEffect(() => {
        http('users').then((res) => { setUsers(res) })
    }, [])
    return (
        <>
            <Search param={param} setParam={setParam} users={users} />
            <List list={list} users={users} />
        </>
    )
}