import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faEnvelope, faPhone, faLinkedin } from '@fortawesome/free-solid-svg-icons';
import { FaLinkedin } from 'react-icons/fa';

import './Demo.css'

const Demo = () => {
    return (
        <div className='demo' id='demo'>
            <div className='container'>
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
                    <button className='button'> <FaLinkedin /> <a href="https://www.linkedin.com/in/benedikt-lantsoght-02481319/" target="_blank" rel="noopener noreferrer"> Find me on Linkedin </a></button>
                </div>
                <div className='col-2'>
                    <iframe width='570' height='320' src='https://www.youtube.com/embed/oeqP5JtihMA' title='Youtube video player' frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                </div>
            </div>
        </div>
    )
}

export default Demo
