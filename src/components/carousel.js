import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import logo1 from "./images/logos/logo01.png"
import logo2 from "./images/logos/logo02.png"
import logo3 from "./images/logos/logo03.png"
import logo4 from "./images/logos/logo04.png"
import logo5 from "./images/logos/logo05.png"
import logo6 from "./images/logos/logo06.png"
import logo7 from "./images/logos/logo07.png"
import logo8 from "./images/logos/logo08.png"
import logo9 from "./images/logos/logo09.png"
import logo10 from "./images/logos/logo10.png"
import logo11 from "./images/logos/logo11.png"
import logo12 from "./images/logos/logo12.png"

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      infinite: true,
      speed: 3000,
      slidesToShow: 10,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000, // Adjust the value as needed (e.g., 3000 milliseconds = 3 seconds)
    };
    return (
      <div  >
        <Slider className="slider" {...settings}>
          <div>
            <img className="caritem" src={logo1} alt="Logo 1" />
          </div>
          <div>
            <img className="caritem" src={logo2} alt="Logo 2" />
          </div>
          <div>
            <img className="caritem" src={logo3} alt="Logo 3" />
          </div>
          <div>
            <img className="caritem" src={logo4} alt="Logo 4" />
          </div>
          <div>
            <img className="caritem" src={logo5} alt="Logo 5" />
          </div>
          <div>
            <img className="caritem" src={logo6} alt="Logo 6" />
          </div>
          <div>
            <img className="caritem" src={logo7} alt="Logo 7" />
          </div>
          <div>
            <img className="caritem" src={logo8} alt="Logo 8" />
          </div>          <div>
            <img className="caritem" src={logo9} alt="Logo 9" />
          </div>
          <div>
            <img className="caritem" src={logo10} alt="Logo 10" />
          </div>
          <div>
            <img className="caritem" src={logo11} alt="Logo 11" />
          </div>          <div>
            <img className="caritem" src={logo12} alt="Logo 12" />
          </div>
        </Slider>
      </div>
    );
  }
}
