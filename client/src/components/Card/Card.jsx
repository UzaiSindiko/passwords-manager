import React from 'react'
import './Card.css'

export default function Card() {
    return (
        <div className="pass-card">
            <div className="d-flex">
                <div className="icon">
                    <img src="//logo.clearbit.com/spotify.com?size=95" alt=""/>
                </div>
                <div className="p-1">
                    <h4>Name Password</h4>
                    <span>uzai.sindiko@gmail.com</span>
                    <div className="actions d-flex align-items-center justify-content-end">
                        <i className="fas fa-pen"></i>
                        <i className="fas fa-trash pl-3"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}
