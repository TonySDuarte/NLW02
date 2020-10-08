import React from 'react';

import logoImg from "../../assets/images/logo.svg";
import landingImg from "../../assets/images/landing.svg";
import studyIcon from "../../assets/images/icons/study.svg";
import giveClassesIcon from "../../assets/images/icons/give-classes.svg";
import purpleHeartIcon from "../../assets/images/icons/purple-heart.svg";

import './styles.css'

function Landing() {
    return (
        <div id="page-landing">
            <div id="page-landing-content" className="container">
                <div id="logo-container">
                    <img src={logoImg} alt="Proffy"/>
                    <h2>Sua platafroma de estudos online.</h2>
                </div>
                
                <img 
                    src={landingImg} 
                    alt="plataforma de estudo" 
                    className="hero-image"
                />

                <div className="buttons-container">
                    <a href="" className="study">
                        <img src={studyIcon} alt="Estudar"/>
                        estudar
                    </a>

                    <a href="" className="give-classes">
                        <img src={giveClassesIcon} alt="Estudar"/>
                        estudar
                    </a>
                </div>

                <span className="total-connection">
                    total de 157 conexões já realizadas <img src={purpleHeartIcon} alt="CoraçãoRoxo"/>
                </span>
            </div>
        </div>
    )
}

export default Landing;
