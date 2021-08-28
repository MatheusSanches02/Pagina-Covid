import React from 'react'
import './Corpo.css'
import Logo from '../img/logo.svg'

export default function Corpo(props) {
    return (
        <div>
            <body className="corpo">
                {props.dataA}
                <div className="div-logo">
                <img src={Logo} alt="Imagem CNN" id="logo-cnn" />
                </div>
            </body>
        </div>
    )
}
