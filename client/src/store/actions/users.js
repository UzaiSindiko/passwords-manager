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
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Welcome to KeyPass',
            showConfirmButton: false,
            timer: 1500
        })
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

export const logout = () => {
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Success Logout',
        showConfirmButton: false,
        timer: 15000
    })
    return {
        type: 'LOGOUT'
    }
}