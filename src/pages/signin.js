import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { isMobile } from 'react-device-detect'
import { auth, provider } from './../firebase/firebase'
import { Content, Form, Header } from '../components'
import * as ROUTES from '../constants/routes'

function SignIn() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const handleSignIn = (e) => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(email, password).then((userCredential) => {
            console.log(userCredential)
        }).catch((error) => {
            setEmail('')
            setPassword('')
            setError(error.message)
        });
    }

    const handleGoogleSignIn = () => {
        auth.signInWithRedirect(provider).catch((error) => {
            setEmail('')
            setPassword('')
            setError(error.message)
        });
    }

    return (
        <Content>
            <Header>
                <Header.Frame>
                    <Header.Logo to={ROUTES.WELCOME}/>
                </Header.Frame>
            </Header>

            <Content.Group src={!isMobile && `../../images/home_background.jpg`} fitScreen gradient>
                <Form isMobile={isMobile}>
                    <Form.Frame>
                        <Form.Title>
                            Sign In
                        </Form.Title>

                        {error && <Form.Error>{error}</Form.Error>}

                        <Form.Input
                            placeholder="Email Address"
                            value={email}
                            type="email"
                            onChange={({ target }) => setEmail(target.value)}
                        />
                        <Form.Input
                            placeholder="Password"
                            value={password}
                            type="password"
                            onChange={({ target }) => setPassword(target.value)}
                        />

                        <Form.Button onClick={handleSignIn}>
                            Sign In
                        </Form.Button>

                        <Form.Text>
                            Don't have an account?
                            <Link to={ROUTES.SIGN_UP}>
                                Sign Up
                            </Link>
                        </Form.Text>
                    </Form.Frame>

                    <Form.Divider/>

                    <Form.Google onClick={handleGoogleSignIn}/>
                </Form>
            </Content.Group>
        </Content>
    )
}

export default SignIn
