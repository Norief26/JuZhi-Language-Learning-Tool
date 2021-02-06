import React from 'react'
import { Container, Icon, Title } from './styles'

function Courses({ children, ...props}) {
    return <Container {...props}>{children}</Container>
}

Courses.Icon = function CoursesIcon({ children, ...props }) {
    return <Icon {...props}>{children}</Icon>
}

Courses.Title = function CoursesTitle({ children, ...props }) {
    return <Title {...props}>{children}</Title>
}

export default Courses