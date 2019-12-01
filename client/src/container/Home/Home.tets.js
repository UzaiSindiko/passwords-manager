import React from 'react';
// import ReactDOM from 'react-dom';
import {render, fireEvent} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { Provider } from 'react-redux'
import Home from './Home';
import store from '../../store'
import {
  BrowserRouter as Router
} from "react-router-dom";

jest.mock('../store/actions/users')

describe ('renders Home', () =>{
  test('renders without crashing', ()=>{
    localStorage.getItem('token')
    render(
    <Provider store={store}>
      <Router>
        <Home/>
      </Router>
    </Provider>
    )
  })
})