import React, { useState, useEffect } from "react";
import github from './GitHub-Mark.png'
import '../../Testimonials.css';
import 'aos/dist/aos.css';
import '../../Jobs.css'
import '../../Appmodal.css'
import { useTranslation } from 'react-i18next';
function Card1() {
  const { t } = useTranslation();
  return (

    <div className='card relat'>
      <a href="https://github.com/intecfrontend/bluepf" target="_blank">
        <img className="cardjob" id="catimg" src={github} alt='github' />
      </a>

      <p>
        <h1 className="pushmedown">{t('jobs1')}</h1>
        <span >{t('jobs2')}<br />
          <a target="_blank" className="cattext" href="https://github.com/intecfrontend/bluepf"> {t('jobs22')} </a>
        </span>


        <p>{t('jobs3')}<br /><br />{t('jobs4')}<br /> <br />{t('jobs5')}
        </p> </p>
      <span className="absol"  >
        <a target="_blank" className="catref" href="https://github.com/intecfrontend/bluepf">  <button className="catbtn mobilebtn  btn btn-open"> {t('jobs6')} </button> </a>
      </span>
    </div>)
}

export default Card1