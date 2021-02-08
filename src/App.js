import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Switch } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import { auth } from './firebase/firebase'
import { login, logout, getUser } from './redux/userSlice'
import { RedirectedRoute, ProtectedRoute } from './utils/protectedRoutes'
import { Home, Signin, Signup, Welcome } from './pages'
import * as ROUTES from './constants/routes'

function App() {
    const dispatch = useDispatch()
    const [isLoading, setLoading] = useState(true)
    const user = useSelector(getUser)

    useEffect(() => {
        auth.onAuthStateChanged((authUser) => {
            if (authUser) {
                dispatch(login({
                    uid: authUser.uid,
                    displayName: authUser.displayName,
                    photoURL: authUser.photoURL,
                    email: authUser.email,
                }))
            } else {
                dispatch(logout())
            }
            setLoading(false)
        })
    }, [dispatch])

    if (isLoading) return null;
    
    return (
        <Router>
            <Switch>
                <ProtectedRoute user={user} path={ROUTES.HOME}>
                    <Home/>
                </ProtectedRoute>

                <RedirectedRoute user={user} authPath={ROUTES.HOME} path={ROUTES.SIGN_IN}>
                    <Signin/>
                </RedirectedRoute>

                <RedirectedRoute user={user} authPath={ROUTES.HOME} path={ROUTES.SIGN_UP}>
                    <Signup/>
                </RedirectedRoute>

                <RedirectedRoute user={user} authPath={ROUTES.HOME} path={ROUTES.WELCOME}>
                    <Welcome/>
                </RedirectedRoute>
            </Switch>
        </Router>
    )
}

export default App
