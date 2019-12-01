import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './Pass.css'
import Card from '../../components/Card/Card'
import { postPass, getPass, getOnePass, updatePass, deletePass, searchPass, deleteOnePass } from '../../store/actions/Pass'
import Swal from 'sweetalert2'

export default function Pass() {
    
    const { passwords } = useSelector(state => state.pass)
    const { OnePassword } = useSelector(state => state.pass)
    const dispatch = useDispatch()

    const [URL, setURL] = useState('')
    const [name, setName] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [note, setNote] = useState('')
    const [q, setQ] = useState('')

    const [isForm, setIsForm] = useState(false)
    const [isEdit, setIsEdit] = useState(false)
    
    const [color12, setcolor12] = useState('#edb713')
    const [colorU, setcolorU] = useState('#edb713')
    const [colorL, setcolorL] = useState('#edb713')
    const [colorUsername, setcolorUsername] = useState('#edb713')
    const [colorS, setcolorS] = useState('#edb713')
    const [display, setDisplay] = useState('none')


    function handleSubmit(){
        if(isEdit){
            dispatch(updatePass({id: OnePassword._id , name, URL, username, password, note }))
        }
        else{
            dispatch(postPass( {name, URL, username, password, note } ))
        }
        setName('')
        setURL('')
        setUsername('')
        setPassword('')
        setNote('')
    }

    function closeFrom(){
        setIsForm(false)
        dispatch(deleteOnePass())
        setName('')
        setURL('')
        setUsername('')
        setPassword('')
        setNote('')
    }
    
    useEffect(() => {
        dispatch(getPass())
    }, [])
    
    useEffect(()=> {
        setName(OnePassword.name)
        setURL(OnePassword.URL)
        setUsername(OnePassword.username)
        setPassword(OnePassword.password)
        setNote(OnePassword.note)
        if(OnePassword._id){
            setIsForm(true)
            setIsEdit(true)
        }
    }, [OnePassword])

    function getOne(id){
        dispatch(getOnePass(id))
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
            dispatch(deletePass(id))
            }
          })
    }

    useEffect(()=> {
        dispatch(searchPass(q))
    }, [q])

    useEffect(() => {
        
        if(URL && URL.match(/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/)){
            setDisplay('none')
        } 
        else if(!URL){
            setDisplay('none')
        }
        else {
            setDisplay('inline')
        }
    }, [URL])

    useEffect(() => {
        if(password){
            if(password.length >= 12){
                setcolor12('#34eb1c')
            } else{
                setcolor12('#edb713')
            }
            if(password.match(/[A-Z\s]+/)){
                setcolorU('#34eb1c')
            }else{
                setcolorU('#edb713')
            }
            if(password.match(/[a-z\s]+/)){
                setcolorL('#34eb1c')
            }else{
                setcolorL('#edb713')
            }
            if(password !== username){
                setcolorUsername('#34eb1c')
            }
            else{
                setcolorUsername('#edb713')
            }
            if(password.match(/[!@#$%^&*(),.?":{}|<>]/)){
                setcolorS('#34eb1c')
            }
            else{
                setcolorS('#edb713')
            }
        }
        
    }, [password])

    return (
        <div>
            <div>
                <form className="d-flex">
                    <input  data-testid="pass-search-bar" onChange={(e) => { setQ( e.target.value ) }  }  value={ q } className="p-1" type="search" placeholder="Search....."/>
                    <button  className="ml-2 btn btn-info" >submit</button>
                </form>
                <h1 data-testid="title-password" >Password</h1>
                <span>A password, sometimes called a passcode, is a memorized secret used to confirm the identity of a user.</span>
            </div>
            <div  data-testid="create-pass-btn" onClick={() => setIsForm(true) }  className="animated bounce fast add-pass d-flex align-items-center justify-content-center">
                <i className="fas fa-pen"></i>
            </div>
            <div className="w-100 d-flex mt-5 flex-wrap">
                {
                    passwords.map(v => <Card getOne={ getOne } del={ del } key={ v._id } name={v.name} username={v.username} passId={ v._id } URL={v.URL}/>)
                }
            </div>

    {isForm && (<div id="pass-form" data-testid="pass-form" className="animated zoomIn fast  form-add-con d-flex align-items-center justify-content-center">
                <div className="from-add">
                <span onClick={() => { closeFrom()} } className="close">x</span>
                    <h1 data-testid="title-form-pass" className="text-center">Add New Password</h1>
                    <form data-testid="submit-pass-btn"  onSubmit={(e) => {
                        e.preventDefault()
                        setIsForm(false)
                        handleSubmit()
                    }} className="d-flex flex-column align-items-center">
                        <input data-testid="input-name" type="text" onChange={(e) => { setName( e.target.value ) }  } value={ name } placeholder="Enter Name"/>
                        <input data-testid="input-URL"  type="text" onChange={(e) => { setURL( e.target.value ) }  } value={ URL } placeholder="Enter URL"/>
                        <p data-testid="check-URL" className="w-75  text-danger" style={{ display }} ><i className="fas fa-stop"></i> Not valid URL "please use valid url" </p>
                        <input data-testid="input-username" type="text" onChange={(e) => { setUsername( e.target.value ) }  } value={ username } placeholder="Enter username / email"/>
                        <input data-testid="input-password" type="text" onChange={(e) => { setPassword( e.target.value ) }  } value={ password } placeholder="Enter password"/>
                        <div className="w-75">
                            <p>Our minimum requirements:</p>
                            <p data-testid="check-color12" style={{ color: color12 }} ><i className="fas fa-stop"></i> At least 12 characters long</p>
                            <p data-testid="check-colorU" style={{ color: colorU }} ><i className="fas fa-stop"></i> At least 1 uppercase letter </p>
                            <p data-testid="check-colorL" style={{ color: colorL }} ><i className="fas fa-stop"></i> At least 1 lowercase letter </p>
                            <p data-testid="check-colorUsername" style={{ color: colorUsername }} ><i className="fas fa-stop"></i> Not your email </p>
                            <p data-testid="check-colorS" style={{ color: colorS }} ><i className="fas fa-stop"></i> At least 1 special character (!@#$%^) </p>
                        </div>
                        <textarea data-testid="input-note"  onChange={(e) => { setNote( e.target.value ) }  } value={ note } cols="30" rows="5" placeholder="Enter Note"></textarea>
                        {
                            isEdit ? <button className="mt-3 btn btn-success w-25">Edit</button> : <button className="mt-3 btn btn-primary w-25">Add</button>
                        }
                    </form>
                </div>
            </div>)}

        </div>
    )
}
