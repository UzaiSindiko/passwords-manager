import React from 'react';
import {render, fireEvent} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { Provider } from 'react-redux'
import Note from './Note';
import store from '../../store'
import {
  BrowserRouter as Router
} from "react-router-dom";

jest.mock('../../store/actions/notes')

describe ('check contain text in Note page', () =>{
    test('Note page have intented text', ()=>{
      const { getByTestId } = render(
        <Provider store={store}>
          <Router>
            <Note />
          </Router>
        </Provider>
        )
      expect(getByTestId ('title-note')).toHaveTextContent(/Note/i)
    })
})

describe ('check click function in Note Page', () =>{
test('check from is appear when add buttom cliked', ()=>{
    const {container, getByTestId} = render(
    <Provider store={store}>
        <Router>
        <Note />
        </Router>
    </Provider>
    )
    fireEvent.click(getByTestId('create-note-btn'))
    expect(getByTestId('title-form-note')).toBeInTheDocument()
    expect(getByTestId('title-form-note')).toHaveTextContent(/Add New Note/i)
})
})

describe ('Search Notes', () =>{
    test('check search should return a result when user type on search bar', ()=>{
      const {container, getByTestId} = render(
        <Provider store={store}>
          <Router>
            <Note />
          </Router>
        </Provider>
        )
        fireEvent.change(getByTestId('note-search-bar'), { target: { value: 'x' } })
        expect(getByTestId('note-search-bar').value).toBe('x')
        expect(getByTestId('card')).toBeInTheDocument()
    })
})

describe ('Create Note', () =>{
  test('It should create new note when one of requirement is fulfilled ', ()=>{
    const {container, getByTestId} = render(
    <Provider store={store}>
      <Router>
        <Note />
      </Router>
    </Provider>
    )
    fireEvent.click(getByTestId('create-note-btn'))

    fireEvent.change(getByTestId('input-name'), { target: { value: 'my firts note'} })
    expect(getByTestId('input-name').value).toBe('my firts note')
    
    fireEvent.change(getByTestId('input-note'), { target: { value: 'note'} })
    expect(getByTestId('input-note').value).toBe('note')

    fireEvent.submit(getByTestId('submit-note-btn'))
    expect(document.querySelector('.swal2-title')).toBeInTheDocument()
    expect(document.querySelector('.swal2-title')).toHaveTextContent(/Success Add Note/i)
  })
})

describe ('Fail Create Note', () =>{
  test('It should show error when all requirement is not fulfilled ', ()=>{
    const {container, getByTestId} = render(
    <Provider store={store}>
      <Router>
        <Note />
      </Router>
    </Provider>
    )
    fireEvent.click(getByTestId('create-note-btn'))
    fireEvent.submit(getByTestId('submit-note-btn'))
    expect(document.querySelector('.swal2-title')).toBeInTheDocument()
    expect(document.querySelector('.swal2-title')).toHaveTextContent(/Oops.../i)
  })
})

describe ('Update Note', () =>{
  test('check update btn', ()=>{
    const {container, getByTestId} = render(
    <Provider store={store}>
      <Router>
        <Note />
      </Router>
    </Provider>
    )
    fireEvent.click(getByTestId('card-update-btn'))
    expect(getByTestId('title-form-note')).toBeInTheDocument()
    expect(getByTestId('title-form-note')).toHaveTextContent(/Add New Note/i)
    expect(getByTestId('input-name').value).toBe('xxxx')
    fireEvent.submit(getByTestId('submit-note-btn'))
    const passForm = document.querySelector('note-form')
    expect(passForm).not.toBeInTheDocument()
  })
})

describe ('Delete Note', () =>{
  test('check delete btn', ()=>{
    const {container, getByTestId} = render(
    <Provider store={store}>
      <Router>
        <Note />
      </Router>
    </Provider>
    )
    fireEvent.click(getByTestId('card-delete-btn'))
    const card = document.querySelector('card')
    expect(card).not.toBeInTheDocument()
  })
})