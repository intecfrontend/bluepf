import React from "react";
import amazoncheckout from '../myjobs/cards/amazonpf/amazoncheckout.png'
import amazoncode1 from '../myjobs/cards/amazonpf/amazonreducer.png'
import amazoncode2 from '../myjobs/cards/amazonpf/reddispatch.png'
import "./Modal.css"; import { useTranslation } from 'react-i18next';


export const Modal = ({ onSubmit, onCancel, closeModal, children }) => {
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
            <h1 className="modaltitle">{t('Modal1')}</h1>
            <br />
            <p>{t('Modal2')} <strong>'Firebase database' </strong>{t('Modal4')} <strong>'Redux'</strong> {t('Modal6')}</p>
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
