import styled from 'styled-components/macro'
import { Link } from 'react-router-dom';

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    width: 1280px;
    position: fixed;
`
export const EmphasizedNavItem = styled(Link)`
    font-size: 20px;
    padding: 13px 33px;
    color: #FFFFFF;
    text-decoration: none;
    background-color: #88AF65;
    border-radius: 8px;
    box-shadow: -1px 1px 6px #777777;
`

export const Nav = styled.div`
    margin-top: 30px;
`

export const NavItem = styled(Link)`
    font-size: 20px;
    margin-right: 40px;
    color: #000000;
    text-decoration: none;
`

export const Logo = styled.img`
    height: 100px;
    width: 100px;
`