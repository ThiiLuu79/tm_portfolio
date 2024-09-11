import { useLanguage } from '../../../LanguageToggler/LanguageContext.js';

import * as mainConstantsEn from '../../../i18n/mainConstants_en.js';
import * as mainConstantsFr from '../../../i18n/mainConstants_fr.js';

import SocialLink from '../../ReusableComponents/SocialLink/SocialLink';

const Footer = () => {
  var today = new Date();

  const { language } = useLanguage();
  const mainConstants = language === 'en' ? mainConstantsEn : mainConstantsFr;

    return (
    <footer className="footer" id="contact">
      <h2 className="keep_in_touch">{mainConstants.FOOTER_TITLE}</h2>

      <a href ="mailto:theminh.luong9@gmail.com" className = "footer-link">{mainConstants.EMAIL}</a>

      <div className="wrapper">
            <SocialLink
              redirect="https://www.linkedin.com/in/tmluong19/"
              iconClass="icon linkedin"
              text={mainConstants.LINKEDIN}
              fabClass="fab fa-linkedin"
            />
            <SocialLink
              redirect="https://github.com/ThiiLuu79"
              iconClass="icon github"
              text={mainConstants.GITHUB}
              fabClass="fab fa-github"
            />
      </div>
      <small className="copyright">&copy; {mainConstants.COPYRIGHT} <span>{mainConstants.PORTFOLIO_START_YEAR}{today.getFullYear()}</span> {mainConstants.ALL_RIGHTS_RESERVED}</small>
    </footer>
    )
}
export default Footer
