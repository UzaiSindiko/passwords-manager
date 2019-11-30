import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { is_Login } from '../../store/actions/users'
import {
    Link,
    Route,
    Switch,
    withRouter
  } from "react-router-dom";
import Navbar from '../../components/Navbar/Navbar'
import './Home.css'
import PrivateRoute from '../../components/PrivateRoute/PrivateRoute'
import All from '../All/All'
import Pass from '../Pass/Pass'
import Contact from '../Contact/Contact'
import Note from '../Note/Note'

export default function Home() {
    const dispatch = useDispatch()
    const { isLogin } = useSelector(state => state.users)

    useEffect(()=>{
        if(localStorage.getItem('token')){
            dispatch(is_Login())
        }
    }, []) 


    return (
        <div className="home">
            <Navbar />
            <div className="menu d-flex aling-items-ceter justify-content-around">
                <Link to="all"><span>All</span></Link>
                <Link to="pass"><span>Password</span></Link>
                <Link to="contact"><span>Contact</span></Link>
                <Link to="note"><span>Note</span></Link>
            </div>

            <div className="nest-con">
                <Switch>
                    <PrivateRoute path="/all">
                        <All />
                    </PrivateRoute>

                    <PrivateRoute path="/contact">
                        <Contact />
                    </PrivateRoute>

                    <PrivateRoute path="/pass">
                        <Pass />
                    </PrivateRoute>

                    <PrivateRoute path="/note">
                        <Note />
                    </PrivateRoute>
                </Switch>
            </div>

        </div>
    )
}
