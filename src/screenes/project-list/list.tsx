import { FC } from "react";
import React from "react";
import { Table } from 'antd'
import { ListProps } from "./type";
export const List: FC<ListProps> = (props) => {
    const { list, users } = props;
    const columns =
        [
            {
                title: '名称',
                dataIndex: "name"
            },
            {
                title: "负责人",
                render(value:any, record:any,) {
                    return <span>
                        {users.find(res => res.id === record.personId)?.name || '未知'}
                    </span>
                },
            }
        ]
    return (
        <>
            <div>
                <Table dataSource={list} pagination={false} columns={columns}></Table>
            </div>
        </>
    )
}