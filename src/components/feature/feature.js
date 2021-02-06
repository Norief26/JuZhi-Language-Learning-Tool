import React from 'react'
import { Container, LargeText, SmallText, ButtonContainer, MainButton, SecondaryButton } from './style'

function Feature({ children, ...props }) {
    return <Container {...props}>{children}</Container>
}

Feature.LargeText = function FeatureLargeText({ children, ...props }) {
    return <LargeText {...props}>{children}</LargeText>
}

Feature.SmallText = function FeatureSmallText({ children, ...props }) {
    return <SmallText {...props}>{children}</SmallText>
}

Feature.ButtonContainer = function FeatureButtonContainer({ children, ...props }) {
    return <ButtonContainer {...props}>{children}</ButtonContainer>
}

Feature.MainButton = function FeatureMainButton({ children, ...props }) {
    return <MainButton {...props}>{children}</MainButton>
}

Feature.SecondaryButton = function FeatureSecondaryButton({ children, ...props }) {
    return <SecondaryButton {...props}>{children}</SecondaryButton>
}

export default Feature
