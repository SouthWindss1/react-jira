import React from "react";

import { searchProps } from "./type"
import { FC } from "react"
export const Search: FC<searchProps> = (props) => {
    const { param, setParam, users } = props
    return (
        <>
            <div>
                <form>
                    <input type="text" onChange={e => setParam({ ...param, name: e.target.value })} />
                    <select value={param.personId} onChange={e => setParam({ ...param, personId: e.target.value })}>
                        <option value="">负责人</option>
                        {users.map((item) => {
                            return (<option value={item.id} key={item.id}>{item.name}</option>)
                        })}
                    </select>
                </form>
            </div>
        </>
    )
}