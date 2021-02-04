import React from 'react'
import { Content, Header } from '../components'
import * as ROUTES from '../constants/routes'

function Home() {
    return (
        <>
        <Content>
            <Content.Group>
                <Header>
                    <Header.Logo to={ROUTES.HOME} src={'../../images/logo.png'}/>
                    <Header.Nav>
                        <Header.NavItem>About Us</Header.NavItem>
                        <Header.NavItem>Log In</Header.NavItem>
                        <Header.EmphasizedNavItem>Sign Up</Header.EmphasizedNavItem>
                    </Header.Nav>
                </Header>
            </Content.Group>
        </Content>
        </>
    )
}

export default Home
