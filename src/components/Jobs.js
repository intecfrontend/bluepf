import React, { useEffect } from "react";
import github from './myjobs/GitHub-Mark.png'
import reduxL from './myjobs/amazonpf/redux.png'
import laraL from './myjobs/laravelpf/laravellogo.png'
import './Testimonials.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Jobs.css'


const Jobs = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div className='jobs' id='jobs'>
            <div className='container'>
                <h2 id="whitereal" >Realisations</h2>
                <span className='line'></span>
                <div className='content' data-aos="fade-down">
                    <div className='card'>
                        <a href="https://github.com/intecfrontend/bluepf" target="_blank">
                            <img className="cardjob" id="catimg" src={github} alt='github' />
                        </a>
                        <p>
                            <span >Please, click on the GitHub Logo (cat)<br />
                                <a target="_blank" className="catref" href="https://github.com/intecfrontend/bluepf"> to see the code of this site. </a>
                            </span>
                        </p>

                        <p>Special attention has been given to have a reusable code by exploiting the use of components and OOP to the fullest.<br/><br/>I hope you saw the animations and Internationalisation as well as the Intersection Observer. <br/><br/>In all modesty, I believe all modern sites should have these assets. </p>                   <p>       <span >
                        <a target="_blank" className="catref" href="https://github.com/intecfrontend/bluepf">  <button className="catbtn"> More info </button> </a>
                            </span></p>  
                    </div>
                    <div className='card'>
                        <img className="cardjob" src={reduxL} alt='reduxL' />
                        <p>A developer I will never forget. <br /><br />He made complex React code understandable to me. <br /><br />Thanks to his non stop support. Kind and professional. Anytime I needed it. I became a web developer in only 4 months. <br />A lot faster than I thought in my wildest imagination.<br /><br />A big thank you to you, my friend!</p>
                        <p><span >Tiago Ferreira</span></p>
                        <p>Web developer at Jamy (Belfius)
                        </p>
                    </div>
                    <div className='card'>
                        <img className="cardjob" src={laraL} alt='laraL' />
                        <p>I owe my developers career to Benedikt!<br /> <br /> If it weren't for his passion for coding, I wouldn't be a developer. <br /> <br /> He supported me through some challenging times and gave me the confidence I needed during a critical moment in my life!





                        </p>
                        <p><span >Ufuk Uysal</span></p>
                        <p>Javascript Developer @ WorldLine <br /> Youtube Code instructor, KodMan</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Jobs
