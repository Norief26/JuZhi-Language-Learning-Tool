import React from 'react'
import { Container, Group } from './content'

function Content({ children, ...props}) {
    return <Container {...props}>{children}</Container>
}

Content.Group = function ContentGroup({ children, ...props}) {
    return <Group {...props}>{children}</Group>
}

export default Content
