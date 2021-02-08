import React from 'react'
import { Link } from 'react-router-dom'
import { isMobile } from 'react-device-detect'
import { Content, Form } from '../components'
import * as ROUTES from '../constants/routes'

function SignIn() {
    return (
        <Content>
            <Content.Group src={!isMobile && `../../images/home_background.jpg`} fitScreen>
                <Form isMobile={isMobile}>
                    <Form.Frame>
                        <Form.Logo to={ROUTES.HOME} src={'../images/logo_black.png'}/>
                        <Form.Input
                            placeholder="Email Address"
                        />
                        <Form.Input
                            placeholder="Password"
                        />

                        <Form.Button>
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
