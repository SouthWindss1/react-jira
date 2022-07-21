
type Users = {
    id: number,
    name: string
}
type List = Users & {
    personId: number,
    organization: string
}
export type ListProps = {
    list: List[],
    users: Users[]
}


export type searchProps = {
    param: {
        name: string,
        personId: string
    },
    users: Users[],
    setParam: (param: searchProps['param']) => void
}