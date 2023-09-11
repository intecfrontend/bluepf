import React from "react";
import amazoncheckout from '../myjobs/cards/amazonpf/amazoncheckout.png'
import laralogin from '../myjobs/cards/laravelpf/laravellogin.png'
import larafollow from '../myjobs/cards/laravelpf/followsDB.png'
import posts from '../myjobs/cards/laravelpf/postDB.png'
import "./Modal.css";
import { useTranslation } from 'react-i18next';


export const Modala = ({ onCancel, closeModal, children }) => {
  const { t } = useTranslation();
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
            <h1 className="modaltitle">{t('Modala1')}</h1>
            <br />
            <p>{t('Modala2')}<strong>{t('Modala3')}</strong>{t('Modala4')}</p>
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
