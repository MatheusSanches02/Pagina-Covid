import React from 'react'
import Circulo from '../circulo/Circulo'
import './Menu.css'

export default function Menu() {
    return (
        <section className="container-menu">
            <div id="menu">
                <nav>
                    <ul>
                        <li><a href="#" className="container-menu active">Nacional <Circulo/></a></li>
                        <li><a href="#">Business</a></li>
                        <li><a href="#">Internacional</a></li>
                        <li><a href="#">Saúde</a></li>
                        <li><a href="#">Tecnologia</a></li>
                        <li><a href="#">Esporte</a></li>
                        <li><a href="#">Entretenimento</a></li>
                        <li><a href="#">Estilo</a></li>
                        <li><a href="#">Viagem &amp; Gastronomia</a></li>
                        <li><a href="#">Newsletters</a></li>
                        <li><a href="#">Podcasts</a></li>
                    </ul>
                </nav>
            </div>
        </section>
    )
}
