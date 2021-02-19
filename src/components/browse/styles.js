import styled from 'styled-components/macro'

export const Container = styled.div`
    display: flex;
    height: 100%;
    width: 100%;

    @media (max-width: 700px) {
        flex-direction: column;
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

export const CourseSection = styled.div`
    display: flex;
    flex-direction: column;
    padding: 16px;
`

export const DropDownButton = styled.span`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px 16px;
    position: relative;
    min-width: 80%;
    cursor: pointer;
    user-select: none;
    text-transform: capitalize;
    transition: border-radius 0.3s ease;
    color: #000000;
    background-color: #ffffff;
    border-radius: 4px;

    > * {
        &:last-child {
            border-left: 1px solid #FFFFFF;
            padding-left: 8px;
            margin-left: 20px;
        }
    }
`

export const DropDownMenu = styled.div`
    flex-direction: column;
    position: absolute;
    top: 80%;
    /* left: 15%; */
    min-width: inherit;

    &.show {
        display: flex;
    }
    &.hide {
        display: none;
    }
`

export const DropDownMenuItem = styled.span`
    padding: 8px 16px;
    min-width: 100%;
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



export const FilterItem = styled.span`
    color: #000000;
    padding: 8px 12px;
    background-color: #ffffff;
    border: 2px solid #ffffff;
    cursor: pointer;
    text-transform: capitalize;
    border: 1px solid lightgray;
    
    &.active {
        background-color: #cccccc;
        /* border: 1px solid #4B7253; */
    }
`

export const FilterCategory = styled.div`
    display: flex;
    flex-direction: column;
    color: #ffffff;
    padding: 8px 24px;

`

export const FilterSection = styled.div`
    display: flex;
    flex-direction: column;
    background-color: rgba(37, 37, 37, 0.85);
    overflow: auto;
`

export const FilterHeader = styled.span`
    padding: 16px 0px;
`

export const Title = styled.div`
    display: flex;
    align-items: center;

    a {
        color: #000000;
        line-height: 0;
        padding-right: 16px;
        text-decoration: none;
    }
`