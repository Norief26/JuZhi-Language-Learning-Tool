import styled from 'styled-components/macro'
import { Link } from 'react-router-dom';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 52px;
    width: 100%;
    padding: 5px 0px;
    top: 0;
    left: 0;
    background-color: rgba(17,17,17,0.85);
    box-shadow: -1px 1px 6px #777777;

    ${({ fixed }) => ( fixed && `position: fixed;`)};
    ${({ center }) => ( center ? `justify-content: center;`: `justify-content: space-between;`)};
    
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

export const DropDownButton = styled.span`
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #FFFFFF;
    padding: 8px 16px;
    background-color: #4B7253;
    position: relative;
    width: 110px;
    cursor: pointer;
    user-select: none;
    transition: border-radius 0.3s ease;

    > * {
        &:last-child {
            border-left: 1px solid #FFFFFF;
            padding-left: 8px;
            margin-left: 20px;
        }
    }

    &.show {
        border-radius: 4px 4px 0px 0px;
    }

    &.hide {
        border-radius: 4px;
    }
`

export const DropDownMenu = styled.div`
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0%;
    width: inherit;

    &.show {
        display: flex;
    }

    &.hide {
        display: none;
    }
`

export const DropDownMenuItem = styled.span`
    padding: 8px 16px;
    border-bottom: 1px solid rgba(255,255,255,0.5);
    width: inherit;
    height: inherit;
    background-color: rgba(17,17,17,0.85);

    &:hover {
        background-color:rgba(30, 30, 30, 0.85)
    }

    &:last-of-type {
        border-bottom: none;
        border-radius: 0px 0px 10px 10px;
    }
`

export const Frame = styled.div`
    display: flex;
    width: inherit;
    align-items: center;
    background-color: rgba(17,17,17,0.85);
    box-shadow: -1px 1px 6px #777777;

    ${({ center }) => ( center ?  `justify-content: center;`: `justify-content: space-between;`)};

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
    background-color: #4B7253;
    border-radius: 4px;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #638E6C;
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

    @media (max-height: 500px) {
        height: 36px;
    }

    &:hover {
        opacity: 0.9;
    }
`