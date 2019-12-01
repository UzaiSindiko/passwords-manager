import React from 'react'
import { useDispatch } from 'react-redux'
import './Navbar.css'
import { logout } from '../../store/actions/users'
import {
    Link,
  } from "react-router-dom";

export default function Navbar() {
    const dispatch = useDispatch()

    return (
        <nav className="nav-con d-flex align-items-center justify-content-between">
            <div className="d-flex aling-items-center">
                <i className="logo fab fa-keycdn"></i>
                <h3 className="ml-2 text-white">KeyPass</h3>
            </div>
            <Link to="/login">
                 <i data-testid="logout-btn" onClick={ (e) => { dispatch(logout())}} className="logout fas fa-sign-out-alt"></i>
            </Link>
        </nav>
    )
}
