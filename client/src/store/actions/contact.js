import axios from '../../apis/axios'
import Swal from 'sweetalert2'

export const postContact = ({ 
            Title,
            firstName,
            middleName,
            lastName,
            username,
            gender,
            company,
            address,
            phone,
            note  
        }) => async dispatch => {

    Swal.showLoading()
    try {

        await axios({
            method: 'post',
            url: '/contacts',
            headers: {
                token : localStorage.getItem('token')
            },
            data: { 
            Title,
            firstName,
            middleName,
            lastName,
            username,
            gender,
            company,
            address,
            phone,
            note  
            }
        })
        const { data } = await axios({
            method: 'get',
            url: '/contacts',
            headers: {
                token : localStorage.getItem('token')
            }
        })
        Swal.close()
        dispatch ({
            type: 'GET_CONTACT',
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

export const getContact = () => async dispatch => {
    Swal.showLoading()
    try {
        const { data } = await axios({
            method: 'get',
            url: '/contacts',
            headers: {
                token : localStorage.getItem('token')
            }
        })
        Swal.close()
        dispatch ({
            type: 'GET_CONTACT',
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


export const searchContact = (q) => async dispatch => {
    Swal.showLoading()
    try {
        const { data } = await axios({
            method: 'get',
            url: '/contacts/search?q=' + q,
            headers: {
                token : localStorage.getItem('token')
            }
        })
        Swal.close()
        dispatch ({
            type: 'GET_CONTACT',
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

export const getOneContact = (id) => async dispatch => {
    Swal.showLoading()
    try {
        const { data } = await axios({
            method: 'get',
            url: '/contacts/'+id,
            headers: {
                token : localStorage.getItem('token')
            }
        })
        Swal.close()
       return dispatch ({
            type: 'GET_ONE_CONTACT',
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

export const updateContact = ({ 
            id, 
            Title,
            firstName,
            middleName,
            lastName,
            username,
            gender,
            company,
            address,
            phone,
            note  
        }) => async dispatch => {
    Swal.showLoading()
    try {

        await axios({
            method: 'patch',
            url: '/contacts/'+id,
            headers: {
                token : localStorage.getItem('token')
            },
            data: { 
            Title,
            firstName,
            middleName,
            lastName,
            username,
            gender,
            company,
            address,
            phone,
            note  
            }
        })
        const { data } = await axios({
            method: 'get',
            url: '/contacts',
            headers: {
                token : localStorage.getItem('token')
            }
        })
        Swal.close()
        dispatch ({
            type: 'GET_CONTACT',
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

export const deleteContact = (id) => async dispatch => {
    Swal.showLoading()
    try {
        await axios({
            method: 'delete',
            url: '/contacts/'+id,
            headers: {
                token : localStorage.getItem('token')
            }
        })
        const { data } = await axios({
            method: 'get',
            url: 'contacts',
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
            type: 'GET_CONTACT',
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

export const deleteOneContact = () => {
    return {
        type: 'DELETE_ONE_CONTACT'
    }
}