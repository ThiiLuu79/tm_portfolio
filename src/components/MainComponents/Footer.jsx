import GoToTop from './GoToTop';


import { useLanguage } from '../../LanguageContext/languageContext';

import * as mainConstantsEn from '../../i18n/mainConstants_en.js';
import * as mainConstantsFr from '../../i18n/mainConstants_fr.js';

const Footer = () => {
  var today = new Date();

  const { language } = useLanguage();
  const mainConstants = language === 'en' ? mainConstantsEn : mainConstantsFr;

    return (
      <footer className="footer" id="contact">
      <h2 className="keep_in_touch">{mainConstants.FOOTER_TITLE}</h2>

      <a href ="mailto:theminh.luong9@gmail.com" className = "footer-link">{mainConstants.EMAIL}</a>

      <div className="wrapper">

            <a href="https://www.linkedin.com/in/tmluong19/"  target="_blank" rel="noreferrer">
              <div className="icon linkedin">
                <div className="tooltip">{mainConstants.LINKEDIN}</div>
                <span><i className="fab fa-linkedin"></i></span>
              </div>
            </a>

            <a href="https://github.com/ThiiLuu79" target="_blank" rel="noreferrer">
              <div className="icon github">
                <div className="tooltip">{mainConstants.GITHUB}</div>
                <span><i className="fab fa-github"></i></span>
              </div>
            </a>
            <a href="https://www.instagram.com/thiiluu/" target="_blank" rel="noreferrer">
              <div className="icon instagram">
                <div className="tooltip">{mainConstants.INSTAGRAM}</div>
                <span><i className="fab fa-instagram"></i></span>
              </div>
            </a>
            <a href="https://www.facebook.com/theminh.luong" target="_blank" rel="noreferrer">
              <div className="icon facebook">
                <div className="tooltip">{mainConstants.FACEBOOK}</div>
                <span><i className="fab fa-facebook"></i></span>
              </div>
            </a>
      </div>
      <GoToTop/>
      <small className="copyright">&copy; {mainConstants.COPYRIGHT} <span id="portfolioTimePeriod">{mainConstants.PORTFOLIO_START_YEAR}{today.getFullYear()}</span> {mainConstants.ALL_RIGHTS_RESERVED}</small>
    </footer>
    )
}
export default Footer