import React, { useEffect, useState } from 'react'
import { Browse, Content, Header } from '../components'
import * as DATA from '../firebase/data'
import * as ROUTES from '../constants/routes'

function BrowsePage() {
    const [spokenLanguage, setSpokenLanguage] = useState("english")
    const [languages, setLanguages] = useState([])
    const [filters, setFilters] = useState([])
    // const deckList = true;

    useEffect(() => {
        DATA.getLanguages().then((languages) => {
            setLanguages(languages)
        });
    }, [])

    useEffect(() => {
        const allFilters = filters.concat(spokenLanguage)

        // DATA.browseCourses(allFilters).then((courses) => {
        //     console.log(courses)
        // })
    }, [filters, spokenLanguage])

    return (
        <Content>
            <Header>
                <Header.Logo to={ROUTES.WELCOME}/>
                <Header.AccountMenu/>
            </Header>

            <Content.Group src={`../../images/home_background.jpg`} gradient fitScreen headerOffset>
                <Browse>
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
                            {languages.map((language) => (
                                <Browse.FilterItem key={language.id} language={language.name} filters={filters} setFilters={setFilters}>
                                    {language.name}
                                </Browse.FilterItem>
                            ))}
                        </Browse.FilterCategory>
                    </Browse.FilterList>

                    <Browse.CourseList>
                        Course List
                    </Browse.CourseList>
                </Browse>
            </Content.Group>
        </Content>
    )
}

export default BrowsePage