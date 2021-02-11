import React from 'react'
// import { useSelector } from 'react-redux'
import { auth } from './../firebase/firebase'
// import { getUser } from '../redux/userSlice'
import { Content, Header } from '../components'
import * as ROUTES from '../constants/routes'

function Home() {
    // const user = useSelector(getUser)

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

            </Content.Group>
        </Content>
    )
}

export default Home