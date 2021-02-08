import styled from 'styled-components/macro'
import { Link } from 'react-router-dom';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Frame = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 5px 0px;
    position: fixed;
    top: 0;
    left: 0;
    transition: background-color 0.5s ease;
    border-radius: 0px 0px 8px 8px;

    @media (max-width: 700px) {
        height: 48px;
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

    &.scrolling{
        background-color: #ffffff;
        box-shadow: -1px 1px 6px #777777;
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
    transition: background-color 0.3s ease;

    @media (max-width: 700px) {
        font-size: 16px;
        padding: 6px 20px;
    }

    @media (max-height: 500px) {
        font-size: 16px;
        padding: 6px 20px;
    }

    &:hover {
        background-color: #8fb76a;
    }

    &:focus {
        background-color: #8fb76a;
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
    height: 60px;

    @media (max-width: 700px) {
        height: 48px;
    }

    @media (max-height: 500px) {
        height: 36px;
    }

    &:hover {
        opacity: 0.9;
    }
`