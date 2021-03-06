import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Switch } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import db, { auth } from './firebase/firebase'
import { login, logout, getUser } from './redux/userSlice'
import { RedirectedRoute, ProtectedRoute } from './utils/protectedRoutes'
import { Course, Browse, Home, Signin, Signup, Welcome } from './pages'
import * as ROUTES from './constants/routes'

function App() {
    const dispatch = useDispatch()
    const [isLoading, setLoading] = useState(true)
    const user = useSelector(getUser)

    useEffect(() => {
        auth.getRedirectResult().then((result) => {
            if(result.credential && result.additionalUserInfo.isNewUser) {
                const user = result.user
                return db.collection('users').doc(user.uid).set({
                    id: user.uid,
                    email: user.email,
                    decks: []
                })
            }
        })

        const authListener = auth.onAuthStateChanged((authUser) => {
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

        return () => {
            authListener();
        }
    }, [dispatch])

    if (isLoading) return null;
    
    return (
        <Router>
            <Switch>
                <ProtectedRoute user={user} exact path={ROUTES.HOME}>
                    <Home/>
                </ProtectedRoute>

                <ProtectedRoute user={user} path={ROUTES.BROWSE}>
                    <Browse/>
                </ProtectedRoute>

                <ProtectedRoute user={user} path={ROUTES.COURSE}>
                    <Course/>
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
