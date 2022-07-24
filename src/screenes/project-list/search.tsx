import React from "react";

import { searchProps } from "./type"
import { FC } from "react"
import { Form, Input, Select } from 'antd'
export const Search: FC<searchProps> = (props) => {
    const { param, setParam, users } = props
    return (
        <>
            <div>
                <Form>
                    <Form.Item>
                        <Input type="text" onChange={e => setParam({ ...param, name: e.target.value })} />
                    </Form.Item>
                    <Select value={param.personId} onChange={value => setParam({ ...param, personId: value })}>
                        <Select.Option value="">负责人</Select.Option>
                        {users.map((item) => {
                            return (<Select.Option value={item.id} key={item.id}>{item.name}</Select.Option>)
                        })}
                    </Select>
                </Form>
            </div>
        </>
    )
}