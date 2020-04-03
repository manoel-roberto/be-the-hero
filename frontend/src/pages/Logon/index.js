import React from 'react';
import { FiLogIn } from 'react-icons/fi';

import './styles.css';

import logoImg from '../../assets/logo.svg';
import herosImg from '../../assets/heroes.png';

export default function Logon() {
    return(
        <div className="logon-container">
            <section className="from">
                <img src={logoImg} alt="Be The Hero" />

                <from>
                    <h1>Faça seu Logon</h1>

                    <input placeholder="Sua ID" />
                    <button className="button" type="submit">Entrar</button>

                    <a href="registrer">
                        <FiLogIn size={16} color="#E02041" />
                        Não tenho cadastro
                    </a>
                </from>

            </section>

            <img src={herosImg} alt="Heros" />
        </div>
    );
}