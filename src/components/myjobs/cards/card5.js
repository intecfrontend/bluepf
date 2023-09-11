import React, { useState } from "react";
import { useTranslation } from 'react-i18next';
import '../../Testimonials.css';
import 'aos/dist/aos.css';
import '../../Jobs.css';
import '../../Appmodal.css';
import movies from './movies/movies.jpg';
import apiL from './movies/api.jpg'

function Card5() {
    const { t } = useTranslation();


    return (
        <div className='card relat'>
            <a target="blank" href="https://github.com/intecfrontend/movies">
                <img className="cardjob cursor" src={apiL} alt='apil' />
            </a>
            <div className="pushmedown">
                <a target='blank' href="https://64f9e3ceece2470c1ece7273--stunning-macaron-98c52b.netlify.app/">
                    <img className="cursor hover-element1 cardfill" id="larapost" src={movies} alt='movies' />
                </a>
            </div>
            <div className='absol'>
                <a target="_blank" href="https://movies12345.netlify.app/">
                    <button className="catbtn  mobilebtn btn btn-open" >
                        {t('jobs6')}
                    </button></a>
            </div>
        </div>
    )
}

export default Card5;
