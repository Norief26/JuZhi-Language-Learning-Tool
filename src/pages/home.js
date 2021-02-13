import React from 'react'
import { Content, Deck, Header } from '../components'
import * as ROUTES from '../constants/routes'

function Home() {
    const deckList = true;

    return (
        <Content>
            <Header fixed>
                <Header.Logo to={ROUTES.WELCOME}/>
                <Header.AccountMenu/>
            </Header>
            
            <Content.Group src={`../../images/home_background.jpg`} gradient fitScreen>
                <Deck>
                    <Deck.Title>{ deckList ? 'Select Deck' : 'No Decks Found' }</Deck.Title>

                    {
                    deckList &&
                    <Deck.CourseList>
                        <Deck.Course to={ROUTES.COURSE}>
                            <Deck.Image/>
                            <Deck.Data>
                                <span>Remaining</span>
                                <span>0</span>
                            </Deck.Data>
                        </Deck.Course>
                    </Deck.CourseList>
                    }

                    <Deck.Button to={ROUTES.BROWSE}>Add Deck</Deck.Button>
                </Deck>
            </Content.Group>
        </Content>
    )
}

export default Home