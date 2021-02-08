import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { isMobile } from 'react-device-detect'
import { auth } from './../firebase/firebase'
import { Content, Form } from '../components'
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

    return (
        <Content>
            <Content.Group src={!isMobile && `../../images/home_background.jpg`} fitScreen gradient>
                <Form isMobile={isMobile}>
                    <Form.Frame>
                        <Form.Logo to={ROUTES.WELCOME} src={'../images/logo_black.png'}/>

                        {error && <Form.Error>{error}</Form.Error>}

                        <Form.Input
                            placeholder="Email Address"
                            value={email}
                            type="email"
                            onChange={({ target }) => setEmail(target.value)}
                            autoFocus
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

                    <Form.Google/>
                </Form>
            </Content.Group>
        </Content>
    )
}

export default SignIn
