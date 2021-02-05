import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: #EAEBE6;
`

export const LargeText = styled.span`
    text-align: center;
    font-size: 40px;
    font-weight: 400;
    margin-bottom: 50px;
`

export const SmallText = styled.span`
    font-size: 20px;
    font-weight: 300;
    margin-bottom: 50px;
`

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 500px;
`

export const MainButton = styled(Link)`
    padding: 20px 40px;
    font-size: 20px;
    color: #ffffff;
    text-decoration: none;
    background-color: #88AF65;
    box-shadow: -1px 1px 6px #777777;
`

export const SecondaryButton = styled(Link)`
    padding: 20px 40px;
    font-size: 20px;
    color: #000000;
    text-decoration: none;
    background-color: #ffffff;
    box-shadow: -1px 1px 6px #777777;
`