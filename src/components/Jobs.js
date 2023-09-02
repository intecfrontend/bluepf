import React, { useState, useEffect } from "react";
import github from './myjobs/GitHub-Mark.png'
import reactL from './myjobs/amazonpf/react.png'
import reduxL from './myjobs/amazonpf/redux.png'
import amazonlogin from './myjobs/amazonpf/amazonlogin.png'
import posts from './myjobs/laravelpf/Posts.png'
import laraL from './myjobs/laravelpf/laravellogo.png'
import fullimg from './myjobs/laravelpf/full.png'
import './Testimonials.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Jobs.css'
import './Appmodal.css'
import { createPortal } from "react-dom";
import {Modal} from "./modalAmazon/Modal";


const Jobs = () => {

    const [modalOpen, setModalOpen] = useState(false);
    const [message, setMessage] = useState("");

    const handleButtonClick = (value) => {
        setModalOpen(false);
        setMessage(value);
    };

    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div className='jobs' id='jobs'>

            {message}
            <button className="btn btn-open" onClick={() => setModalOpen(true)}>
                Open
            </button>
            {modalOpen &&
                createPortal(
                    <Modal
                        closeModal={handleButtonClick}
                        onSubmit={handleButtonClick}
                        onCancel={handleButtonClick}
                    >
                        <h1>This is a modal</h1>
                        <br />
                        <p>This is the modal description</p>
                    </Modal>,
                    document.body
                )}


            <div className='container'>
                <h2 id="whitereal" >Realisations</h2>
                <span className='line'></span>
                <div className='content' data-aos="fade-down">
                    <div className='card'>
                        <a href="https://github.com/intecfrontend/bluepf" target="_blank">
                            <img className="cardjob" id="catimg" src={github} alt='github' />
                        </a>
                        <p>
                            <h1>About This Site</h1>
                            <span >Please, click on the GitHub Logo (cat)<br />
                                <a target="_blank" className="catref" href="https://github.com/intecfrontend/bluepf"> to see the code of this site. </a>
                            </span>
                        </p>

                        <p>Special attention has been given to have a reusable code by exploiting the use of components and OOP to the fullest.<br /><br />I hope you saw the animations and Internationalisation as well as the Intersection Observer. Fully responsive to suit all screen sizes.<br /> <br />In all modesty, I believe all modern sites should have these assets.
                        </p>
                        <p>
                            <span >
                                <a target="_blank" className="catref" href="https://github.com/intecfrontend/bluepf">  <button className="catbtn btn btn-open"> More info </button> </a>
                            </span>
                        </p>
                    </div>
                    <div className='card'>
                        <img className="cardjob" src={reactL} alt='reduxL' />
                        <img className="cardjob" src={reduxL} alt='reduxL' />
                        <img className="cardfill" id="amazonlogin" src={amazonlogin} alt='reduxL' />
                        <p>
                            <span >
                                <button className="catbtn btn btn-open" onClick={() => setModalOpen(true)}> More info     </button>
                            </span>
                        </p>

                    </div>
                    <div className='card'>
                        <img className="cardjob" src={laraL} alt='laraL' />
                        <img className="cardfill" id="laralogin" src={posts} alt='reduxL' />
                        <p>
                            <span >
                                <a target="_blank" className="catref" href="https://github.com/intecfrontend/bluepf">  <button className="catbtn"> More info </button> </a>
                            </span>
                        </p>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Jobs
