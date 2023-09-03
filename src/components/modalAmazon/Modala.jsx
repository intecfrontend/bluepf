import React from "react";
import amazoncheckout from '../myjobs/amazonpf/amazoncheckout.png'
import laralogin from '../myjobs/laravelpf/laravellogin.png'
import larafollow from '../myjobs/laravelpf/followsDB.png'
import posts from '../myjobs/laravelpf/postDB.png'
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
            <h1 className="modaltitle">My Laravel Learning</h1>
            <br />
            <p>Being a web developer, I realise, it is <strong>a life of learning</strong>. Squash and coding, those are my favorite pasttime.</p>
            <div className='contentmodal ' data-aos="fade-down">
              <div className='cardmodal hover-element'>
                <img className="cardfill" id="amazonloginmodal1" src={laralogin} alt='amazoncheckout' />
              </div>
              <div className='cardmodal hover-element hidewhensmall '>
                <img className="cardfill" id="amazonloginmodal2" src={larafollow} alt='amazoncode1' />
              </div>
              <div className='cardmodal hidewhensmall hover-element'>
                <img className="cardfill" id="laraloginmodal" src={posts} alt='amazoncode2' />
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
