import React from 'react'
import { Link } from 'react-router-dom'
import { isMobile } from 'react-device-detect'
import { Content, Form } from '../components'
import * as ROUTES from '../constants/routes'

function SignUp() {
    return (
        <Content>
            <Content.Group src={!isMobile && '../images/home_background.jpg'} fitScreen>
                <Form isMobile={isMobile}>
                    <Form.Frame>
                        <Form.Logo to={ROUTES.HOME} src={'../images/logo_black.png'}/>
                        <Form.Input
                            placeholder="Email Address"
                        />
                        <Form.Input
                            placeholder="Password"
                        />
                        <Form.Input
                            placeholder="Confirm Password"
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

                    <Form.Google/>
                </Form>
            </Content.Group>
        </Content>
    )
}

export default SignUp
