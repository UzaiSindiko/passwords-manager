import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from "react-router-dom";
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Navbar from './Navbar'
import { Provider } from 'react-redux'
import store from '../../store'


jest.mock('../../store/actions/users')

describe("Login and Register should renders without crashing", ()=> {
    const { container ,getByTestId, debug } = render(
        <Provider store={ store }>
            <Router>
                <Navbar />
            </Router>
        </Provider>
    )
    
    test('should logout when logout button was clicked', () =>{
        fireEvent.click(getByTestId('logout-btn'))
        expect(document.querySelector('.swal2-title')).toBeInTheDocument()
        expect(document.querySelector('.swal2-title')).toHaveTextContent(/Success Logout/)
        
    })
    debug()
})

describe ('renders Navbar', () =>{
    test('renders without crashing', ()=>{
      const { debug }  = render(
      <Provider store={store}>
        <Router>
          <Navbar/>
        </Router>
      </Provider>
      )
    })
})
