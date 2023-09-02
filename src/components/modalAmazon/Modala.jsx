import React from "react";
import amazoncheckout from '../myjobs/amazonpf/amazoncheckout.png'
import amazoncode1 from '../myjobs/amazonpf/amazonreducer.png'
import amazoncode2 from '../myjobs/amazonpf/reddispatch.png'
import posts from '../myjobs/laravelpf/Posts.png'
import "./Modal.css";

export const Modala = ({ onCancel, closeModal, children }) => {
  return (
    <div className='container'>


      <div
        className="modal-container"
        onClick={(e) => {
          if (e.target.className === "modal-container")
            closeModal("Modal was closed");
        }}
      >
        <div className="modal">
          <div
            className="modal-header"
            onClick={() => closeModal("Modal was closed")}
          >
            <p className="close">&times;</p>
          </div>
          <div >{children}
            <h1 className="modaltitle">Amazona cloning excercise</h1>
            <br />
            <p>One of the many excercises I demanded but this one is connected to a <strong>Firebase database </strong>to log in. It also uses <strong>Redux</strong> to provide better accessability. </p>
            <div className='contentmodal ' data-aos="fade-down">
              <div className='cardmodal hover-element'>
                <img className="cardfill" id="amazonloginmodal1" src={amazoncheckout} alt='amazoncheckout' />
              </div>
              <div className='cardmodal hover-element hidewhensmall '>
                <img className="cardfill" id="amazonloginmodal2" src={amazoncode1} alt='amazoncode1' />
              </div>
              <div className='cardmodal hidewhensmall hover-element'>
                <img className="cardfill" id="laraloginmodal" src={amazoncode2} alt='amazoncode2' />
              </div>
            </div>


          </div>
          <div className="modal-footer">

            <button
              type="submit"
              className="btn btn-cancel hidewhensmall "
              onClick={() => onCancel("Cancel button was clicked")}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
