import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './Contact.css'
import Card from '../../components/Card/Card'
import Swal from 'sweetalert2'
import { postContact, getContact, getOneContact, updateContact, deleteContact, searchContact, deleteOneContact } from '../../store/actions/contact'

export default function Contact() {

    const { contacts } = useSelector(state => state.contact)
    const { OneContact } = useSelector(state => state.contact)
    const dispatch = useDispatch()

    const [isForm, setIsForm] = useState(false)
    const [isEdit, setIsEdit] = useState(false)


    const [Title, setTitle] = useState('')
    const [firstName, setFirstName] = useState('')
    const [middleName, setMiddleName] = useState('')
    const [lastName, setLastName] = useState('')
    const [username, setUsername] = useState('')
    const [gender, setGender] = useState('')
    const [company, setCompany] = useState('')
    const [address, setAddress] = useState('')
    const [phone, setPhone] = useState('')
    const [note, setNote] = useState('')
    const [q, setQ] = useState('')

    useEffect(() => {
        dispatch(getContact())
    }, [])

    useEffect(() => {
        dispatch(searchContact(q))
    }, [q])

    function getOne(id){
        dispatch(getOneContact(id))
    }
    
    function del(id){
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.value) {
                dispatch(deleteContact(id))
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
            }
          })
    }

    function closeFrom(){
        setIsForm(false)
        dispatch(deleteOneContact())
        setTitle('')
        setFirstName('')
        setMiddleName('')
        setLastName('')
        setUsername('')
        setGender('')
        setCompany('')
        setAddress('')
        setPhone('')
        setNote('')
    }
    
    function handleSubmit(){
        if(isEdit){
            dispatch(updateContact({
                id: OneContact._id,
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
            }))
        }
        else{
            dispatch(postContact({
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
            }))
        }

        setTitle('')
        setFirstName('')
        setMiddleName('')
        setLastName('')
        setUsername('')
        setGender('')
        setCompany('')
        setAddress('')
        setPhone('')
        setNote('')
    }

    useEffect(()=> {
        setTitle( OneContact.Title )
        setFirstName( OneContact.firstName )
        setMiddleName( OneContact.middleName )
        setLastName( OneContact.lastName )
        setUsername( OneContact.username )
        setGender( OneContact.gender )
        setCompany( OneContact.company )
        setAddress( OneContact.address )
        setPhone( OneContact.phone )
        setNote( OneContact.note )
        if(OneContact._id){
            setIsForm(true)
            setIsEdit(true)
        }
    }, [OneContact])


    return (
        <div>
            <div>
                <form className="d-flex">
                    <input onChange={(e) => { setQ( e.target.value ) }  }  value={ q } className="p-1" type="search" placeholder="Search....."/>
                    <button className="ml-2 btn btn-info" >submit</button>
                </form>
                <h1>Contact</h1>
                <span>Access the contacts in your KeyPass Account from any device. Keep your contacts organized and up to date</span>
            </div>
            <div onClick={() => setIsForm(true) }  className="animated bounce fast add-contact d-flex align-items-center justify-content-center">
                <i className="fas fa-pen"></i>
            </div>
            <div className="w-100 d-flex mt-5 flex-wrap">
                {/* <span>{ JSON.stringify(contacts) }</span> */}
                {
                    contacts.map(v => <Card getOne={ getOne } del={ del } key={ v._id } name={v.firstName} username={v.phone} passId={ v._id } URL="contactsplus.com" />)
                }
            </div>

            {isForm && (<div className="form-add-con d-flex align-items-center justify-content-center">
                <div className="from-add mymargin">
                <span onClick={() => { closeFrom()} } className="close">x</span>
                    <h1 className="text-center">Add New Contact</h1>
                    <form  onSubmit={(e) => {
                        e.preventDefault()
                        setIsForm(false)
                        handleSubmit()
                    }} className="d-flex flex-column align-items-center">
                        <input type="text" onChange={(e) => { setTitle( e.target.value ) }  } value={ Title } placeholder="Enter Title"/>
                        <input type="text" onChange={(e) => { setFirstName( e.target.value ) }  } value={ firstName } placeholder="Enter First Name"/>
                        <input type="text" onChange={(e) => { setMiddleName( e.target.value ) }  } value={ middleName } placeholder="Enter MiddleName"/>
                        <input type="text" onChange={(e) => { setLastName( e.target.value ) }  } value={ lastName } placeholder="Enter LastName"/>
                        <input type="text" onChange={(e) => { setUsername( e.target.value ) }  } value={ username } placeholder="Enter Username"/>
                        <input type="text" onChange={(e) => { setGender( e.target.value ) }  } value={ gender } placeholder="Enter Gender"/>
                        <input type="text" onChange={(e) => { setCompany( e.target.value ) }  } value={ company } placeholder="Enter Company"/>
                        <textarea onChange={(e) => { setAddress( e.target.value ) }  } value={ address } cols="30" rows="5" placeholder="Enter Address"></textarea>
                        <input type="text" onChange={(e) => { setPhone( e.target.value ) }  } value={ phone } placeholder="Enter Phone"/>
                        <textarea onChange={(e) => { setNote( e.target.value ) }  } value={ note } cols="30" rows="5" placeholder="Enter Note"></textarea>
                        {
                            isEdit ? <button className="mt-3 btn btn-success w-25">Edit</button> : <button className="mt-3 btn btn-primary w-25">Add</button>
                        }
                    </form>
                </div>
            </div>)}
        </div>
    )
}
