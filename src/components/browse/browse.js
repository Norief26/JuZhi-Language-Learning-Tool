import React from 'react'
import { Container, CourseList, Course, FilterCategory, FilterItem, FilterList, FilterTitle, Title } from './styles'

function Browse({ children, ...props}) {
    return <Container {...props}>{children}</Container>
}

Browse.CourseList = function BrowseCourseList({ children, ...props }) {
    return <CourseList {...props}>{children}</CourseList>
}

Browse.Course = function BrowseCourse({ children, ...props }) {
    return <Course {...props}>{children}</Course>
}

Browse.FilterCategory = function BrowseFilterCategory({ children, ...props }) {
    return <FilterCategory {...props}>{children}</FilterCategory>
}

Browse.FilterItem = function BrowseFilterItem({ children, ...props }) {
    return <FilterItem {...props}>{children}</FilterItem>
}

Browse.FilterList = function BrowseFilterList({ children, ...props }) {
    return <FilterList {...props}>{children}</FilterList>
}

Browse.FilterTitle = function BrowseFilterTitle({ children, ...props }) {
    return <FilterTitle {...props}>{children}</FilterTitle>
}

Browse.Title = function BrowseTitle({ children, ...props }) {
    return <Title {...props}>{children}</Title>
}

export default Browse