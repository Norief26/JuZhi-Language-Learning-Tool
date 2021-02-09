import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Container, Divider, Error, Frame, Google, Input, Logo, Text, Title} from './styles'

function Form({ children, ...props }) {
    return <Container {...props}>{children}</Container>
}

Form.Button = ({ children, ...props }) => {
    return <Button {...props} type="submit">{children}</Button>
}

Form.Divider = ({ children, ...props }) => {
    return <Divider {...props}>{children}</Divider>
}

Form.Error = ({ children, ...props }) => {
    return <Error {...props}>{children}</Error>
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

Form.Title = function FormTitle({ children, ...props }) {
    return <Title {...props}>{children}</Title>
}

export default Form