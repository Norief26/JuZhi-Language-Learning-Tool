import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: inherit;
    align-items: center;
    justify-content: center;
    /* padding: 150px 0px; */
`

export const LargeText = styled.span`
    color: #000000;
    text-align: center;
    font-size: 40px;
    margin-bottom: 50px;

    @media (max-width: 700px) {
        font-size: 24px;
    }
`

export const SmallText = styled.span`
    color: #000000;
    font-size: 20px;
    margin-bottom: 50px;

    @media (max-width: 700px) {
        font-size: 14px;
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
    background-color: #88AF65;
    box-shadow: -1px 1px 6px #777777;
    transition: background-color 0.3s ease;

    @media (max-width: 700px) {
        font-size: 14px;
        padding: 10px 30px;
    }

    &:hover {
        background-color: #8fb76a;
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