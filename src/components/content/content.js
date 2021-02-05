import React from 'react'
import { Container } from './style'

function Content({ children, ...props}) {
    return <Container {...props}>{children}</Container>
}

export default Content