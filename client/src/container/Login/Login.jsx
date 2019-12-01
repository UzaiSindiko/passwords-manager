import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
    useLocation,
    useHistory
  } from "react-router-dom";

import { login, register } from '../../store/actions/users'
import './Login.css'

export default function Login() {
    const dispatch = useDispatch()
    const location = useLocation()
    const history = useHistory()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPass, setConfirmPass] = useState('')
    const [loginFrom, setLoginForm] = useState(false)

    function handleLogin(){
        dispatch(login({ email, password, location, history }))
        setEmail("")
        setPassword("")
    }
    
    function handleRegister(){
        dispatch(register({ email, password, history, location }))
        setEmail("")
        setPassword("")
        setConfirmPass("")
    }

    if(loginFrom){
        return (
            <div className="login-con d-flex justify-content-center align-items-center">
                <div className="animated flipInY form-con">
                    <div className="d-flex align-items-center justify-content-between">
                        <h1 data-testid="title-login" >Login</h1>
                        <span className="to" onClick={() => setLoginForm(false) }>Or Register</span>
                    </div>
                    <form  onSubmit={ (e) =>{
                        e.preventDefault()
                        handleLogin()
                    }}
                    className="mt-4 d-flex flex-column align-items-center justify-content-center" >
    
                        <input data-testid="input-email" value={ email } onChange={ (e) => setEmail( e.target.value ) } type="text" placeholder="Enter Email"/>
                        <input data-testid="input-pass" value={ password } onChange={ (e) => setPassword( e.target.value ) } type="password" placeholder="Enter Master Password"/>
                        <button data-testid="login-btn" className="btn btn-danger rounded-pill w-75" >Login</button>
                    </form>
                </div>
            </div>
        )
    }
    return (
        <div className="login-con d-flex justify-content-center align-items-center">
            <div className="animated flipInY form-con">
                <div className="d-flex align-items-center justify-content-between">
                    <h1 data-testid="title-register" >Register</h1>
                    <span className="to"  data-testid="to-login" onClick={() => setLoginForm(true) }>Or Login</span>
                </div>
                <form  onSubmit={ (e) =>{
                    e.preventDefault()
                    handleRegister()
                }}
                className="mt-4 d-flex flex-column align-items-center justify-content-center" >

                    <input data-testid="input-email" value={ email } onChange={ (e) => setEmail( e.target.value ) } type="text" placeholder="Enter Email"/>
                    <input data-testid="input-pass" value={ password } onChange={ (e) => setPassword( e.target.value ) } type="password" placeholder="Enter Master Password"/>
                    <input value={ confirmPass } onChange={ (e) => setConfirmPass( e.target.value ) } type="password" placeholder="Confirm Master Password"/>
                    <input type="text" placeholder="Reminder (Optional)"/>
                    <button data-testid="register-btn" className="btn btn-danger rounded-pill w-75" >Login</button>
                </form>
            </div>
        </div>
    )
}
