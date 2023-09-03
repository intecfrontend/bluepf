import React, { useState } from 'react'
import './Footer.css'
import { Link } from 'react-scroll'
import { useTranslation } from 'react-i18next';
const Footer = () => {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)
    const { t } = useTranslation();
    const closeMenu = () => setClick(false)
    return (
        <div className='footer'>
            <div className='container'>
                <ul>
                    <li className='nav-item'>
                        <Link to="hero" spy={true} smooth={true} offset={-160} duration={500} onClick={closeMenu}>Home</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="about" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>{t('about')}</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="jobs" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>{t('code')}</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="testimonials" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>{t('test')}</Link>
                    </li>

                    <li className='nav-item'>
                        <Link to="Contact" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>Contact</Link>
                    </li>
                </ul>
                <div className='bottom'>
                    <span className='line'></span>
                    <p>{t('adresstr')}, 1082 {t('adresci')}</p>
                </div>
            </div>
        </div >
    )
}

export default Footer
