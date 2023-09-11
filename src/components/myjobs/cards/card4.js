import React, { useState } from "react";
import { useTranslation } from 'react-i18next';
import '../../Testimonials.css';
import 'aos/dist/aos.css';
import '../../Jobs.css';
import '../../Appmodal.css';
import oopL from './blog/oop.jpg'
import blog from './blog/myblog.jpg'

function Card4() {
    const { t } = useTranslation();

    return (
        <div className='card relat'>
            <a target="blank" href="https://asp-reactblog.netlify.app/">
                <img className="cardjob cursor" src={oopL} alt='laraL'/>
            </a>
            <div className="">
                <img className="cursor hover-element1 cardfill" id="larapost" src={blog} alt='reduxL' />
            </div>
            <div className='absol'>
                <a target="_blank" href="https://asp-reactblog.netlify.app/">
                    <button className="catbtn  mobilebtn btn btn-open" >
                        {t('jobs6')}
                    </button></a>
            </div>
        </div>
    )
}

export default Card4;
