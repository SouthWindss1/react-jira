import { FC } from "react";
import React from "react";
import { Table } from 'antd'
import dayjs from "dayjs";
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
                title: "部门",
                dataIndex: "organization",
            },
            {
                title: "负责人",
                render(value: any, record: any,) {
                    return <span>
                        {users.find(res => res.id === record.personId)?.name || '未知'}
                    </span>
                },
            },
            {
                title: "创建时间",
                render(value: any, project: any) {
                    return (
                        <span>
                            {project.created
                                ? dayjs(project.created).format("YYYY-MM-DD")
                                : "无"}
                        </span>
                    );
                },
            },
        ]
    return (
        <>
            <div>
                <Table dataSource={list} pagination={false} columns={columns}></Table>
            </div>
        </>
    )
}