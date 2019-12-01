import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './Navbar.css'
import { logout } from '../../store/actions/users'


export default function Navbar() {
    const dispatch = useDispatch()

    return (
        <nav className="nav-con d-flex align-items-center justify-content-between">
            <i className="logo fab fa-keycdn"></i>
            <input className="search" type="search" placeholder="Search......"/>
            <i onClick={ (e) => { dispatch(logout())  } } className="logout fas fa-sign-out-alt"></i>
        </nav>
    )
}
