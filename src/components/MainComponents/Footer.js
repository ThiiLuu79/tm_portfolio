import GoToTop from '../../components/MainComponents/GoToTop.js';

const Footer = () => {
  var today = new Date();
    return (
      <footer className="footer" id="contact">
      <h2 className="keep_in_touch">Let's keep in touch!</h2>

      <a href ="mailto:theminh.luong9@gmail.com" className = "footer-link">theminh.luong9@gmail.com</a>

      <div className="wrapper">

            <a href="https://www.linkedin.com/in/tmluong19/"  target="_blank">
              <div className="icon linkedin">
                <div className="tooltip">LinkedIn</div>
                <span><i className="fab fa-linkedin"></i></span>
              </div>
            </a>

            <a href="https://github.com/ThiiLuu79" target="_blank">
              <div className="icon github">
                <div className="tooltip">Github</div>
                <span><i className="fab fa-github"></i></span>
              </div>
            </a>
            <a href="https://www.instagram.com/thiiluu/" target="_blank">
              <div className="icon instagram">
                <div className="tooltip">Instagram</div>
                <span><i className="fab fa-instagram"></i></span>
              </div>
            </a>
            <a href="https://www.facebook.com/theminh.luong" target="_blank">
              <div className="icon facebook">
                <div className="tooltip">Facebook</div>
                <span><i className="fab fa-facebook"></i></span>
              </div>
            </a>
      </div>
      <GoToTop/>
      <small className="copyright">&copy; Copyright <span id="portfolioTimePeriod">2021-{today.getFullYear()}</span> The Minh Luong - ALL RIGHTS RESERVED</small>
    </footer>
    )
}
export default Footer