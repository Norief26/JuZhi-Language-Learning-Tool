import React, { useState, useContext, createContext } from 'react';
import { Link } from 'react-router-dom';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { Container, DropDownButton, DropDownMenu, DropDownMenuItem, EmphasizedNavItem, Frame, Logo, Nav, NavItem } from './style'

const DropDownContext = createContext();

function Header({ active, children, ...props }) {
    return <Container {...props}>{children}</Container>
}

Header.DropDownButton = function HeaderDropDownButton({ children, ...props }) {
    const [showDropDown, setShowDropDown] = useState(false)

    return (
        <DropDownContext.Provider value={{showDropDown, setShowDropDown}}>
            <DropDownButton {...props} className={showDropDown ? 'show' : 'hide'} onClick={() => {setShowDropDown(!showDropDown)}}>
                {children}
                <ArrowDropDownIcon/>
            </DropDownButton>
        </DropDownContext.Provider>
    )
}

Header.DropDownMenu = function HeaderDropDownMenu({ children, ...props }) {
    const { showDropDown } = useContext(DropDownContext)

    return <DropDownMenu {...props} className={showDropDown ? 'show' : 'hide'}>{children}</DropDownMenu>
}

Header.DropDownMenuItem = function HeaderDropDownMenuItem({ children, ...props }) {
    return <DropDownMenuItem {...props}>{children}</DropDownMenuItem>
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
            <Logo {...props} src={'../images/logo_white.png'}>{children}</Logo>
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