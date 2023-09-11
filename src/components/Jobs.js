import React, { useState, useEffect } from "react";

import inprog from './myjobs/inprogress/inprog.jpg'
import CardOne from './myjobs/cards/card1'
import CardTwo from './myjobs/cards/card2'
import CardThree from './myjobs/cards/card3'
import CardFour from './myjobs/cards/card4'
import CardFive from './myjobs/cards/card5'

import './Testimonials.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Jobs.css'
import './Appmodal.css'
import { useTranslation } from 'react-i18next';


function Jobs() {
    const [modalOpen, setModalOpen] = useState(false);
    const [modalaOpen, setModalaOpen] = useState(false);
    const { t } = useTranslation();
    const handleButtonClick = (value) => {
        setModalOpen(false);
    };
    const handleButtonaClick = (value) => {
        setModalaOpen(false);
    };

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div className='jobs' id='jobs'>
            <div className='container'>
                <h2 id="whitereal" >{t('code')}</h2>
                <span className='line'></span>
                <div className='content' data-aos="fade-down">
                    <CardOne />
                    <CardTwo />
                    <CardThree />
                </div>
                <div className='content' data-aos="fade-down">

                    <CardFour />
                    <CardFive />

                    <div className='card relat'>
                        <div className="middleme">
                            <img id="inprogress" src={inprog} alt='reduxL' />
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Jobs
