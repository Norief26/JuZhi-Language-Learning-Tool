import React from 'react'
import { Container, Course, CourseCardCount, CourseMeta, CourseTitle, Icon, IconGroup, Title } from './styles'

function Catalog({ children, ...props }) {
    return <Container {...props}>{children}</Container>
}

Catalog.Course = function CatalogCourse({ children, ...props }) {
    return <Course {...props}>{children}</Course>
}

Catalog.CourseCardCount = function CatalogCourseCardCount({ children, ...props }) {
    return <CourseCardCount {...props}>{children}</CourseCardCount>
}

Catalog.CourseMeta = function CatalogCourseMeta({ children, ...props }) {
    return <CourseMeta {...props}>{children}</CourseMeta>
}

Catalog.CourseTitle = function CatalogCourseTitle({ children, ...props }) {
    return <CourseTitle {...props}>{children}</CourseTitle>
}

Catalog.Icon = function CatalogIcon({ children, ...props }) {
    return <Icon {...props}>{children}</Icon>
}

Catalog.IconGroup = function CatalogIconGroup({ children, ...props }) {
    return <IconGroup {...props}>{children}</IconGroup>
}

Catalog.Title = function CatalogTitle({ children, ...props }) {
    return <Title {...props}>{children}</Title>
}

export default Catalog