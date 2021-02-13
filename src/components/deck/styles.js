import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'

export const Button = styled(Link)`
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

    @media (max-height: 500px) {
        font-size: 14px;
        padding: 10px 30px;
    }

    &:hover {
        background-color: #638E6C;
    }
`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 1580px;
`

export const Course = styled(Link)`
    display: flex;
    flex-direction: column;
    margin: 10px;
    border-radius: 10px;
    cursor: pointer;
    box-shadow: -1px 1px 6px #777777;
    transition: transform 0.1s ease;
    text-decoration: none;
    color: #000000;
    /* max-width: 64px; */

    @media (max-width: 700px) {
        max-width: 72px;
    }

    @media (max-height: 500px) {
        max-width: 64px;
    }

    &:hover {
        transform: scale(1.05);
    }
`

export const CourseList = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    padding-bottom: 64px;

    @media (max-height: 500px) {
        margin-bottom: 20px;
    }
`

export const Data = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: 10px 0px;
    text-align: center;
    justify-content: center;

    @media (max-width: 700px) {
        font-size: 12px;
        padding: 4px 0px;
    }

    @media (max-height: 500px) {
        font-size: 12px;
        padding: 4px 0px;
    }
`

export const Image = styled.img.attrs({src: '../images/japanese.png'})`
    object-fit: contain;
    background-color: #000000;
    border-radius: 10px 10px 0px 0px;
`

export const Title = styled.span`
    color: #000000;
    text-align: center;
    font-size: 52px;
    margin-bottom: 50px;
    text-shadow: 1px 1px #FFFFFF;

    @media (max-width: 700px) {
        font-size: 40px;
        margin-bottom: 30px;
    }

    @media (max-height: 500px) {
        font-size: 40px;
        margin-bottom: 10px;
    }
`