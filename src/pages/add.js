import React from 'react'
// import { useSelector } from 'react-redux'
import { auth } from './../firebase/firebase'
// import { getUser } from '../redux/userSlice'
import { Content, Deck, Header } from '../components'
import * as ROUTES from '../constants/routes'

function Add() {
    // const user = useSelector(getUser)
    const deckList = true;

    const handleSignOut = () => {
        auth.signOut().catch((error) => {
            console.log(error)
        })
    }

    return (
        <Content>
            <Header>
                <Header.Frame>
                    <Header.Logo to={ROUTES.WELCOME}/>
                    <Header.DropDownButton>
                        Account
                        <Header.DropDownMenu>
                            <Header.DropDownMenuItem onClick={handleSignOut}>
                                Sign Out
                            </Header.DropDownMenuItem>
                        </Header.DropDownMenu>
                    </Header.DropDownButton>
                </Header.Frame>
            </Header>
            
            <Content.Group src={`../../images/home_background.jpg`} gradient fitScreen>
                <Deck>
                    <Deck.Title>{ deckList ? 'Add Deck' : 'No Decks Found' }</Deck.Title>

                    {
                    deckList &&
                    <Deck.CourseList>
                        <Deck.Course>
                            <Deck.Image/>
                            <Deck.Data>
                                <span>Remaining</span>
                                <span>0</span>
                            </Deck.Data>
                        </Deck.Course>
                        <Deck.Course>
                            <Deck.Image/>
                            <Deck.Data>
                                <span>Remaining</span>
                                <span>0</span>
                            </Deck.Data>
                        </Deck.Course>
                        <Deck.Course>
                            <Deck.Image/>
                            <Deck.Data>
                                <span>Remaining</span>
                                <span>0</span>
                            </Deck.Data>
                        </Deck.Course>
                        <Deck.Course>
                            <Deck.Image/>
                            <Deck.Data>
                                <span>Remaining</span>
                                <span>0</span>
                            </Deck.Data>
                        </Deck.Course>
                    </Deck.CourseList>
                    }

                    <Deck.Button to={ROUTES.HOME}>Return to Home</Deck.Button>
                </Deck>
            </Content.Group>
        </Content>
    )
}

export default Add