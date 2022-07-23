import { FC } from "react";
import React from "react";

import { ListProps } from "./type";
export const List: FC<ListProps> = (props) => {
    const { list, users } = props;
    return (
        <>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>名称</th>
                            <th>负责人</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            list.map((item) => {
                                return (
                                    <>
                                        <tr key={item.id}>
                                            <td>{item.name}</td>
                                            <td>{users.find(res => res.id === item.personId)?.name || '未知'}</td>
                                        </tr>
                                    </>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}