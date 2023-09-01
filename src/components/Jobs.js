import React, { useEffect } from "react";
import user1 from './images/user1.jpeg'
import user2 from './images/user2.jpeg'
import user3 from './images/user3.jpeg'
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
                <div className='content'data-aos="fade-down">
                    <div className='card'>
                        <img src={user1} alt='user1' />
                        <p>Benedikt worked under my supervision as an Instructor and later as Head Instructor. He is a highly passionate and committed developer. Not only was his technical guidance for students and instructors exceptional, but his support for Intec itself was also of a very high standard. Due to the discontinuation of some programs, Benedikt will be leaving our company on August 21, 2023 after having worked with us for 4 years. <br />I can wholeheartedly recommend him to any future employer.</p>
                        <p><span >Ruud Marks, tel.02 411 29 07 </span></p>
                        <p>Director of "Intec Brussel"</p>
                    </div>
                    <div className='card'>
                        <img src={user2} alt='user1' />
                        <p>A developer I will never forget. <br /><br />He made complex React code understandable to me. <br /><br />Thanks to his non stop support. Kind and professional. Anytime I needed it. I became a web developer in only 4 months. <br />A lot faster than I thought in my wildest imagination.<br /><br />A big thank you to you, my friend!</p>
                        <p><span >Tiago Ferreira</span></p>
                        <p>Web developer at Jamy (Belfius)
                        </p>
                    </div>
                    <div className='card'>
                        <img src={user3} alt='user1' />
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
