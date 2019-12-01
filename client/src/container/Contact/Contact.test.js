import React from 'react';
import {render, fireEvent} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import {Provider} from 'react-redux'
import Contact from './Contact';
import store from '../../store'
import {
  BrowserRouter as Router
} from "react-router-dom";

jest.mock('../../store/actions/contact')

test('use jsdom in this test file', () => {
    const element = document.createElement('div');
    expect(element).not.toBeNull();
  });

describe ('check contain text in Passwords page', () =>{
    test('Passwords page have intented text', ()=>{
      const { getByTestId } = render(
        <Provider store={store}>
          <Router>
            <Contact />
          </Router>
        </Provider>
        )
      expect(getByTestId ('title-contact')).toHaveTextContent(/Contact/i)
    })
  })

  describe ('check click function in Password Page', () =>{
    test('check from is appear when add buttom cliked', ()=>{
      const {container, getByTestId} = render(
        <Provider store={store}>
          <Router>
            <Contact />
          </Router>
        </Provider>
        )
        fireEvent.click(getByTestId('add-new-contact'))
        expect(getByTestId('title-form-contact')).toBeInTheDocument()
        expect(getByTestId('title-form-contact')).toHaveTextContent(/Add New Contact/i)
    })
  })

describe ('Search Password', () =>{
    test('check search should return a result when user type on search bar', ()=>{
      const {container, getByTestId} = render(
        <Provider store={store}>
          <Router>
            <Contact />
          </Router>
        </Provider>
        )
        fireEvent.change(getByTestId('contact-search-bar'), { target: { value: '@' } })
        expect(getByTestId('contact-search-bar').value).toBe('@')
        expect(getByTestId('card')).toBeInTheDocument()
    })
})


describe ('Create Contact', () =>{
  test('It should create new contact when all requirement is fulfilled ', async ()=>{
    const {container, getByTestId} = render(
    <Provider store={store}>
      <Router>
        <Contact/>
      </Router>
    </Provider>
    )
    fireEvent.click(getByTestId('add-new-contact'))

    fireEvent.change(getByTestId('input-title'), { target: { value: 'Mr'} })
    expect(getByTestId('input-title').value).toBe('Mr')

    fireEvent.change(getByTestId('input-firstname'), { target: { value: 'uzai'} })
    expect(getByTestId('input-firstname').value).toBe('uzai')

    fireEvent.change(getByTestId('input-middlename'), { target: { value: 'bin'} })
    expect(getByTestId('input-middlename').value).toBe('bin')

    fireEvent.change(getByTestId('input-lastname'), { target: { value: 'sindiko'} })
    expect(getByTestId('input-lastname').value).toBe('sindiko')

    fireEvent.change(getByTestId('input-username'), { target: { value: 'UzaiSindiko'} })
    expect(getByTestId('input-username').value).toBe('UzaiSindiko')

    fireEvent.change(getByTestId('input-gender'), { target: { value: 'male'} })
    expect(getByTestId('input-gender').value).toBe('male')

    fireEvent.change(getByTestId('input-company'), { target: { value: 'go-jek'} })
    expect(getByTestId('input-company').value).toBe('go-jek')

    fireEvent.change(getByTestId('input-note'), { target: { value: 'note'} })
    expect(getByTestId('input-note').value).toBe('note')

    fireEvent.submit(getByTestId('create-contact-btn'))
    expect(document.querySelector('.swal2-title')).toBeInTheDocument()
    expect(document.querySelector('.swal2-title')).toHaveTextContent(/Success Add Contact/i)
  })
})

describe ('Fail Create Contact', () =>{
  test('It should show error when one of requirement is not fulfilled ', async ()=>{
    const {container, getByTestId} = render(
    <Provider store={store}>
      <Router>
        <Contact />
      </Router>
    </Provider>
    )
    fireEvent.click(getByTestId('add-new-contact'))
    fireEvent.submit(getByTestId('create-contact-btn'))
    expect(document.querySelector('.swal2-title')).toBeInTheDocument()
    expect(document.querySelector('.swal2-title')).toHaveTextContent(/Oops.../i)
  })
})

describe ('Update Contact', () =>{
  test('check update btn', async ()=>{
    const {container, getByTestId} = render(
    <Provider store={store}>
      <Router>
        <Contact />
      </Router>
    </Provider>
    )
    fireEvent.click(getByTestId('card-update-btn'))
  })
})

describe ('Delete Contact', () =>{
  test('check delete btn', async ()=>{
    const {container, getByTestId} = render(
    <Provider store={store}>
      <Router>
        <Contact />
      </Router>
    </Provider>
    )
    fireEvent.click(getByTestId('card-delete-btn'))
  })
})