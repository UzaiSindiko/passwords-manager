import React from 'react'
import './Navbar.css'

export default function Navbar() {
    return (
        <nav className="nav-con d-flex align-items-center justify-content-between">
            <i className="logo fab fa-keycdn"></i>
            <input className="search" type="search" placeholder="Search......"/>
            <i className="logout fas fa-sign-out-alt"></i>
        </nav>
    )
}
