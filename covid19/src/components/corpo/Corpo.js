import React from 'react'
import './Corpo.css'
import Logo from '../img/logo.svg'

export default function Corpo(props) {
    return (
        <section>
            <body className="corpo">
                {props.dataA}
                <div className="div-logo">
                    <img src={Logo} alt="Imagem CNN" id="logo-cnn" />
                </div>
                <div className="div-texto">
                    <p id="texto">Por ser uma doença nova, a <a href="https://covid.saude.gov.br/">Covid-19</a> ainda não foi compreendida totalmente pela comunidade médica global. Os conhecimentos sobre a doença estão em constante  atualização, incluindo os sintommas e os impactos para a saúde a curto e longo prazos.
                    <br/>
                    <br/>A <a href="https://www.cnnbrasil.com.br/tudo-sobre/variante-delta/">variante Delte da Covid-19</a>, originalmente conhecida como B.1617.2, existe desde o final do ano passado, mas nos últimos meses tornou-se rapidamente dominante em muitos países. Ainda não está claro o quanto essa cepa é mais transmissível. estimativas varia entre 60% e 200% mais transmissível, dependendo de quem apresenta a estimativa.
                    </p>
                </div>
            </body>
        </section>
    )
}
