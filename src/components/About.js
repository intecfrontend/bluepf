import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';

import classmates from './images/class.jpeg'
import './About.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
    const { t } = useTranslation();

    return (
        <div className='about' id='about'>
            <div className='container'>
                <img id="classimg" src={classmates} alt="" />
                <div className='col-2' data-aos="fade-down">
                    <h2>{t('about')}</h2>
                    <span className='line'></span>
                    <p>{t('aboutp1')}
                        <br />
                        <br />
                        {t('aboutp2')}
                        <br />
                        <br />
                        {t('aboutp3')}

                    </p>
                    <a href='topreferentie.pdf' download>
                        <button className='button'>{t('aboutb')}</button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default About
