import { useTranslation } from 'react-i18next';
import './Hero.css'
import SimpleSlider from "./carousel";


const Hero = () => {const { t } = useTranslation();

    return (
        <div className='hero' id='hero'>
            <div className='content'>
                <p>{t('call_me')}</p>
                <p>0499 388 227</p>
                <p>{t('webd')}</p>
                <a href='./CV.BenLan3L.pdf' download>
                    <button className='button'>{t('down')}</button>
                </a>

            </div>
            <SimpleSlider />

        </div>
    )
}

export default Hero
