import React, { createContext, useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { Container, EmphasizedNavItem, Frame, Logo, Nav, NavItem } from './style'

const ScrollContext = createContext()

function Header({ children, ...props }) {
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
        <ScrollContext.Provider value={topOfPage}>
            <Container {...props}>{children}</Container>
        </ScrollContext.Provider>
    )
}

Header.EmphasizedNavItem = function HeaderEmphasizedNavItem({ children, ...props }) {
    return <EmphasizedNavItem {...props}>{children}</EmphasizedNavItem>
}

Header.Frame = function HeaderFrame({ children, ...props }) {
    const topOfPage = useContext(ScrollContext)

    return <Frame {...props} className={!topOfPage ? 'scrolling' : ''}>{children}</Frame>
}

Header.Logo = function HeaderLogo({ to, children, ...props }) {
    const topOfPage = useContext(ScrollContext)

    return (
        <Link to={to}>
            <Logo {...props} src={topOfPage ? '../images/logo_white.png' : '../images/logo_black.png'}>{children}</Logo>
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