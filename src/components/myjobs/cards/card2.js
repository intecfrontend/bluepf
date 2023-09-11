import React, { useState } from "react";
import { createPortal } from "react-dom";
import { Modal } from "../../modalAmazon/Modal"; // Use the correct component name
import { useTranslation } from 'react-i18next';
import '../../Testimonials.css';
import 'aos/dist/aos.css';
import '../../Jobs.css';
import '../../Appmodal.css';
import reactL from './amazonpf/react.png';
import reduxL from './amazonpf/redux.png';
import amazonlogin from './amazonpf/amazonlogin.png';

function Card2() {
    const { t } = useTranslation();
    const [modalOpen, setModalOpen] = useState(false);

    const handleImageClick = () => {
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };

    return (
        <div className='card relat'>
            <div className="logocontainer">
              <a target="blank" href="https://github.com/FrontEnd-React3/myamazon">
                <img className="cardjob cursor" src={reactL} alt='reactL'  />
                <img className="cardjob cursor" src={reduxL} alt='reduxL'  /></a>
            </div>
            <div className="pushmedown">
                <img className="hover-element1 cardfill" id="amazonlogin" src={amazonlogin} alt='reduxL'  onClick={handleImageClick}/>
            </div>
            <span className='absol'>
                <button className="catbtn  mobilebtn btn btn-open" onClick={handleImageClick}>
                    {t('jobs6')}
                </button>
            </span>

            {modalOpen && createPortal(
                <Modal closeModal={handleCloseModal} onCancel={handleCloseModal}>
                    {/* Modal content goes here */}
                </Modal>,
                document.body
            )}
        </div>
    )
}

export default Card2;
