import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const LargeText = styled.span`
    color: #000000;
    text-align: center;
    font-size: 52px;
    margin-bottom: 50px;
    text-shadow: 1px 1px #FFFFFF;

    @media (max-width: 700px) {
        font-size: 28px;
    }

    @media (max-height: 500px) {
        font-size: 28px;
        margin-bottom: 20px;
    }
`

export const SmallText = styled.span`
    color: #000000;
    font-size: 20px;
    margin-bottom: 50px;

    @media (max-width: 700px) {
        font-size: 16px;
    }

    @media (max-height: 500px) {
        font-size: 16px;
        margin-bottom: 30px;
    }
`

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 500px;

    @media (max-width: 700px) {
        width: 340px;
    }
`

export const MainButton = styled(Link)`
    display: flex;
    padding: 15px 40px;
    font-size: 20px;
    color: #ffffff;
    align-items: center;
    text-decoration: none;
    background-color: #4B7253;
    box-shadow: -1px 1px 6px #777777;
    transition: background-color 0.3s ease;

    @media (max-width: 700px) {
        font-size: 14px;
        padding: 10px 30px;
    }

    &:hover {
        background-color: #638E6C;
    }
`

export const SecondaryButton = styled(Link)`
    display: flex;
    padding: 15px 40px;
    font-size: 20px;
    color: #4D4D4D;
    align-items: center;
    text-decoration: none;
    background-color: #ffffff;
    box-shadow: -1px 1px 5px #777777;
    transition: background-color 0.3s ease;

    @media (max-width: 700px) {
        font-size: 14px;
        padding: 10px 30px;
    }

    &:hover {
        background-color: #f5f5f5;
    }
`