import React, { useState, useEffect } from "react";
import github from './myjobs/GitHub-Mark.png'
import reactL from './myjobs/amazonpf/react.png'
import reduxL from './myjobs/amazonpf/redux.png'
import amazonlogin from './myjobs/amazonpf/amazonlogin.png'
import posts from './myjobs/laravelpf/Posts.png'
import movies from './myjobs/movies/movies.jpg'
import apiL from './myjobs/movies/api.jpg'
import inprog from './myjobs/inprogress/inprog.jpg'
import blog from './myjobs/blog/myblog.jpg'
import oopL from './myjobs/blog/oop.jpg'
import laraL from './myjobs/laravelpf/laravellogo.png'
import './Testimonials.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Jobs.css'
import './Appmodal.css'
import { createPortal } from "react-dom";
import { Modal } from "./modalAmazon/Modal";
import { useTranslation } from 'react-i18next';
import { Modala } from "./modalAmazon/Modala";

function Jobs() {
    const [modalOpen, setModalOpen] = useState(false);
    const [modalaOpen, setModalaOpen] = useState(false);
    const { t } = useTranslation();
    const handleButtonClick = (value) => {
        setModalOpen(false);
    };
    const handleButtonaClick = (value) => {
        setModalaOpen(false);
    };
    // const handleShowButtonClick = (value) => {
    //     setModalOpen(true);
    // };
    // const handleShowButtonaClick = (value) => {
    //     setModalaOpen(true);
    // };
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div className='jobs' id='jobs'>
            {modalOpen &&
                createPortal(
                    <Modal
                        closeModal={handleButtonClick}
                        onCancel={handleButtonClick}
                    >
                    </Modal>,
                    document.body
                )}

            {modalaOpen &&
                createPortal(
                    <Modala
                        closeModal={handleButtonaClick}
                        onCancel={handleButtonaClick}
                    >
                    </Modala>,
                    document.body
                )}


            <div className='container'>
                <h2 id="whitereal" >{t('code')}</h2>
                <span className='line'></span>
                <div className='content' data-aos="fade-down">
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
                    </div>

                    <div className='card relat'>
                        <div className="logocontainer">
                            <img className="cardjob cursor" src={reactL} alt='reactL' onClick={() => setModalOpen(true)} />
                            <img className="cardjob cursor" src={reduxL} alt='reduxL' onClick={() => setModalOpen(true)} /></div>
                        <div className="pushmedown">
                            <img className="hover-element cardfill" id="amazonlogin" src={amazonlogin} alt='reduxL' />
                        </div>
                        <span className='absol'>
                            <button className="catbtn  mobilebtn btn btn-open" onClick={() => setModalOpen(true)}>
                                {t('jobs6')}
                            </button>
                        </span>
                    </div>
                    <div className='card relat'>
                        <img className="cardjob cursor" src={laraL} alt='laraL' onClick={() => setModalaOpen(true)} />
                        <div className="pushmedown">
                            <img className="cursor hover-element cardfill" id="larapost" src={posts} alt='reduxL' />
                        </div>
                        <div className='absol'>
                            <button className="catbtn mobilebtn btn btn-open" onClick={() => setModalaOpen(true)}>
                                {t('jobs6')}
                            </button>
                        </div>
                    </div>
                    <div className='card relat'>
                        <img className="cardjob cursor" src={oopL} alt='laraL' onClick={() => setModalaOpen(true)} />
                        <div className="">
                            <img className="cursor hover-element cardfill" id="larapost" src={blog} alt='reduxL' />
                        </div>
                        <div className='absol'>
                            <button className="catbtn mobilebtn btn btn-open" onClick={() => setModalaOpen(true)}>
                                {t('jobs6')}
                            </button>
                        </div>
                    </div>
                    <div className='card relat'>
                        <img className="cardjob cursor" src={apiL} alt='apil' onClick={() => setModalaOpen(true)} />
                        <div className="pushmedown">
                            <a target='blank' href="https://64f9e3ceece2470c1ece7273--stunning-macaron-98c52b.netlify.app/">
                                <img className="cursor hover-element cardfill" id="larapost" src={movies} alt='movies' /></a>

                        </div>
                        <div className='absol'>
                            <button className="catbtn mobilebtn btn btn-open" onClick={() => setModalaOpen(true)}>
                                {t('jobs6')}
                            </button>
                        </div>
                    </div>
                    <div className='card relat'>
                        <div className="middleme">
                            <img id="inprogress" src={inprog} alt='reduxL' />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Jobs
