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


jest.mock('../../store/actions/users')


describe("Login and Register should renders without crashing", ()=> {
    const { container ,getByTestId, debug } = render(
        <Provider store={ store }>
            <Router>
                <Login />
            </Router>
        </Provider>
    )
    
    test('sholud have title with word Register and Login', () =>{
        expect(getByTestId('title-register')).toHaveTextContent('Register')
        fireEvent.click(getByTestId('to-login'))
        expect(getByTestId('title-login')).toHaveTextContent('Login')
    })
})

describe ('Fail Register', () =>{
    test('It should handle event fail when email and password is invalid', async ()=>{
      const {debug, container, getByTestId} = render(
      <Provider store={store}>
        <Router>
          <Login/>
        </Router>
      </Provider>
      )
      fireEvent.change(getByTestId('input-email'), { target: { value: 'notValidEmail' } })
      expect(getByTestId('input-email').value).toBe('notValidEmail')
      fireEvent.change(getByTestId('input-pass'), { target: { value: 'notValidPass' } })
      expect(getByTestId('input-pass').value).toBe('notValidPass')
      fireEvent.click(getByTestId('register-btn'))
      expect(document.querySelector('.swal2-title')).toBeInTheDocument()
      expect(document.querySelector('.swal2-title')).toHaveTextContent(/Oops../i)
    })
})

describe ('Success Register', () =>{
    test('It should handle event success when email and password is correct', async ()=>{
      const {debug,  getByTestId} = render(
      <Provider store={store}>
        <Router>
          <Login/>
        </Router>
      </Provider>
      )
      fireEvent.change(getByTestId('input-email'), { target: { value: 'satu@satu.com' } })
      expect(getByTestId('input-email').value).toBe('satu@satu.com')
      fireEvent.change(getByTestId('input-pass'), { target: { value: 'satu' } })
      expect(getByTestId('input-pass').value).toBe('satu')
      fireEvent.click(getByTestId('register-btn'))
      expect(document.querySelector('.swal2-title')).toBeInTheDocument()
    })
})

describe ('Fail Login', () =>{
    test('It should handle event fail when email and password is incorrect', async ()=>{
      const {debug, container, getByTestId} = render(
      <Provider store={store}>
        <Router>
          <Login/>
        </Router>
      </Provider>
      )
      if(getByTestId('to-login')){
        fireEvent.click(getByTestId('to-login'))
      }
      fireEvent.change(getByTestId('input-email'), { target: { value: 'notValidEmail@mail.com' } })
      expect(getByTestId('input-email').value).toBe('notValidEmail@mail.com')
      fireEvent.change(getByTestId('input-pass'), { target: { value: 'notValidPass' } })
      expect(getByTestId('input-pass').value).toBe('notValidPass')
      fireEvent.click(getByTestId('login-btn'))
      expect(document.querySelector('.swal2-title')).toBeInTheDocument()
      expect(document.querySelector('.swal2-title')).toHaveTextContent(/Oops../i)
    })
})

describe ('Success Login', () =>{
    test('It should handle event success when email and password is correct', async ()=>{
      const {debug,  getByTestId} = render(
      <Provider store={store}>
        <Router>
          <Login/>
        </Router>
      </Provider>
      )
      if(getByTestId('to-login')){
        fireEvent.click(getByTestId('to-login'))
      }
      fireEvent.change(getByTestId('input-email'), { target: { value: 'satu@satu.com' } })
      expect(getByTestId('input-email').value).toBe('satu@satu.com')
      fireEvent.change(getByTestId('input-pass'), { target: { value: 'satu' } })
      expect(getByTestId('input-pass').value).toBe('satu')
      fireEvent.click(getByTestId('login-btn'))
      expect(document.querySelector('.swal2-title')).toBeInTheDocument()
    })
})
