import React from 'react'
import { Content, Courses, Header, Feature } from '../components'
import * as ROUTES from '../constants/routes'

function Home() {
    return (
        <>
        <Content>
            <Content.Group src={`../../images/home_background.jpg`}>
                <Header>
                    <Header.Frame>
                        <Header.Logo to={ROUTES.HOME} src={'../../images/logo_black.png'}/>
                        <Header.Nav>
                            <Header.NavItem>About Us</Header.NavItem>
                            <Header.NavItem>Log In</Header.NavItem>
                            <Header.EmphasizedNavItem>Sign Up</Header.EmphasizedNavItem>
                        </Header.Nav>
                    </Header.Frame>

                    <Feature>
                        <Feature.LargeText>
                            Take A Step Closer Towards
                            <br/>
                            Language Proficiency
                        </Feature.LargeText>
                        <Feature.SmallText>
                            Even with just a few minutes a day
                        </Feature.SmallText>

                        <Feature.ButtonContainer>
                            <Feature.MainButton>
                                Start Learning
                            </Feature.MainButton>

                            <Feature.SecondaryButton>
                                How It Works
                            </Feature.SecondaryButton>
                        </Feature.ButtonContainer>
                    </Feature>
                </Header>
            </Content.Group>

            {/* <Content.Group>
                <Courses>
                    <Courses.Title>
                        Courses
                    </Courses.Title>
                </Courses>
            </Content.Group> */}
        </Content>
        </>
    )
}

export default Home
