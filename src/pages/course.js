import React from 'react'
import { Card, Content, Header } from '../components'
import * as ROUTES from '../constants/routes'

function Course() {
    return (
        <Content>
            <Header>
                <Header.Logo to={ROUTES.WELCOME}/>
                <Header.AccountMenu/>
            </Header>
            
            <Content.Group src={`../../images/home_background.jpg`} gradient fitScreen headerOffset>
                <Card>
                    <Card.Frame>
                        
                    </Card.Frame>
                </Card>
            </Content.Group>
        </Content>
    )
}

export default Course
