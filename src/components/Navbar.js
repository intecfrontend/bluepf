import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import logo from './images/logo.png'
import { Link } from 'react-scroll'
import i18n from 'i18next';
import { initReactI18next, useTranslation } from 'react-i18next';
import './Navbar.css'

const Navbar = () => {
    const { t } = useTranslation();


    const onChanged = (event) => {
        const selectedLanguage = event.target.value;
        i18n.changeLanguage(selectedLanguage);
        localStorage.setItem('selectedLanguage', selectedLanguage);
    }

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const closeMenu = () => setClick(false)

    const onChange = (event) => {
        i18n.changeLanguage(event.target.value);
        console.log(event.target.value);
    }

    return (

        <div className='header'>
            <nav className='navbar'>
                <Link to="hero" spy={true} smooth={true} offset={-160} duration={500} onClick={closeMenu}>                    <img src={logo} alt='logo' />
                </Link>

                <select
                    value={localStorage.getItem('selectedLanguage')}
                    onChange={onChange}
                    id="languageChanger"
                >
                    <option value="en">English</option>
                    <option value="du">Dutch</option>
                    <option value="fr">French</option>
                </select>


                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes size={30} style={{ color: '#ffffff' }} />)
                        : (<FaBars size={30} style={{ color: '#ffffff' }} />)}

                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className='nav-item'>
                        <Link to="hero" spy={true} smooth={true} offset={-160} duration={500} onClick={closeMenu}>Home</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="about" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>{t('about')}</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="jobs" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>Code</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="testimonials" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>Testimonials</Link>
                    </li>

                    <li className='nav-item'>
                        <Link to="Contact" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>Contact</Link>                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
