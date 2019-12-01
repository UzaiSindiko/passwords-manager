import Swal from 'sweetalert2'

export const postPass = ({ name, URL, username, password, note }) => async dispatch => {
    Swal.showLoading()
    if( name, URL, username, password, note && URL.match(/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/)) {
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Success Add Password',
            showConfirmButton: false,
            timer: 150000
        })
        dispatch ({
            type: 'GET_PASS',
            data: [
                {
                    "_id": "5de29aabcb934623be02c293",
                    "userId": "5ddf8b8cad29641b3b4c8818",
                    "name": "Facebook@",
                    "URL": "www.facebok.com",
                    "username": "uzai.sindiko@gmail.com",
                    "password": "uzai sindiko",
                    "note": "uzai1",
                    "__v": 0
                }
            ]
        })
        
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...'
        })
    }
}


export const searchPass = (q) => async dispatch => {
    Swal.showLoading()
    if(q == '@') {
        Swal.close()
        dispatch ({
            type: 'GET_PASS',
            data: [
                {
                    "_id": "5de29aabcb934623be02c293",
                    "userId": "5ddf8b8cad29641b3b4c8818",
                    "name": "Facebook@",
                    "URL": "www.facebok.com",
                    "username": "uzai.sindiko@gmail.com",
                    "password": "uzai sindiko",
                    "note": "uzai1",
                    "__v": 0
                }
            ]
        })
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...'
        })
    }
}

export const getPass = () => async dispatch => {
    Swal.showLoading()
    try {
        Swal.close()
        dispatch ({
            type: 'GET_PASS',
            data: [
                {
                    "_id": "5de29aabcb934623be02c293",
                    "userId": "5ddf8b8cad29641b3b4c8818",
                    "name": "Facebook@",
                    "URL": "www.facebok.com",
                    "username": "uzai.sindiko@gmail.com",
                    "password": "uzai sindiko",
                    "note": "uzai1",
                    "__v": 0
                }
            ]
        })
    } catch (error) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...'
        })
    }
}

export const getOnePass = (id) => async dispatch => {
    Swal.showLoading()
    try {
        Swal.close()
       return dispatch ({
            type: 'GET_ONE_PASS',
            data: 
                {
                    "_id": "5de29aabcb934623be02c293",
                    "userId": "5ddf8b8cad29641b3b4c8818",
                    "name": "Facebook@",
                    "URL": "www.facebok.com",
                    "username": "uzai.sindiko@gmail.com",
                    "password": "uzai sindiko",
                    "note": "uzai1",
                    "__v": 0
                }
        })
    } catch (error) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...'
        })
    }
}

export const updatePass = ({ id, name, URL, username, password, note }) => async dispatch => {
    Swal.showLoading()
    if( id, name, URL, username, password, note && URL.match(/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/) ) {    
        Swal.close()
        dispatch ({
            type: 'GET_PASS',
            data: [{

                "_id": "5de29aabcb934623be02c293",
                "userId": "5ddf8b8cad29641b3b4c8818",
                "name": "Facebook@",
                "URL": "www.facebok.com",
                "username": "uzai.sindiko@gmail.com",
                "password": "uzai sindiko",
                "note": "uzai1",
                "__v": 0
            }]
        })
        
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...'
        })
    }
}

export const deletePass = (id) => async dispatch => {
    Swal.showLoading()
    try {
        Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
        )
        dispatch ({
            type: 'GET_PASS',
            data: []
        })
    } catch (error) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...'
        })
    }
}

export const deleteOnePass = () => {
    return {
        type: 'DELETE_ONE_PASS'
    }
}