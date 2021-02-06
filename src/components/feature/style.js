import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 300px 0px;

    /* @media (max-width: 500px) {
        padding: 300px 0px;
    } */
`

export const LargeText = styled.span`
    color: #000000;
    text-align: center;
    font-size: 40px;
    margin-bottom: 50px;
`

export const SmallText = styled.span`
    color: #000000;
    font-size: 20px;
    margin-bottom: 50px;
`

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 500px;
`

export const MainButton = styled(Link)`
    padding: 15px 40px;
    height: 30px;
    font-size: 20px;
    color: #ffffff;
    text-decoration: none;
    background-color: #88AF65;
    box-shadow: -1px 1px 6px #777777;
`

export const SecondaryButton = styled(Link)`
    padding: 15px 40px;
    height: 30px;
    font-size: 20px;
    color: #4D4D4D;
    text-decoration: none;
    background-color: #ffffff;
    box-shadow: -1px 1px 5px #777777;
`