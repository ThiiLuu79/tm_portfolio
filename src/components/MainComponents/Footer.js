import GoToTop from '../../components/MainComponents/GoToTop.js';

const Footer = () => {
  var today = new Date();
    return (
      <footer class="footer" id="contact">
      <h2 class="keep_in_touch">Let's keep in touch!</h2>

      <a href ="mailto:theminh.luong9@gmail.com" class = "footer-link">theminh.luong9@gmail.com</a>

      <div class="wrapper">

            <a href="https://www.linkedin.com/in/tmluong19/"  target="_blank">
              <div class="icon linkedin">
                <div class="tooltip">LinkedIn</div>
                <span><i class="fab fa-linkedin"></i></span>
              </div>
            </a>

            <a href="https://github.com/ThiiLuu79" target="_blank">
              <div class="icon github">
                <div class="tooltip">Github</div>
                <span><i class="fab fa-github"></i></span>
              </div>
            </a>
            <a href="https://www.instagram.com/thiiluu/" target="_blank">
              <div class="icon instagram">
                <div class="tooltip">Instagram</div>
                <span><i class="fab fa-instagram"></i></span>
              </div>
            </a>
            <a href="https://www.facebook.com/theminh.luong" target="_blank">
              <div class="icon facebook">
                <div class="tooltip">Facebook</div>
                <span><i class="fab fa-facebook"></i></span>
              </div>
            </a>
      </div>
      <GoToTop/>
      <small class="copyright">&copy; Copyright <span id="portfolioTimePeriod">2021-{today.getFullYear()}</span> The Minh Luong - ALL RIGHTS RESERVED</small>
    </footer>
    )
}
export default Footer