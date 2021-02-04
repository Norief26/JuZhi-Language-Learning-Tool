import React from 'react'
import { Link as ReactRouterLink } from 'react-router-dom';
import { Container, EmphasizedNavItem, Logo, Nav, NavItem } from './header'

function Header({ children, ...props }) {
    return <Container {...props}>{children}</Container>
}

Header.Logo = function HeaderLogo({ to, children, ...props }) {
    return (
        <ReactRouterLink to={to}>
            <Logo {...props}>{children}</Logo>
        </ReactRouterLink>
    )
}

Header.Nav = function HeaderNav({ children, ...props }) {
    return <Nav {...props}>{children}</Nav>
}

Header.NavItem = function HeaderNavItem({ children, ...props }) {
    return <NavItem {...props}>{children}</NavItem>
}

Header.EmphasizedNavItem = function HeaderEmphasizedNavItem({ children, ...props }) {
    return <EmphasizedNavItem {...props}>{children}</EmphasizedNavItem>
}

export default Header
