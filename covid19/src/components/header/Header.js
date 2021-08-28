import React from 'react'
import './Header.css'
import  Autor from '../img/author.png'

export default function Header(props) {

    return (
        <div>
            <header className="header-1">
                <h1>{props.titleHeader}</h1>
                <div>
                    <p>{props.infoP}</p>
                    <img src={Autor} alt="Autor do artigo" id="autor" />
                </div>
            </header>
        </div>
    )
}
