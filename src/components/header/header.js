import React from 'react'
import { Link } from 'react-router-dom';
import { Container, EmphasizedNavItem, Frame, Logo, Nav, NavItem } from './style'

function Header({ children, ...props }) {
    return <Container {...props}>{children}</Container>
}

Header.EmphasizedNavItem = function HeaderEmphasizedNavItem({ children, ...props }) {
    return <EmphasizedNavItem {...props}>{children}</EmphasizedNavItem>
}

Header.Frame = function HeaderFrame({ children, ...props }) {
    return <Frame {...props}>{children}</Frame>
}

Header.Logo = function HeaderLogo({ to, children, ...props }) {
    return (
        <Link to={to}>
            <Logo {...props}>{children}</Logo>
        </Link>
    )
}

Header.Nav = function HeaderNav({ children, ...props }) {
    return <Nav {...props}>{children}</Nav>
}

Header.NavItem = function HeaderNavItem({ children, ...props }) {
    return <NavItem {...props}>{children}</NavItem>
}

export default Header