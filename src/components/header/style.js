import styled from 'styled-components/macro'
import { Link } from 'react-router-dom';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Frame = styled.div`
    display: flex;
    justify-content: space-between;
    width: 1580px;
    padding: 10px;
    position: fixed;
    top: 0;

    @media (max-width: 1580px) {
        width: 100%;
    }

    > * {
        &:first-child {
            margin-left: 20px;
        }
    }

    > * {
        &:last-child {
            margin-right: 20px;
        }
    }
`
export const EmphasizedNavItem = styled(Link)`
    font-size: 18px;
    padding: 13px 33px;
    color: #FFFFFF;
    text-decoration: none;
    background-color: #88AF65;
    border-radius: 8px;
    box-shadow: -1px 1px 6px #777777;

    @media (max-width: 700px) {
        font-size: 16px;
        padding: 11px 20px;
    }

`

export const Nav = styled.div`
    display: flex;
    align-items: center;
`

export const NavItem = styled(Link)`
    font-size: 16px;
    margin-right: 40px;
    color: #000000;
    text-decoration: none;

    @media (max-width: 700px) {
        display: none;
    }
`

export const Logo = styled.img`
    height: 80px;

    @media (max-width: 700px) {
        height: 48px;
    }
`