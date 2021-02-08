import styled from 'styled-components/macro'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 1580px;
`
export const Course = styled.div`
    display: flex;
    width: 180px;
    transition: transform 0.1s ease;

    &:hover {
        transform: scale(1.05);
    }
`

export const CourseCardCount = styled.span`

`

export const CourseMeta = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const CourseTitle = styled.span`
    font-weight: bold;
`

export const Title = styled.span`
    padding: 48px;
    font-size: 30px;
    font-weight: bold;
`

export const Icon = styled.img`
    height: 64px;
    width: 64px;
    margin-right: 20px;
    background-color: #444444;
    border-radius: 15px;
    box-shadow: -1px 1px 6px #777777;
`

export const IconGroup = styled.div`
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(auto-fit, minmax(256px, 1fr));
    justify-items: center;
    flex-wrap: wrap;
    padding-bottom: 64px;
    padding-right: 64px;
`