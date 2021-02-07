import React from 'react'
import { Content, Catalog, Header, Feature } from '../components'
import * as ROUTES from '../constants/routes'

function Home() {
    return (
        <>
        <Content>
            <Content.Group src={`../../images/home_background.jpg`} gradient fitScreen>
                <Header>
                    <Header.Frame>
                        <Header.Logo to={ROUTES.HOME}/>
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

            <Content.Group>
                <Catalog>
                    <Catalog.Title>
                        Course Catalog
                    </Catalog.Title>
                    <Catalog.IconGroup>
                        <Catalog.Course>
                            <Catalog.Icon src={'../images/japanese.png'}/>
                            <Catalog.CourseMeta>
                                <Catalog.CourseTitle>Japanese</Catalog.CourseTitle>
                                <Catalog.CourseCardCount>0 Cards</Catalog.CourseCardCount>
                            </Catalog.CourseMeta>
                        </Catalog.Course>
                        <Catalog.Course>
                            <Catalog.Icon/>
                            <Catalog.CourseMeta>
                                <Catalog.CourseTitle>Course Title</Catalog.CourseTitle>
                                <Catalog.CourseCardCount>0 Cards</Catalog.CourseCardCount>
                            </Catalog.CourseMeta>
                        </Catalog.Course>
                        <Catalog.Course>
                            <Catalog.Icon/>
                            <Catalog.CourseMeta>
                                <Catalog.CourseTitle>Course Title</Catalog.CourseTitle>
                                <Catalog.CourseCardCount>0 Cards</Catalog.CourseCardCount>
                            </Catalog.CourseMeta>
                        </Catalog.Course>
                        <Catalog.Course>
                            <Catalog.Icon/>
                            <Catalog.CourseMeta>
                                <Catalog.CourseTitle>Course Title</Catalog.CourseTitle>
                                <Catalog.CourseCardCount>0 Cards</Catalog.CourseCardCount>
                            </Catalog.CourseMeta>
                        </Catalog.Course>
                        <Catalog.Course>
                            <Catalog.Icon/>
                            <Catalog.CourseMeta>
                                <Catalog.CourseTitle>Course Title</Catalog.CourseTitle>
                                <Catalog.CourseCardCount>0 Cards</Catalog.CourseCardCount>
                            </Catalog.CourseMeta>
                        </Catalog.Course>
                        <Catalog.Course>
                            <Catalog.Icon/>
                            <Catalog.CourseMeta>
                                <Catalog.CourseTitle>Course Title</Catalog.CourseTitle>
                                <Catalog.CourseCardCount>0 Cards</Catalog.CourseCardCount>
                            </Catalog.CourseMeta>
                        </Catalog.Course>
                        <Catalog.Course>
                            <Catalog.Icon/>
                            <Catalog.CourseMeta>
                                <Catalog.CourseTitle>Course Title</Catalog.CourseTitle>
                                <Catalog.CourseCardCount>0 Cards</Catalog.CourseCardCount>
                            </Catalog.CourseMeta>
                        </Catalog.Course>
                        <Catalog.Course>
                            <Catalog.Icon/>
                            <Catalog.CourseMeta>
                                <Catalog.CourseTitle>Course Title</Catalog.CourseTitle>
                                <Catalog.CourseCardCount>0 Cards</Catalog.CourseCardCount>
                            </Catalog.CourseMeta>
                        </Catalog.Course>
                    </Catalog.IconGroup>
                </Catalog>
            </Content.Group>
        </Content>
        </>
    )
}

export default Home
