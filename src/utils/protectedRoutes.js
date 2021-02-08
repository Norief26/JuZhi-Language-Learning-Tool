import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import * as ROUTES from '../constants/routes'

export function RedirectedRoute({ user, authPath, children, ...props}) {
    return (
        <Route {...props}
            render={() => {
                if (!user) { return children }

                return <Redirect to={{ pathname: authPath }}/>
            }}
        />
    )
}

export function ProtectedRoute({ user, children, ...props}) {
    return (
        <Route {...props} 
            render={({ location }) => {
                if (user) { return children }

                return <Redirect to={{ pathname: ROUTES.SIGN_IN, state: { from: location }}}/> 
            }}
        />
    )
}