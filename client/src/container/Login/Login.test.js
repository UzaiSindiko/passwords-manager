import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from "react-router-dom";
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Login from './Login'
import { Provider } from 'react-redux'
import store from '../../store'
import { isTSAnyKeyword } from '@babel/types';

    describe("Login", ()=> {
        const { container ,getByTestId, debug } = render(
            <Provider store={ store }>
                <Router>
                    <Login />
                </Router>
            </Provider>
        )
        
        test('sholud have title with word Login', () =>{
            expect(getByTestId('title-login')).toHaveTextContent('Login')
            fireEvent.click(getByTestId('login-btn'))
        })
    })

