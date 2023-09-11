import React, { useState } from "react";
import { createPortal } from "react-dom";
import { Modala } from "../../modalAmazon/Modala";
import { useTranslation } from 'react-i18next';
import '../../Testimonials.css';
import 'aos/dist/aos.css';
import '../../Jobs.css';
import '../../Appmodal.css';
import laraL from './laravelpf/laravellogo.png';
import posts from './laravelpf/Posts.png';

function Card3() {
    const [modalaOpen, setModalaOpen] = useState(false); // Initialize as false
    const { t } = useTranslation();

    const handleButtonaClick = () => {
        setModalaOpen(true);
    };

    return (
        <div className='card relat'>
            <a target="blank" href="https://github.com/intecfrontend/laravel2">
                <img className="cardjob cursor" src={laraL} alt='laraL' />
            </a>
            <div className="pushmedown">
                <img className="cursor hover-element1 cardfill" id="larapost" src={posts} alt='reduxL' />
            </div>
            <div className='absol'>
                <button className="catbtn mobilebtn btn btn-open" onClick={handleButtonaClick}>
                    {t('jobs6')}
                </button>
            </div>

            {modalaOpen && createPortal(
                <Modala closeModal={() => setModalaOpen(false)} onCancel={() => setModalaOpen(false)}>
                    {/* Modal content goes here */}
                </Modala>,
                document.body
            )}
        </div>
    )
}

export default Card3;
