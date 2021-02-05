import React from 'react'
import { Container, LargeText, SmallText, ButtonContainer, MainButton, SecondaryButton } from './style'

function Jumbotron({ children, ...props }) {
    return <Container {...props}>{children}</Container>
}

Jumbotron.LargeText = function JumbotronLargeText({ children, ...props }) {
    return <LargeText {...props}>{children}</LargeText>
}

Jumbotron.SmallText = function JumbotronSmallText({ children, ...props }) {
    return <SmallText {...props}>{children}</SmallText>
}

Jumbotron.ButtonContainer = function JumbotronButtonContainer({ children, ...props }) {
    return <ButtonContainer {...props}>{children}</ButtonContainer>
}

Jumbotron.MainButton = function JumbotronMainButton({ children, ...props }) {
    return <MainButton {...props}>{children}</MainButton>
}

Jumbotron.SecondaryButton = function JumbotronSecondaryButton({ children, ...props }) {
    return <SecondaryButton {...props}>{children}</SecondaryButton>
}

export default Jumbotron
