import styled from 'styled-components/macro'
import { Link as ReactRouterLink } from 'react-router-dom';

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
`
export const EmphasizedNavItem = styled(ReactRouterLink)`
    font-size: 20px;
    padding: 13px 33px;
    color: #FFFFFF;
    text-decoration: none;
    background-color: #88AF65;
    border-radius: 8px;
`

export const Nav = styled.div`
    margin-top: 20px;
`

export const NavItem = styled(ReactRouterLink)`
    font-size: 20px;
    margin-right: 40px;
    color: #000000;
    text-decoration: none;
`

export const Logo = styled.img`
    height: 100px;
    width: 100px;
`