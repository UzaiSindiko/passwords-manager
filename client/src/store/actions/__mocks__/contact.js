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
    if(Title,
        firstName,
        middleName,
        lastName,
        username,
        gender,
        company,
        address,
        phone,
        note  ) {
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Success Add Contact',
            showConfirmButton: false,
            timer: 150000
        })
        dispatch ({
            type: 'GET_CONTACT',
            data:  [{
                "_id": "5de3652c2b2eba589cc02cdc",
                "userId": "5ddf8b8cad29641b3b4c8818",
                "Title": "satu",
                "firstName": "satu",
                "middleName": "satu",
                "lastName": "satu",
                "username": "satu",
                "gender": "male",
                "company": "1995",
                "address": "Jalan Teupineung No 33 Merduati Banda Aceh",
                "phone": "+62085261400506",
                "note": "sdfasdfaafdafasd",
                "__v": 0
            }]
        })
        
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
        })
    }
}

export const getContact = () => async dispatch => {
    Swal.showLoading()
    try {
        Swal.close()
        dispatch ({
            type: 'GET_CONTACT',
            data:  [
                {
                    "_id": "5de3652c2b2eba589cc02cdc",
                    "userId": "5ddf8b8cad29641b3b4c8818",
                    "Title": "satu",
                    "firstName": "satu",
                    "middleName": "satu",
                    "lastName": "satu",
                    "username": "satu",
                    "gender": "male",
                    "company": "1995",
                    "address": "Jalan Teupineung No 33 Merduati Banda Aceh",
                    "phone": "+62085261400506",
                    "note": "sdfasdfaafdafasd",
                    "__v": 0
                }
        ],
        })
    } catch (error) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
        })
    }
}


export const searchContact = (q) => async dispatch => {
    Swal.showLoading()
    try {
        Swal.close()
        dispatch ({
            type: 'GET_CONTACT',
            data:  [{
                "_id": "5de3652c2b2eba589cc02cdc",
                "userId": "5ddf8b8cad29641b3b4c8818",
                "Title": "satu",
                "firstName": "satu",
                "middleName": "satu",
                "lastName": "satu",
                "username": "satu",
                "gender": "male",
                "company": "1995",
                "address": "Jalan Teupineung No 33 Merduati Banda Aceh",
                "phone": "+62085261400506",
                "note": "sdfasdfaafdafasd",
                "__v": 0
            }],
        })
    } catch (error) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
        })
    }
}

export const getOneContact = (id) => async dispatch => {
    Swal.showLoading()
    if(id) {
       Swal.close()
       return dispatch ({
            type: 'GET_ONE_CONTACT',
            data:  {
                "_id": "5de3652c2b2eba589cc02cdc",
                "userId": "5ddf8b8cad29641b3b4c8818",
                "Title": "satu",
                "firstName": "satu",
                "middleName": "satu",
                "lastName": "satu",
                "username": "satu",
                "gender": "male",
                "company": "1995",
                "address": "Jalan Teupineung No 33 Merduati Banda Aceh",
                "phone": "+62085261400506",
                "note": "sdfasdfaafdafasd",
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
    if( id,
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
        ) {
        Swal.close()
        dispatch ({
            type: 'GET_CONTACT',
            data :  [{
                "_id": "5de3652c2b2eba589cc02cdc",
                "userId": "5ddf8b8cad29641b3b4c8818",
                "Title": "satu",
                "firstName": "satu",
                "middleName": "satu",
                "lastName": "satu",
                "username": "satu",
                "gender": "male",
                "company": "1995",
                "address": "Jalan Teupineung No 33 Merduati Banda Aceh",
                "phone": "+62085261400506",
                "note": "sdfasdfaafdafasd",
                "__v": 0
            }],
        })
        
    } 
    else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: error.response.data.message,
        })
    }
}

export const deleteContact = (id) => async dispatch => {
    Swal.showLoading()
    if(id) {
        Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
        )
        dispatch ({
            type: 'GET_CONTACT',
            data : []
        })
    } else {
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