import styled from 'styled-components/macro'
import { isMobile } from 'react-device-detect'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: fit-content;
    min-height: 500px;
    width: 1000px;
    padding: 16px;
    background-color: #ffffff;
    border-radius: 10px;
    box-shadow: 0px 3px 5px #777777;

    a {
        color: #000000;
    }
`

export const Course = styled.div`
    display: flex;
    flex-direction: column;
    margin: 10px;
    border-radius: 10px;
    cursor: pointer;
    box-shadow: -1px 1px 6px #777777;
    transition: transform 0.1s ease;
    text-decoration: none;
    color: #000000;

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

export const CourseData = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 16px;
    background-color: #CCCCCC;
    text-transform: capitalize;
    border-radius: 0px 0px 10px 10px;
`

export const CourseList = styled.div`
    display: inline-flex;
    height: fit-content;
    border-radius: 10px;
`

export const CourseImage = styled.img`
    object-fit: contain;
    background-color: #000000;
    border-radius: 10px 10px 0px 0px;
`

export const DropDownButton = styled.span`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px 16px;
    position: relative;
    width: 80%;
    cursor: pointer;
    user-select: none;
    text-transform: capitalize;
    transition: border-radius 0.3s ease;
    border: 1px solid lightgray;

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
    top: 90%;
    left: 15%;
    width: inherit;
    box-shadow: 0px 3px 5px #777777;

    &.show {
        display: flex;
    }

    &.hide {
        display: none;
    }
`

export const DropDownMenuItem = styled.span`
    padding: 8px 16px;
    width: inherit;
    height: inherit;
    background-color: #ffffff;
    border: 1px solid lightgray;

    &:hover {
        background-color: #eeeeee;
    }

    &:first-letter {
        text-transform:capitalize;
    }
`

export const FilterCategory = styled.div`
    display: flex;
    flex-direction: column;
`

export const FilterItem = styled.span`
    padding: 8px 12px;
    background-color: #ffffff;
    border: 1px solid lightgray;
    cursor: pointer;
    text-transform: capitalize;
    
    &.active {
        background-color: #eeeeee;
    }
`

export const FilterList = styled.div`
    display: flex;
    flex-direction: column;
    height: fit-content;
    margin-right: 20px;
    padding: 16px;
    background-color: #ffffff;
    border-radius: 10px;
    border-right: 1px solid grey;
`

export const FilterTitle = styled.span`
    padding: 16px 0px;
    font-weight: bold;
`

export const Frame = styled.div`
    display: flex;
`

export const Title = styled.h1`
    padding: 0px 16px;
`