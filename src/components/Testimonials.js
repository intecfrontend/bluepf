import React, { useEffect } from "react";
import user1 from './images/user1.jpeg'
import user2 from './images/user2.jpeg'
import user3 from './images/user3.jpeg'
import './Testimonials.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useTranslation } from 'react-i18next';


const Testimonials = () => {
    const { t } = useTranslation();

    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div className='testimonials' id='testimonials'>
            <div className='container'>
                <h2>{t('test')}</h2>
                <span className='line'></span>
                <div className='content' data-aos="fade-down">
                    <div className='card'>
                        <img src={user1} alt='user1' />
                        <p>{t('testp1')}<strong>{t('testp2')}</strong></p>

                        <p><span >Ruud Marks, t.02 411 29 07 </span></p>
                        <p>{t('testl1')}</p>
                    </div>
                    <div className='card'>
                        <img src={user2} alt='user1' />
                        <p>A developer I will never forget. <br /><br />He made complex React code understandable to me. <br /><br />Thanks to his non stop support. Kind and professional. Anytime I needed it. I became a web developer in only 4 months. <br />A lot faster than I thought in my wildest imagination.<br /><br />A big thank you to you, my friend!</p>
                        <p><span >Tiago Ferreira</span></p>
                        <p>Web developer at Jamy (Belfius)
                        </p>
                    </div>
                    <div className='card'>
                        <img src={user3} alt='user1' />
                        <p>I owe my developers career to Benedikt!<br /> <br /> If it weren't for his passion for coding, I wouldn't be a developer. <br /> <br /> He supported me through some challenging times and gave me the confidence I needed during a critical moment in my life!





                        </p>
                        <p><span >Ufuk Uysal</span></p>
                        <p>Javascript Developer @ WorldLine <br /> Youtube Code instructor, KodMan</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials
