import React, { useEffect, useState } from 'react'
import { Browse, Content, Header } from '../components'
import * as DATA from '../firebase/data'
import * as ROUTES from '../constants/routes'

function BrowsePage() {
    const [spokenLanguage, setSpokenLanguage] = useState("english")
    const [languages, setLanguages] = useState([])
    const [filters, setFilters] = useState([])
    const [courses, setCourses] = useState([])
    // const deckList = true;

    useEffect(() => {
        DATA.getLanguages().then((languages) => {
            setLanguages(languages)
        });
    }, [])

    useEffect(() => {
        DATA.browseCourses(spokenLanguage, filters).then((courses) => {
            setCourses(courses)
        })
    }, [filters, spokenLanguage])

    return (
        <Content>
            <Header>
                <Header.Logo to={ROUTES.WELCOME}/>
                <Header.AccountMenu/>
            </Header>

            <Content.Group src={`../../images/home_background.jpg`} gradient fitScreen headerOffset>
                <Browse>
                    <Browse.Title>
                        Browser Courses:
                    </Browse.Title>

                    <Browse.Frame>
                        <Browse.FilterList>
                            <Browse.FilterCategory>
                                <Browse.FilterTitle>
                                    Select Your Language:
                                </Browse.FilterTitle>
                                <Browse.LanguageMenu languages={languages} setSpokenLanguage={setSpokenLanguage}/>
                            </Browse.FilterCategory>

                            <Browse.FilterCategory>
                                <Browse.FilterTitle>
                                    Languages:
                                </Browse.FilterTitle>
                                {languages.map((language) => {
                                    if(language.name === spokenLanguage) return null

                                    return (
                                        <Browse.FilterItem key={language.id} setFilters={setFilters} languageName={language.name}>
                                            {language.name}
                                        </Browse.FilterItem>
                                    )
                                })}
                            </Browse.FilterCategory>
                        </Browse.FilterList>

                        <Browse.CourseList>
                            {!courses.length ? 'No courses found.' : courses.map((course) => (
                                <Browse.Course key={course.id}>
                                    <Browse.CourseImage src={`../../images/${course.src}`}/>
                                    <Browse.CourseData>
                                        {course.name}
                                    </Browse.CourseData>
                                </Browse.Course>
                            ))}
                        </Browse.CourseList>
                    </Browse.Frame>
                    
                </Browse>
            </Content.Group>
        </Content>
    )
}

export default BrowsePage