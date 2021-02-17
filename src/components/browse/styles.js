import styled from 'styled-components/macro'

export const Container = styled.div`
    display: flex;
    /* flex-direction: row; */
    height: 95%;
    width: 1580px;
    padding: 16px;
    /* justify-content: space-between; */
`

export const CourseList = styled.div`
    display: inline-flex;
    height: fit-content;
    /* min-width: 80%; */
    padding: 16px;
    background-color: #ffffff;
    border-radius: 10px;
`

export const Course = styled.div`
    display: flex;
    flex-direction: column;
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
    text-transform:capitalize;
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
    
    &.active {
        background-color: #eeeeee;
    }
`

export const FilterList = styled.div`
    display: flex;
    flex-direction: column;
    /* min-width: 15%; */
    height: fit-content;
    margin-right: 20px;
    padding: 16px;
    background-color: #ffffff;
    /* border: 1px solid lightgray; */
    border-radius: 10px;
`

export const FilterTitle = styled.span`
    padding: 16px 0px;
    font-weight: bold;
`

export const Title = styled.h1`

`