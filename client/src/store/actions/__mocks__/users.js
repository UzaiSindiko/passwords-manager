import axios from '../../apis/axios'

export const login = ({ email, password, history, location  }) => async dispatch => {
    try {
        dispatch({
            type: 'LOGIN',
            token: 'test token'
        })
        const lastPath = location.state ? location.state.from : '/'
        history.replace(lastPath)
    } 
    catch (error) {
        console.log(error)    
    }
}