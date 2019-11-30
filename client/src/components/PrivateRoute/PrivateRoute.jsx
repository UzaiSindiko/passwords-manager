import React, {useEffect} from 'react'
import {
    Route,
    Redirect,
    useLocation
  } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'

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