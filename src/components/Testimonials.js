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
                        <p>{t('testp31')} <br /><br />
                            <strong>{t('testp32')} </strong>
                            <br /><br />{t('testp33')} <br /><br />{t('testp34')} </p>
                        <p><span >Tiago Ferreira</span></p>
                        <p>{t('testp35')}</p>
                    </div>
                    <div className='card'>
                        <img src={user3} alt='user1' />
                        <p>{t('testp41')}<br /> <br /> <strong>{t('testp42')} </strong><br /> <br /> {t('testp43')}
                        </p>
                        <p><span >Ufuk Uysal</span></p>
                        <p>{t('testp44')}<br /> {t('testp45')}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials
