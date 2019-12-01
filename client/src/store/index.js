import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

const initUsers = {
  isLogin : false
}

function users( state = initUsers, action ){
  switch (action.type) {
      case 'LOGIN':
          if(action.token)
          localStorage.setItem('token', action.token)
          return {
              ...state,
              isLogin: true
          }
      case 'IS_LOGIN':
              return {
                  ...state,
                  isLogin: true
              }
      case 'LOGOUT':
          localStorage.removeItem('token')
          return {
              ...state,
              isLogin: false
          }
      default:
          return state
  }
}


const initPass = {
    passwords: [],
    OnePassword: {}
}

function pass(state = initPass, action){
    switch (action.type) {
        case 'GET_PASS':
            return {
                ...state,
                passwords: action.data
            }
        case 'GET_ONE_PASS':
            return {
                ...state,
                OnePassword: action.data
            }
        default:
            return state
    }
}

const rootReducer = combineReducers({ users, pass })

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store
