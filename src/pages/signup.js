import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { isMobile } from 'react-device-detect'
import { auth, provider } from './../firebase/firebase'
import { Content, Form } from '../components'
import * as ROUTES from '../constants/routes'

function SignUp() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirm, setConfirm] = useState('')
    const [error, setError] = useState('')

    const handleSignUp = (e) => {
        e.preventDefault();
        if(password !== confirm) {
            setEmail('')
            setPassword('')
            setConfirm('')
            setError('Passwords do not match.')
        } else {
            auth.createUserWithEmailAndPassword(email, password).then((userCredential) => {
                console.log(userCredential)
            }).catch((error) => {
                setEmail('')
                setPassword('')
                setConfirm('')
                setError(error.message)
            });
        }
    }

    const handleGoogleSignIn = () => {
        auth.signInWithRedirect(provider).catch((error) => {
            setEmail('')
            setPassword('')
            setConfirm('')
            setError(error.message)
        });
    }

    return (
        <Content>
            <Content.Group src={!isMobile && '../images/home_background.jpg'} fitScreen gradient>
                <Form isMobile={isMobile}>
                    <Form.Frame onSubmit={handleSignUp}>
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
                        <Form.Input
                            placeholder="Confirm Password"
                            value={confirm}
                            type="password"
                            onChange={({ target }) => setConfirm(target.value)}
                        />

                        <Form.Button>
                            Create Account
                        </Form.Button>

                        <Form.Text>
                            Already a member?
                            <Link to={ROUTES.SIGN_IN}>
                                Sign In
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

export default SignUp
