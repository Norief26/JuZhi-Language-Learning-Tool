import React from 'react'
import { Content, Header, Jumbotron } from '../components'
import * as ROUTES from '../constants/routes'

function Home() {
    return (
        <>
        <Content>
            <Header>
                <Header.Logo to={ROUTES.HOME} src={'../../images/logo.png'}/>
                <Header.Nav>
                    <Header.NavItem>About Us</Header.NavItem>
                    <Header.NavItem>Log In</Header.NavItem>
                    <Header.EmphasizedNavItem>Sign Up</Header.EmphasizedNavItem>
                </Header.Nav>
            </Header>

            <Jumbotron>
                <Jumbotron.LargeText>
                    Take A Step Closer Towards
                    <br/>
                    Language Proficiency
                </Jumbotron.LargeText>
                <Jumbotron.SmallText>
                    Even with just a few minutes a day
                </Jumbotron.SmallText>

                <Jumbotron.ButtonContainer>
                    <Jumbotron.MainButton>
                        Start Learning
                    </Jumbotron.MainButton>

                    <Jumbotron.SecondaryButton>
                        How It Works
                    </Jumbotron.SecondaryButton>
                </Jumbotron.ButtonContainer>
            </Jumbotron>
        </Content>
        </>
    )
}

export default Home
