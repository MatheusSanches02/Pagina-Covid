import React from 'react'
import Header from '../header/Header'
import Menu from '../menu/Menu'
import Corpo from '../corpo/Corpo'

export default function FirstPage() {

    const title = "Quais são os sintomas da variante Delta da COVID-19? Teste seus conhecimentos"
    const frase = "A infecção causada pela variante Delta pode provocar sintomas diferentes da doença causada pela linhagem original do novo coronavirus. "
    const dataAtualização = "24/08/2021 às 16:44 | Atualizado às 16:56"
    return (
        <section>
            <Menu/>
            <Header titleHeader = {title} infoP = {frase}/>
            <Corpo dataA = {dataAtualização}/>
        </section>
    )
}
