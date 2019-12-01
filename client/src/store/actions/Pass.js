import axios from '../../apis/axios'
import Swal from 'sweetalert2'

export const postPass = ({ name, URL, username, password, note }) => async dispatch => {
    Swal.showLoading()
    try {

        await axios({
            method: 'post',
            url: '/pass',
            headers: {
                token : localStorage.getItem('token')
            },
            data: { name, URL, username, password, note }
        })
        const { data } = await axios({
            method: 'get',
            url: 'pass',
            headers: {
                token : localStorage.getItem('token')
            }
        })
        Swal.close()
        dispatch ({
            type: 'GET_PASS',
            data
        })
        
    } catch (error) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: error.response.data.message,
        })
    }
}

export const getPass = () => async dispatch => {
    Swal.showLoading()
    try {
        const { data } = await axios({
            method: 'get',
            url: '/pass',
            headers: {
                token : localStorage.getItem('token')
            }
        })
        Swal.close()
        dispatch ({
            type: 'GET_PASS',
            data
        })
    } catch (error) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: error.response.data.message,
        })
    }
}

export const getOnePass = (id) => async dispatch => {
    Swal.showLoading()
    try {
        const { data } = await axios({
            method: 'get',
            url: '/pass/'+id,
            headers: {
                token : localStorage.getItem('token')
            }
        })
        Swal.close()
       return dispatch ({
            type: 'GET_ONE_PASS',
            data
        })
    } catch (error) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: error.response.data.message,
        })
    }
}

export const updatePass = ({ id, name, URL, username, password, note }) => async dispatch => {
    Swal.showLoading()
    try {

        await axios({
            method: 'patch',
            url: '/pass/'+id,
            headers: {
                token : localStorage.getItem('token')
            },
            data: { name, URL, username, password, note }
        })
        const { data } = await axios({
            method: 'get',
            url: 'pass',
            headers: {
                token : localStorage.getItem('token')
            }
        })
        Swal.close()
        dispatch ({
            type: 'GET_PASS',
            data
        })
        
    } catch (error) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: error.response.data.message,
        })
    }
}

export const deletePass = (id) => async dispatch => {
    Swal.showLoading()
    try {
        await axios({
            method: 'delete',
            url: '/pass/'+id,
            headers: {
                token : localStorage.getItem('token')
            }
        })
        const { data } = await axios({
            method: 'get',
            url: 'pass',
            headers: {
                token : localStorage.getItem('token')
            }
        })
        Swal.close()
        dispatch ({
            type: 'GET_PASS',
            data
        })
    } catch (error) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: error.response.data.message,
        })
    }
}