import React from 'react'
import {
    Route,
    Redirect,
    useLocation
  } from "react-router-dom";

export default function PrivateRoute(props) {
    const location = useLocation()

    return (
        <Route path={props.path}>
            {
                localStorage.getItem('token')
                ? props.children
                : <Redirect
                    to={{
                        pathname: "/login",
                        state: { from: location.pathname }
                    }}
                    />
            }
        </Route>
    )
}