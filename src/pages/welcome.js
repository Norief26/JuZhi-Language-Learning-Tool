import React from 'react'
import { Content, Catalog, Header, Feature } from '../components'
import * as ROUTES from '../constants/routes'

function Home() {
    return (
        <>
        <Content>
            <Header>
                <Header.Frame>
                <Header.Logo to={ROUTES.WELCOME}/>
                    <Header.Nav>
                        <Header.NavItem to={ROUTES.WELCOME}>ABOUT US</Header.NavItem>
                        <Header.NavItem to={ROUTES.SIGN_IN}>LOG IN</Header.NavItem>
                        <Header.EmphasizedNavItem to={ROUTES.SIGN_UP}>SIGN UP</Header.EmphasizedNavItem>
                    </Header.Nav>
                </Header.Frame>
            </Header>

            <Content.Group src={`../../images/home_background.jpg`} gradient fitScreen>
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
                            <Feature.MainButton to={ROUTES.SIGN_UP}>
                                START LEARNING
                            </Feature.MainButton>

                            <Feature.SecondaryButton to={ROUTES.WELCOME}>
                                How It Works
                            </Feature.SecondaryButton>
                        </Feature.ButtonContainer>
                    </Feature>
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
