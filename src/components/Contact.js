import React, { useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faEnvelope, faPhone, faLinkedin } from '@fortawesome/free-solid-svg-icons';
import { FaLinkedin } from 'react-icons/fa';
import map from './images/map.png'
import './Contact.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useTranslation } from 'react-i18next';
const Contact = () => {
    useEffect(() => {
        AOS.init();
    }, []);
    const { t } = useTranslation();
    return (
        <div className='Contact' id='Contact'>
            <div className='container '>
                <div className='col-1'>
                    <div>
                        <div>
                            <div className="linewrapper">
                                <FontAwesomeIcon className="FontAwesomeIcon" icon={faMapMarkerAlt} />
                                <span className="FontAwesomeIconAfter">63 Soldatenstraat</span> <div className="ndaddress"> 1082 Brussel - St. Agatha Berchem</div></div>
                        </div>
                        <div>                            <div className="linewrapper">

                            <FontAwesomeIcon className="FontAwesomeIcon" icon={faEnvelope} />
                            <span className="FontAwesomeIconAfter">B.Lantsoght@gmail.com</span>
                        </div>
                        </div>
                        <div>                            <div className="linewrapper">

                            <FontAwesomeIcon className="FontAwesomeIcon" icon={faPhone} />
                            <span className="FontAwesomeIconAfter" >0032 (0) 499 388 227</span>
                        </div>
                        </div>

                    </div>
                    <button className='button'> <FaLinkedin /> <a href="https://www.linkedin.com/in/benedikt-lantsoght-02481319/" target="_blank" rel="noopener noreferrer"> {t('find')} </a></button>
                </div>

                <div className='data-aos="fade-down" col-2 moveup'>
                    <a href="https://www.google.com/maps/place/Rue+des+Soldats+63,+1082+Berchem-Sainte-Agathe/@50.861765,4.2963397,17z/data=!3m1!4b1!4m6!3m5!1s0x47c3c14514b03857:0xf10ce296a7aac747!8m2!3d50.861765!4d4.2963397!16s%2Fg%2F11hbtgq6_r?entry=ttu" target="_blank" rel="noopener noreferrer">
                        <img className="map" src={map} alt="map" />
                    </a>
                </div>

            </div>
        </div>
    )
}

export default Contact
