import React from "react";
import { ListPage } from "./screenes/project-list";
import { useAuth } from "./context/auth-context";
import { ReactComponent as SoftwareLogo } from "./assets/software-logo.svg";
import styled from "@emotion/styled";
import { Row } from "./compoents/lib";
import { Dropdown, Menu, Button } from 'antd'
export function AuthentiCated() {
    return (
        <Container>
            <PageHeader />
            <Main></Main>
            <ListPage />
        </Container>
    );
}

const PageHeader = () => {
    return (
        <Header between={true}>
            <HeaderLeft gap={true}>
                <SoftwareLogo width={"18rem"} color={"rgb(38, 132, 255)"} />
            </HeaderLeft>
            <HeaderRight>
                <User />
            </HeaderRight>
        </Header>
    );
};

const User = () => {
    const authValue = useAuth()
    return (
        <Dropdown
            overlay={
                <Menu>
                    <Menu.Item key={"logout"}>
                        <Button onClick={authValue?.logout} type={"link"}>
                            登出
                        </Button>
                    </Menu.Item>
                </Menu>
            }
        >
            <Button type={"link"} onClick={(e) => e.preventDefault()}>
                Hi, {authValue?.user?.name}
            </Button>
        </Dropdown>
    );
};
export default AuthentiCated;
const Container = styled.div`
  /* display: grid; */
  grid-template-rows: 6rem 1fr;
  height: 100vh;
`;

// grid-area 用来给grid子元素起名字
const Header = styled(Row)`
  padding: 3.2rem;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.1);
  z-index: 1;
`;
const HeaderLeft = styled(Row)``;
const HeaderRight = styled.div``;
const Main = styled.main`
  display: flex;
  overflow: hidden;
`;