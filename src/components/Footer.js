import React, { useState } from 'react'
import './Footer.css'
import { Link } from 'react-scroll'


const Footer = () => {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const closeMenu = () => setClick(false)

    return (
        <div className='footer'>
            <div className='container'>
                <ul>
                    <li className='nav-item'>
                        <Link to="hero" spy={true} smooth={true} offset={-160} duration={500} onClick={closeMenu}>Home</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="about" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>About</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="jobs" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>Code</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="testimonials" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>Testimonials</Link>
                    </li>

                    <li className='nav-item'>
                        <Link to="Contact" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>Contact</Link>
                    </li>
                </ul>
                <div className='bottom'>
                    <span className='line'></span>
                    <p>Soldatenstraat 63, 1082 Brussel (Sint Agatha Berchem)</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
