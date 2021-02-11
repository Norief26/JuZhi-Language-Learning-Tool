import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Container, Divider, Error, Frame, Google, Input, Logo, Text, Title} from './styles'

function Form({ children, ...props }) {
    return <Container {...props}>{children}</Container>
}

Form.Button = function FormButton({ children, ...props }) {
    return <Button {...props} type="submit">{children}</Button>
}

Form.Divider = function FormDivider({ children, ...props }) {
    return <Divider {...props}>{children}</Divider>
}

Form.Error = function FormError({ children, ...props }) {
    return <Error {...props}>{children}</Error>
}

Form.Frame = function FormFrame({ children, ...props }) {
    return <Frame {...props}>{children}</Frame>
}

Form.Google = function FormGoogle({ children, ...props }) {
    return <Google {...props}>{children}</Google>
}

Form.Logo = function FormLogo({ to, children, ...props }) {
    return (
        <Link to={to}>
            <Logo {...props}>{children}</Logo>
        </Link>
    )
}

Form.Input = function FormInput({ children, ...props}) {
    return <Input {...props}>{children}</Input>
}

Form.Text = function FormText({ children, ...props }) {
    return <Text {...props}>{children}</Text>
}

Form.Title = function FormTitle({ children, ...props }) {
    return <Title {...props}>{children}</Title>
}

export default Form