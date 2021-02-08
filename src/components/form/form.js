import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Container, Divider, Frame, Google, Logo, Input, Text } from './styles'

function Form({ children, ...props }) {
    return <Container {...props}>{children}</Container>
}

Form.Button = ({ children, ...props }) => {
    return <Button {...props}>{children}</Button>
}

Form.Divider = ({ children, ...props }) => {
    return <Divider {...props}>{children}</Divider>
}

Form.Frame = ({ children, ...props }) => {
    return <Frame {...props}>{children}</Frame>
}

Form.Google = ({ children, ...props }) => {
    return <Google {...props}>{children}</Google>
}

Form.Logo = ({ to, children, ...props }) => {
    return (
        <Link to={to}>
            <Logo {...props}>{children}</Logo>
        </Link>
    )
}

Form.Input = ({ children, ...props}) => {
    return <Input {...props}>{children}</Input>
}

Form.Text = ({ children, ...props }) => {
    return <Text {...props}>{children}</Text>
}

export default Form
