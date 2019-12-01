import Swal from 'sweetalert2'

export const login = ({ email, password, history, location }) => async dispatch => {
    Swal.showLoading()
    if(email === 'satu@satu.com' && password === 'satu') {
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Welcome to KeyPass',
            showConfirmButton: false,
            timer: 1500
        })
        dispatch ({
            type: 'LOGIN',
            token : 'token-test'
        })
        const lastPath = location.state ? location.state.from : '/'
        history.replace(lastPath)
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
        })
    }
}

export const register = ({ email, password, history, location }) => async dispatch => {
    Swal.showLoading()
    if(email.match(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/ && password)) {
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Welcome to KeyPass',
            showConfirmButton: false,
            timer: 1500
        })
        dispatch ({
            type: 'LOGIN',
            token : 'token-test'
        })
        const lastPath = location.state ? location.state.from : '/'
        history.replace(lastPath)
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
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