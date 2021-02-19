import React, { useEffect, useState } from 'react'
import { Browse, Content, Header, Modal } from '../components'
import * as DATA from '../firebase/data'
import * as ROUTES from '../constants/routes'

function BrowsePage() {
    const [spokenLanguage, setSpokenLanguage] = useState("english")
    const [languages, setLanguages] = useState([])
    const [filters, setFilters] = useState([])
    const [courses, setCourses] = useState([])
    const [modal, setModal] = useState(false)
    const [selectedCourse, setSelectedCourse] = useState({})

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

            <Content.Group fitScreen headerOffset>
                <Browse>
                    <Browse.FilterSection>
                        <Browse.FilterCategory>
                            <Browse.FilterHeader>
                                Select Your Language:
                            </Browse.FilterHeader>

                            <Browse.LanguageMenu languages={languages} setSpokenLanguage={setSpokenLanguage}/>
                        </Browse.FilterCategory>

                        <Browse.FilterCategory>
                            <Browse.FilterHeader>
                                Languages:
                            </Browse.FilterHeader>

                            {languages.map((language) => {
                                if(language.name === spokenLanguage) return null

                                return (
                                    <Browse.FilterItem key={language.id} setFilters={setFilters} languageName={language.name}>
                                        {language.name}
                                    </Browse.FilterItem>
                                )
                            })}
                        </Browse.FilterCategory>
                    </Browse.FilterSection>

                    <Browse.CourseSection>
                        <Browse.Title>
                            Browse Courses
                        </Browse.Title>

                        <Browse.CourseList>
                            {!courses.length ? 'No courses found.' : courses.map((course) => (
                                <Browse.Course key={course.id} onClick={() => {
                                    setSelectedCourse(course)    
                                    setModal(true)
                                }}>
                                    <Browse.CourseImage src={`../../images/${course.src}`}/>
                                    <Browse.CourseData>
                                        {course.name}
                                    </Browse.CourseData>
                                </Browse.Course>
                            ))}
                        </Browse.CourseList>
                    </Browse.CourseSection>
                </Browse>
            </Content.Group>

            <Modal modal={modal} setModal={setModal}>
                <Browse.Course>
                    <Browse.CourseImage src={`../../images/${selectedCourse.src}`}/>
                    <Browse.CourseData>
                        {selectedCourse.name}
                    </Browse.CourseData>
                </Browse.Course>
                Add this deck?
                <button>Cancel</button>
                <button>Confirm</button>
            </Modal>
        </Content>
    )
}

export default BrowsePage