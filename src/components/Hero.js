import React from 'react'
import './Hero.css'
import SimpleSlider from "./carousel";


const Hero = () => {
    return (
        <div className='hero' id='hero'>
            <div className='content'>
                <p>Call me</p>
                <p>0499 388 227</p>
                <p>Web Development</p>
                <a href='./CV.BenLan3L.pdf' download>
                    <button className='button'>Download CV</button>
                </a>

            </div>
            <SimpleSlider />

        </div>
    )
}

export default Hero
