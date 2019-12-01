import React from 'react';
// import ReactDOM from 'react-dom';
import {render, fireEvent} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { Provider } from 'react-redux'
import Card from './Card';
import store from '../../store'
import {
  BrowserRouter as Router
} from "react-router-dom";

jest.mock('../../store/actions/Pass')

describe ('renders Card', () =>{
  test('renders without crashing', ()=>{
    render(
    <Provider store={store}>
      <Router>
        <Card getOne={ 'Something' } del={ 'Something' } key={ 'Something'} name={'Something'} username={ 'Something' } passId={'Something' } URL="contactsplus.com" />
      </Router>
    </Provider>
    )
  })
})