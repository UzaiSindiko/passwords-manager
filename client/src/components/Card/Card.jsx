import React, { useEffect, useState } from 'react'
import './Card.css'

export default function Card(props) {

    const [url, setUrl] = useState('')

    useEffect(() => {
        if( !props.URL.match(/http/) && !props.URL.match(/https/)){
            setUrl(`http://${props.URL}`)
        } else{
            setUrl(props.URL)
        }
    }, [])


    return (
        <div  data-testid="card" className="pass-card">
            <div className="d-flex">
                <div className="icon">
                    <a href={url} target="_blank" > <img src={`//logo.clearbit.com/${props.URL}?size=100`} alt=""/> </a>
                </div>
                <div className="p-1">
                    <h4>{props.name}</h4>
                    <span>{ props.username }</span>
                    <div className="actions d-flex align-items-center justify-content-end">
                        <i data-testid="card-update-btn"  onClick={(e) => {  props.getOne(props.passId) } } className="fas fa-pen"></i>
                        <i data-testid="card-delete-btn"  onClick={ (e) => {  props.del(props.passId) }  } className="fas fa-trash pl-3"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}
