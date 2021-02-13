import React from 'react'
import { Container, Frame } from './styles'

function Card({ children, ...props }) {
    return <Container {...props}>{children}</Container>
}

Card.Frame = function CardFrame({ children, ...props }) {
    return <Frame {...props}>{children}</Frame>
}

export default Card