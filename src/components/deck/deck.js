import React from 'react'
import { Button, Container, Course, CourseList, Data, Image, Title } from './styles'

function Deck({children, ...props}) {
    return <Container {...props}>{children}</Container>
}

Deck.Button = function DeckButton({ children, ...props }) {
    return <Button {...props}>{children}</Button>
}

Deck.Course = function DeckCourse({ children, ...props }) {
    return <Course {...props}>{children}</Course>
}

Deck.CourseList = function DeckCourseList({ children, ...props }) {
    return <CourseList {...props}>{children}</CourseList>
}

Deck.Data = function DeckData({ children, ...props }) {
    return <Data {...props}>{children}</Data>
}

Deck.Image = function DeckImage({ children, ...props }) {
    return <Image {...props}>{children}</Image>
}

Deck.Title = function DeckTitle({ children, ...props }) {
    return <Title {...props}>{children}</Title>
}

export default Deck