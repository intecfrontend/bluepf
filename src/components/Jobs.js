import React, { useState, useEffect } from "react";
import github from './myjobs/GitHub-Mark.png'
import reactL from './myjobs/amazonpf/react.png'
import reduxL from './myjobs/amazonpf/redux.png'
import amazonlogin from './myjobs/amazonpf/amazonlogin.png'
import posts from './myjobs/laravelpf/Posts.png'
import laraL from './myjobs/laravelpf/laravellogo.png'
import './Testimonials.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Jobs.css'
import './Appmodal.css'
import { createPortal } from "react-dom";
import { Modal } from "./modalAmazon/Modal";
// import { Modala } from "./modalaAmazon/Modala";
import { Modala } from "./modalAmazon/Modala";

function Jobs() {
    const [modalOpen, setModalOpen] = useState(false);
    const [modalaOpen, setModalaOpen] = useState(false);

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
    }, [])
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
                <h2 id="whitereal" >Realisations</h2>
                <span className='line'></span>
                <div className='content' data-aos="fade-down">
                    <div className='card relat'>
                        <a href="https://github.com/intecfrontend/bluepf" target="_blank">
                            <img className="cardjob" id="catimg" src={github} alt='github' />
                        </a>

                        <p>
                            <h1 className="pushmedown">About This Site</h1>
                            <span >Please, click on the GitHub Logo (cat)<br />
                                <a target="_blank" className="cattext" href="https://github.com/intecfrontend/bluepf"> to see the code of this site. </a>
                            </span>
                        </p>

                        <p>Special attention has been given to have a reusable code by exploiting the use of components and OOP to the fullest.<br /><br />I hope you saw the animations and Internationalisation as well as the Intersection Observer. Fully responsive to suit all screen sizes.<br /> <br />In all modesty, I believe all modern sites should have these assets.
                        </p>
                        <span className="absol"  >
                            <a target="_blank" className="catref" href="https://github.com/intecfrontend/bluepf">  <button className="catbtn btn btn-open"> More info </button> </a>
                        </span>
                    </div>

                    <div className='card relat'>
                        <img className="cardjob" src={reactL} alt='reactL' />
                        <img className="cardjob" src={reduxL} alt='reduxL' />
                        <div className="pushmedown">
                            <img className="hover-element cardfill" id="amazonlogin" src={amazonlogin} alt='reduxL' />
                        </div>
                        <span className='absol'>
                            <button className="catbtn btn btn-open" onClick={() => setModalOpen(true)}>
                                More info
                            </button>
                        </span>
                    </div>
                    <div className='card relat'>

                        <img className="cardjob" src={laraL} alt='laraL' />

                        <div className="pushmedown">
                            <img className=" hover-element cardfill" id="larapost" src={posts} alt='reduxL' />
                        </div>
                        <div className='absol'>
                            <button className="catbtn btn btn-open" onClick={() => setModalaOpen(true)}>
                                More info
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Jobs
