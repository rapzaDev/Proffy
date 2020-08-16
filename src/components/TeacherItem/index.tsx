import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
    return(
        <article className="teacher-item">
            <header>
                <img src="https://avatars0.githubusercontent.com/u/68792232?s=460&u=19e080c9c96db8bc5147069884bec16f258abcd4&v=4" alt="Rafael Arango Pérez"/>
                <div>
                    <strong>Rafael Pérez</strong>
                    <span>Javascript</span>
                </div>
            </header>

                <p>
                    Entusiasta das melhores tecnologias de Javascript
                    <br/>
                    Apaixonado por Javascript e seu mundo, fundador
                    do grupo Rapza JS tendo foco em
                    dar uma experiencia única ao usuário. Num preparo
                    de centenas de pessoas, venha você ser mais um
                    na equipe Rapza Javascript!
                </p>

            <footer>
                <p>
                    Preço/hora
                    <strong>R$ 80,00</strong>
                </p>

                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp"/>
                    Entrar em contato
                </button>
            </footer>

        </article>
    );
}

export default TeacherItem;