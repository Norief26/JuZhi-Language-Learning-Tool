import React from 'react'
import { Browse, Content, Header } from '../components'
import * as ROUTES from '../constants/routes'

function BrowsePage() {
    // const deckList = true;

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
                            <Browse.FilterItem>
                                Item 1
                            </Browse.FilterItem>
                        </Browse.FilterCategory>

                        <Browse.FilterCategory>
                            <Browse.FilterTitle>
                                Languages:
                            </Browse.FilterTitle>
                            <Browse.FilterItem>
                                Item 1
                            </Browse.FilterItem>
                            <Browse.FilterItem>
                                Item 2
                            </Browse.FilterItem>
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