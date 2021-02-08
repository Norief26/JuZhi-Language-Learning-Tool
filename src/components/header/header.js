import React, { createContext, useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { Container, EmphasizedNavItem, Frame, Logo, Nav, NavItem } from './style'

const ScrollContext = createContext()

function Header({ active, children, ...props }) {
    const [topOfPage, setTopOfPage] = useState(true)

    const handleScroll = () => {
        (window.pageYOffset <= 0) ? setTopOfPage(true) : setTopOfPage(false)
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [])

    return (
        <ScrollContext.Provider value={{ active, topOfPage}}>
            <Container {...props}>{children}</Container>
        </ScrollContext.Provider>
    )
}

Header.EmphasizedNavItem = function HeaderEmphasizedNavItem({ children, ...props }) {
    return <EmphasizedNavItem {...props}>{children}</EmphasizedNavItem>
}

Header.Frame = function HeaderFrame({ children, ...props }) {
    const { active, topOfPage } = useContext(ScrollContext)

    return <Frame {...props} active className={!topOfPage || active ? 'scrolling' : ''}>{children}</Frame>
}

Header.Logo = function HeaderLogo({ to, children, ...props }) {
    const { active, topOfPage } = useContext(ScrollContext)

    return (
        <Link to={to}>
            <Logo {...props} src={!topOfPage || active ? '../images/logo_black.png' : '../images/logo_white.png'}>{children}</Logo>
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