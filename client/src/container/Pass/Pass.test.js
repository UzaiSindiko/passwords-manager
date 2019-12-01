import React from 'react';
import {render, fireEvent} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import {Provider} from 'react-redux'
import Pass from './Pass';
import store from '../../store'
import {
  BrowserRouter as Router
} from "react-router-dom";

jest.mock('../../store/actions/Pass')

test('use jsdom in this test file', () => {
    const element = document.createElement('div');
    expect(element).not.toBeNull();
  });

describe ('check contain text in Passwords page', () =>{
    test('Passwords page have intented text', ()=>{
      const { getByTestId } = render(
        <Provider store={store}>
          <Router>
            <Pass />
          </Router>
        </Provider>
        )
      expect(getByTestId ('title-password')).toHaveTextContent(/Password/i)
    })
  })

  describe ('check click function in Password Page', () =>{
    test('check from is appear when add buttom cliked', ()=>{
      const {container, getByTestId} = render(
        <Provider store={store}>
          <Router>
            <Pass />
          </Router>
        </Provider>
        )
        fireEvent.click(getByTestId('create-pass-btn'))
        expect(getByTestId('title-form-pass')).toBeInTheDocument()
        expect(getByTestId('title-form-pass')).toHaveTextContent(/Add New Password/i)
    })
  })

describe ('Search Password', () =>{
    test('check search should return a result when user type on search bar', ()=>{
      const {container, getByTestId} = render(
        <Provider store={store}>
          <Router>
            <Pass />
          </Router>
        </Provider>
        )
        fireEvent.change(getByTestId('pass-search-bar'), { target: { value: '@' } })
        expect(getByTestId('pass-search-bar').value).toBe('@')
        expect(getByTestId('card')).toBeInTheDocument()
    })
})

describe ('Password Strength Cheker', () =>{
  test('The checker color sould turn green (34eb1c) when all requirement is fulfilled', async ()=>{
    const {container, getByTestId} = render(
    <Provider store={store}>
      <Router>
        <Pass/>
      </Router>
    </Provider>
    )
    fireEvent.click(getByTestId('create-pass-btn'))

    fireEvent.change(getByTestId('input-username'), { target: { value: 'uzaisindiko'} })
    expect(getByTestId('input-username').value).toBe('uzaisindiko')

    expect(getByTestId('check-color12')).toHaveStyle('color: #edb713')
    expect(getByTestId('check-colorU')).toHaveStyle('color: #edb713')
    expect(getByTestId('check-colorL')).toHaveStyle('color: #edb713')
    expect(getByTestId('check-colorUsername')).toHaveStyle('color: #edb713')
    expect(getByTestId('check-colorS')).toHaveStyle('color: #edb713')

    fireEvent.change(getByTestId('input-password'), { target: { value: '!2qWErtyuioplkjhdgfs'} })
    expect(getByTestId('input-password').value).toBe('!2qWErtyuioplkjhdgfs')
    
    expect(getByTestId('check-color12')).toHaveStyle('color: #34eb1c')
    expect(getByTestId('check-colorU')).toHaveStyle('color: #34eb1c')
    expect(getByTestId('check-colorL')).toHaveStyle('color: #34eb1c')
    expect(getByTestId('check-colorUsername')).toHaveStyle('color: #34eb1c')
    expect(getByTestId('check-colorS')).toHaveStyle('color: #34eb1c')
  })
})

describe ('Create Password', () =>{
  test('It should create new password when one of requirement is fulfilled ', async ()=>{
    const {container, getByTestId} = render(
    <Provider store={store}>
      <Router>
        <Pass/>
      </Router>
    </Provider>
    )
    fireEvent.click(getByTestId('create-pass-btn'))

    fireEvent.change(getByTestId('input-name'), { target: { value: 'facebook'} })
    expect(getByTestId('input-name').value).toBe('facebook')

    fireEvent.change(getByTestId('input-URL'), { target: { value: 'Not Valid URL'} })
    expect(getByTestId('input-URL').value).toBe('Not Valid URL')
    expect(getByTestId('check-URL')).toHaveStyle('display: inline')

    fireEvent.change(getByTestId('input-URL'), { target: { value: 'https://hacktiv8.com'} })
    expect(getByTestId('input-URL').value).toBe('https://hacktiv8.com')
    expect(getByTestId('check-URL')).toHaveStyle('display: none')

    fireEvent.change(getByTestId('input-username'), { target: { value: 'uzaisindiko'} })
    expect(getByTestId('input-username').value).toBe('uzaisindiko')

    fireEvent.change(getByTestId('input-password'), { target: { value: '!2qWErtyuioplkjhdgfs'} })
    expect(getByTestId('input-password').value).toBe('!2qWErtyuioplkjhdgfs')
    
    fireEvent.change(getByTestId('input-note'), { target: { value: 'note'} })
    expect(getByTestId('input-note').value).toBe('note')

    fireEvent.submit(getByTestId('crate-pass-btn'))
    expect(document.querySelector('.swal2-title')).toBeInTheDocument()
    expect(document.querySelector('.swal2-title')).toHaveTextContent(/Success Add Password/i)
  })
})

describe ('Fail Create Password', () =>{
  test('It should show error when all requirement is not fulfilled ', async ()=>{
    const {container, getByTestId} = render(
    <Provider store={store}>
      <Router>
        <Pass/>
      </Router>
    </Provider>
    )
    fireEvent.click(getByTestId('create-pass-btn'))
    fireEvent.submit(getByTestId('crate-pass-btn'))
    expect(document.querySelector('.swal2-title')).toBeInTheDocument()
    expect(document.querySelector('.swal2-title')).toHaveTextContent(/Oops.../i)
  })
})

describe ('Update Password', () =>{
  test('check update btn', async ()=>{
    const {container, getByTestId} = render(
    <Provider store={store}>
      <Router>
        <Pass/>
      </Router>
    </Provider>
    )
    fireEvent.click(getByTestId('card-update-btn'))
  })
})

describe ('Delete Password', () =>{
  test('check delete btn', async ()=>{
    const {container, getByTestId} = render(
    <Provider store={store}>
      <Router>
        <Pass/>
      </Router>
    </Provider>
    )
    fireEvent.click(getByTestId('card-delete-btn'))
  })
})