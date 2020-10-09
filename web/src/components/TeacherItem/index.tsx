import React from 'react'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'

function TeacherItem(){
    return(
        <article className="teacher-item">
                    <header>
                        <img src="https://media-exp1.licdn.com/dms/image/C4D03AQFDZF9BIPsdRQ/profile-displayphoto-shrink_200_200/0?e=1607558400&v=beta&t=Hp6iEEfkh7meNjsp0Cqt_eETKV0bY-de91xwKjhvlZM" alt="Tony Sandro"/>
                        <div>
                            <strong>Tony Sandro</strong>
                            <span>Estrutura de dados</span>
                        </div>
                    </header>
                    <p>
                        Professor de estrutura de dados
                        <br/> <br/>
                        Utilizando apenas visualg e uma didatica simples aprenderemos a aplicar em qualquer outra linguagem com facilidade.
                    </p>

                    <footer>
                        <p>
                            preço por hora
                            <strong>R$50,00</strong>
                        </p>
                        <button type="button">
                            <img src={whatsappIcon} alt="whatsapp"/>
                            Entrar em contato
                        </button>
                    </footer>
                </article>
    )
}

export default TeacherItem