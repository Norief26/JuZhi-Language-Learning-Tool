import React from 'react'
import { useSelector } from 'react-redux'
import { auth } from './../firebase/firebase'
import { getUser } from '../redux/userSlice'
import { Content, Feature, Header } from '../components'
import * as ROUTES from '../constants/routes'

function Home() {
    const user = useSelector(getUser)
    console.log(user)

    const handleSignOut = () => {
        auth.signOut().catch((error) => {
            console.log(error)
        })
    }

    return (
        <Content>
            <Content.Group src={`../../images/home_background.jpg`} gradient fitScreen>
                <Header>
                    <Header.Frame>
                        <Header.Logo to={ROUTES.WELCOME}/>
                        <Header.Nav>
                            <button onClick={handleSignOut}>Sign Out</button>
                        </Header.Nav>
                    </Header.Frame>

                    <Feature>
                        <Feature.SmallText>
                            {user.displayName}
                        </Feature.SmallText>

                        <Feature.SmallText>
                            {user.email}
                        </Feature.SmallText>
                    </Feature>
                </Header>
            </Content.Group>
        </Content>
    )
}

export default Home