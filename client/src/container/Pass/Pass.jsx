import React, { useEffect, useState } from 'react'
import './Pass.css'
import Card from '../../components/Card/Card'

export default function Pass() {

    const [URL, setURL] = useState('')
    const [name, setName] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    
    const [color12, setcolor12] = useState('#edb713')
    const [colorU, setcolorU] = useState('#edb713')
    const [colorL, setcolorL] = useState('#edb713')
    const [colorUsername, setcolorUsername] = useState('#edb713')
    const [colorS, setcolorS] = useState('#edb713')


    useEffect(() => {
        console.log(password.length >= 12);
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
        
    }, [password])

    return (
        <div>
            <div>
                <h1>Password</h1>
                <span>A password, sometimes called a passcode, is a memorized secret used to confirm the identity of a user.</span>
            </div>
            <div className="animated bounce fast add d-flex align-items-center justify-content-center">
                <i className="fas fa-pen"></i>
            </div>
            <div className="w-100 d-flex mt-5 flex-wrap">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
            <div className="form-add-con d-flex align-items-center justify-content-center">
                <div className="from-add ">
                    <h1 className="text-center">Add New Password</h1>
                    <form className="d-flex flex-column align-items-center">
                        <input type="text" onChange={(e) => { setName( e.target.value ) }  } value={ name } placeholder="Enter Name"/>
                        <input type="text" onChange={(e) => { setURL( e.target.value ) }  } value={ URL } placeholder="Enter URL"/>
                        <input type="text" onChange={(e) => { setUsername( e.target.value ) }  } value={ username } placeholder="Enter username / email"/>
                        <input type="text" onChange={(e) => { setPassword( e.target.value ) }  } value={ password } placeholder="Enter password"/>
                        <div className="w-75">
                        
                            <p>Our minimum requirements:</p>
                            <p><i style={{ color: color12 }} className="fas fa-stop"></i> At least 12 characters long</p>
                            <p><i style={{ color: colorU }} className="fas fa-stop"></i> At least 1 uppercase letter </p>
                            <p><i style={{ color: colorL }} className="fas fa-stop"></i> At least 1 lowercase letter </p>
                            <p><i style={{ color: colorUsername }} className="fas fa-stop"></i> Not your email </p>
                            <p><i style={{ color: colorS }} className="fas fa-stop"></i> At least 1 special character (!@#$%^) </p>
                        </div>
                        <textarea cols="30" rows="5" placeholder="Enter Note"></textarea>
                        <button className="mt-3 btn btn-primary w-25">Add</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
