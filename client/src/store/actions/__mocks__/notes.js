import Swal from 'sweetalert2'

export const postNote = ({ name, note }) => async dispatch => {
    Swal.showLoading()
    if( name, note ) {
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Success Add Note',
            showConfirmButton: false,
            timer: 15000
        })
        dispatch ({
            type: 'GET_NOTE',
            data: [
                {
                    "_id": "5de409f1a87f2d0728958d4f",
                    "userId": "5ddf8b8cad29641b3b4c8818",
                    "note": "xxx",
                    "name": "xxxx",
                    "__v": 0
                },
            ]
        })
        
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
        })
    }
}


export const searchNote = (q) => async dispatch => {
    Swal.showLoading()
    if(q) {
        Swal.close()
        dispatch ({
            type: 'GET_NOTE',
            data: [
                {
                    "_id": "5de409f1a87f2d0728958d4f",
                    "userId": "5ddf8b8cad29641b3b4c8818",
                    "note": "xxx",
                    "name": "xxxx",
                    "__v": 0
                },
            ]
        })
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
        })
    }
}

export const getNote = () => async dispatch => {
    Swal.showLoading()
    try {
        Swal.close()
        dispatch ({
            type: 'GET_NOTE',
            data: [
                {
                    "_id": "5de409f1a87f2d0728958d4f",
                    "userId": "5ddf8b8cad29641b3b4c8818",
                    "note": "xxx",
                    "name": "xxxx",
                    "__v": 0
                },
            ]
        })
    } catch (error) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
        })
    }
}

export const getOneNote = (id) => async dispatch => {
    Swal.showLoading()
    if(id) {
        Swal.close()
       return dispatch ({
            type: 'GET_ONE_NOTE',
            data: 
                {
                    "_id": "5de409f1a87f2d0728958d4f",
                    "userId": "5ddf8b8cad29641b3b4c8818",
                    "note": "xxx",
                    "name": "xxxx",
                    "__v": 0
                },
            
        })
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
        })
    }
}

export const updateNote = ({ id, name, note }) => async dispatch => {
    Swal.showLoading()
    if(id) {
        Swal.close()
        dispatch ({
            type: 'GET_NOTE',
            data: [
                {
                    "_id": "5de409f1a87f2d0728958d4f",
                    "userId": "5ddf8b8cad29641b3b4c8818",
                    "note": "xxx",
                    "name": "xxxx",
                    "__v": 0
                },
            ]
        })
        
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
        })
    }
}

export const deleteNote = (id) => async dispatch => {
    Swal.showLoading()
    if(id) {
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
            data: []
        })
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
        })
    }
}

export const deleteOneNote = () => {
    return {
        type: 'DELETE_ONE_NOTE'
    }
}