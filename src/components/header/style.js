import styled from 'styled-components/macro'
import { Link } from 'react-router-dom';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    /* background: linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0)), url(${({ src }) => (src)}) bottom left / cover; */
`

export const Frame = styled.div`
    display: flex;
    justify-content: space-between;
    width: 1580px;
    /* position: fixed; */

    @media (max-width: 1580px) {
        width: 100%;
        min-width: 500px;
    }

    > * {
        &:first-child {
            margin-top: 20px;
            margin-left: 40px;
        }
    }

    > * {
        &:last-child {
            margin-right: 40px;
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
`

export const Nav = styled.div`
    margin-top: 45px;
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
`