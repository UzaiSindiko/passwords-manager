import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './Note.css'
import Card from '../../components/Card/Card'
import { postNote, getNote, getOneNote, updateNote, deleteNote, searchNote, deleteOneNote } from '../../store/actions/notes'
import Swal from 'sweetalert2'

export default function Note() {

    const { notes } = useSelector(state => state.note)
    const { OneNote } = useSelector(state => state.note)
    const dispatch = useDispatch()

    const [name, setName] = useState('')
    const [note, setNote] = useState('')
    const [q, setQ] = useState('')

    const [isForm, setIsForm] = useState(false)
    const [isEdit, setIsEdit] = useState(false)

    function handleSubmit(){
        if(isEdit){
            dispatch(updateNote({id: OneNote._id , name, note }))
        }
        else{
            dispatch(postNote( {name, note } ))
        }
        setName('')
        setNote('')
    }

    useEffect(() => {
        dispatch(getNote())
    }, [])

    useEffect(()=> {
        setName(OneNote.name)
        setNote(OneNote.note)
        if(OneNote._id){
            setIsForm(true)
            setIsEdit(true)
        }
    }, [OneNote])

    useEffect(()=> {
        dispatch(searchNote(q))
    }, [q])

    function getOne(id){
        dispatch(getOneNote(id))
    }

    function closeFrom(){
        setIsForm(false)
        dispatch(deleteOneNote())
        setName('')
        setNote('')
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
            dispatch(deleteNote(id))
            }
          })
    }

    return (
        <div>
             <div>
                <form className="d-flex">
                    <input  data-testid="note-search-bar" onChange={(e) => { setQ( e.target.value ) }  }  value={ q } className="p-1" type="search" placeholder="Search....."/>
                    <button  className="ml-2 btn btn-info" >submit</button>
                </form>
                <h1 data-testid="title-note" >Note</h1>
                <span>This Notes is simple and very easy to use . Notepad is very useful tool. This Notepad will help you in private and work and so on</span>
            </div>
            <div  data-testid="create-note-btn" onClick={() => setIsForm(true) }  className="animated bounce fast add-note d-flex align-items-center justify-content-center">
                <i className="fas fa-pen"></i>
            </div>
            <div className="w-100 d-flex mt-5 flex-wrap">
                {
                    notes.map(v => <Card getOne={ getOne } del={ del } key={ v._id } name={v.name} username={v.note } passId={ v._id } URL={ "note.mu" }/>)
                }
            </div>

    {isForm && (<div data-testid="pass-form" className="animated zoomIn fast  form-add-con d-flex align-items-center justify-content-center">
                <div className="from-add">
                <span onClick={() => { closeFrom()} } className="close">x</span>
                    <h1 data-testid="title-form-note" className="text-center">Add New Note</h1>
                    <form data-testid="submit-note-btn"  onSubmit={(e) => {
                        e.preventDefault()
                        setIsForm(false)
                        handleSubmit()
                    }} className="d-flex flex-column align-items-center">
                        <input data-testid="input-name" type="text" onChange={(e) => { setName( e.target.value ) }  } value={ name } placeholder="Enter Name"/>
                        <textarea data-testid="input-note"  onChange={(e) => { setNote( e.target.value ) }  } value={ note } cols="30" rows="15" placeholder="Enter Note"></textarea>
                        {
                            isEdit ? <button className="mt-3 btn btn-success w-25">Edit</button> : <button className="mt-3 btn btn-primary w-25">Add</button>
                        }
                    </form>
                </div>
            </div>)}

    
        </div>
    )
}
