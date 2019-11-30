import axios from '../../apis/axios'
import Swal from 'sweetalert2'

export const login = ({ email, password, history, location }) => async dispatch => {
    Swal.showLoading()
    try {
        const { data }  = await axios({
            method: 'post',
            url: '/users/login',
            data: {
                email,
                password
            }
        })
        Swal.close()
        dispatch ({
            type: 'LOGIN',
            token : data.token
        })
        const lastPath = location.state ? location.state.from : '/'
        history.replace(lastPath)
    } catch (error) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: error.response.data.message,
        })
    }
}

export const register = ({ email, password, history, location }) => async dispatch => {
    Swal.showLoading()
    try {
        const { data }  = await axios({
            method: 'post',
            url: '/users/register',
            data: {
                email,
                password
            }
        })
        Swal.close()
        dispatch ({
            type: 'LOGIN',
            token : data.token
        })
        const lastPath = location.state ? location.state.from : '/'
        history.replace(lastPath)
    } catch (error) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: error.response.data.message,
        })
    }
}

export const is_Login = () => {
    return {
        type: 'IS_LOGIN'
    }
}