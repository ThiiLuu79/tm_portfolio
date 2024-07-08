import GoToTop from './GoToTop';

import{
  FOOTER_TITLE,
  EMAIL,
  LINKEDIN,
  GITHUB,
  INSTAGRAM,
  FACEBOOK,
  COPYRIGHT,
  ALL_RIGHTS_RESERVED,
  PORTFOLIO_START_YEAR
} from "../../i18n/globalConstants.js";

const Footer = () => {
  var today = new Date();
    return (
      <footer className="footer" id="contact">
      <h2 className="keep_in_touch">{FOOTER_TITLE}</h2>

      <a href ="mailto:theminh.luong9@gmail.com" className = "footer-link">{EMAIL}</a>

      <div className="wrapper">

            <a href="https://www.linkedin.com/in/tmluong19/"  target="_blank" rel="noreferrer">
              <div className="icon linkedin">
                <div className="tooltip">{LINKEDIN}</div>
                <span><i className="fab fa-linkedin"></i></span>
              </div>
            </a>

            <a href="https://github.com/ThiiLuu79" target="_blank" rel="noreferrer">
              <div className="icon github">
                <div className="tooltip">{GITHUB}</div>
                <span><i className="fab fa-github"></i></span>
              </div>
            </a>
            <a href="https://www.instagram.com/thiiluu/" target="_blank" rel="noreferrer">
              <div className="icon instagram">
                <div className="tooltip">{INSTAGRAM}</div>
                <span><i className="fab fa-instagram"></i></span>
              </div>
            </a>
            <a href="https://www.facebook.com/theminh.luong" target="_blank" rel="noreferrer">
              <div className="icon facebook">
                <div className="tooltip">{FACEBOOK}</div>
                <span><i className="fab fa-facebook"></i></span>
              </div>
            </a>
      </div>
      <GoToTop/>
      <small className="copyright">&copy; {COPYRIGHT} <span id="portfolioTimePeriod">{PORTFOLIO_START_YEAR}{today.getFullYear()}</span> {ALL_RIGHTS_RESERVED}</small>
    </footer>
    )
}
export default Footer