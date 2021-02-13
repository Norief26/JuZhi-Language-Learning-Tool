import styled from 'styled-components/macro'

export const Container = styled.div`
    display: flex;
    /* flex-direction: row; */
    /* height: 100%; */
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

export const FilterCategory = styled.div`
    display: flex;
    flex-direction: column;
`

export const FilterItem = styled.span`
    padding: 12px;
    background-color: #ffffff;
    border: 1px solid lightgray;
`

export const FilterList = styled.div`
    display: flex;
    flex-direction: column;
    /* min-width: 15%; */
    margin-right: 20px;
    padding: 16px;
    background-color: #ffffff;
    /* border: 1px solid lightgray; */
    border-radius: 10px;
`

export const FilterTitle = styled.h4`

`

export const Title = styled.h1`

`