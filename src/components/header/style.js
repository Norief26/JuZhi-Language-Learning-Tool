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
    background-color: rgba(17,17,17,0.85);
    box-shadow: -1px 1px 6px #777777;

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
`
export const EmphasizedNavItem = styled(Link)`
    font-size: 16px;
    padding: 6px 20px;
    color: #FFFFFF;
    text-decoration: none;
    background-color: #88AF65;
    border-radius: 4px;
    transition: background-color 0.3s ease;

    @media (max-width: 700px) {
        font-size: 16px;
    }

    @media (max-height: 500px) {
        font-size: 16px;
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
    position: relative;
    font-size: 16px;
    margin-right: 40px;
    color: #CCCCCC;
    text-decoration: none;

    @media (max-width: 700px) {
        display: none;
    }

    &::before {
        content: '';
        position: absolute;
        top: 125%;
        height: 2px;
        width: 100%;
        background-color: #CCCCCC;
        transform: scale(0, 1);
        transition: -webkit-transform 0.1s ease-out;
    }

    &:hover::before {
        transform: scale(1, 1);
    }
`

export const Logo = styled.img`
    height: 48px;

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