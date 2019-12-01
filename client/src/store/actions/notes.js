import axios from '../../apis/axios'
import Swal from 'sweetalert2'

export const postNote = ({ name, note }) => async dispatch => {
    Swal.showLoading()
    try {

        await axios({
            method: 'post',
            url: '/notes',
            headers: {
                token : localStorage.getItem('token')
            },
            data: { name, note }
        })
        const { data } = await axios({
            method: 'get',
            url: '/notes',
            headers: {
                token : localStorage.getItem('token')
            }
        })
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Success Add Note',
            showConfirmButton: false,
            timer: 15000
        })
        dispatch ({
            type: 'GET_NOTE',
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


export const searchNote = (q) => async dispatch => {
    Swal.showLoading()
    try {
        const { data } = await axios({
            method: 'get',
            url: '/notes/search?q='+q,
            headers: {
                token : localStorage.getItem('token')
            }
        })
        Swal.close()
        dispatch ({
            type: 'GET_NOTE',
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

export const getNote = () => async dispatch => {
    Swal.showLoading()
    try {
        const { data } = await axios({
            method: 'get',
            url: '/notes',
            headers: {
                token : localStorage.getItem('token')
            }
        })
        Swal.close()
        dispatch ({
            type: 'GET_NOTE',
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

export const getOneNote = (id) => async dispatch => {
    Swal.showLoading()
    try {
        const { data } = await axios({
            method: 'get',
            url: '/notes/'+id,
            headers: {
                token : localStorage.getItem('token')
            }
        })
        Swal.close()
       return dispatch ({
            type: 'GET_ONE_NOTE',
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

export const updateNote = ({ id, name, note }) => async dispatch => {
    Swal.showLoading()
    try {
        await axios({
            method: 'patch',
            url: '/notes/'+id,
            headers: {
                token : localStorage.getItem('token')
            },
            data: { name, note }
        })
        const { data } = await axios({
            method: 'get',
            url: '/notes',
            headers: {
                token : localStorage.getItem('token')
            }
        })
        Swal.close()
        dispatch ({
            type: 'GET_NOTE',
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

export const deleteNote = (id) => async dispatch => {
    Swal.showLoading()
    try {
        await axios({
            method: 'delete',
            url: '/notes/'+id,
            headers: {
                token : localStorage.getItem('token')
            }
        })
        const { data } = await axios({
            method: 'get',
            url: '/notes',
            headers: {
                token : localStorage.getItem('token')
            }
        })
        Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
        )
        dispatch ({
            type: 'GET_NOTE',
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

export const deleteOneNote = () => {
    return {
        type: 'DELETE_ONE_NOTE'
    }
}