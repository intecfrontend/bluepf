import React, { useEffect } from "react";
// import john from './images/class.jpeg'
import classmates from './images/class.jpeg'
import './About.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div className='about' id='about'>
            <div className='container'>
                <img id="classimg" src={classmates} alt="" />
                <div className='col-2' data-aos="fade-down">
                    <h2>About</h2>
                    <span className='line'></span>
                    <p>Over the mast four years, I was a Code Instructor at intec Brussel
                        I transitioned from an Instructor to Head Instructor, specializing in web development for adults, often with university-level IT backgrounds. I covered GIT, HTML, CSS, JavaScript, React, PHP, Laravel, and Databases.
                        <br />
                        <br />
                        I not only guided students in debugging exercises but also coached and motivated them, along with fellow instructors. Additionally, I played a pivotal role in establishing the Intec website.
                        <br />
                        <br />

                        Before I was a graphic designer for over 25 years, I bring a multilingual aspect, fluently speaking/writing four languages (NL-FR-EN-ES (DE) ). As I find more joy in coding I changed my carreer in 2017 to become a full stack developer.

                    </p>
                    <a href='topreferentie.pdf' download>
                        <button className='button'>Download reference letter previous employer</button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default About
