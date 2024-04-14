import about from "../../img/home/about_img.jpg";
import {Link} from 'react-router-dom';

const About = () => {

    return (
        <section class="block" id = "about">
            <h2 class = "section__title section__title--block">About me</h2>
            <p class = "section__subtitle section__subtitle--block user_country">Montreal, Canada</p>

            <div class = "block__body">
                <p class="block__content user_about_p1">I'm currently a Software Engineering student at ETS, with a passion for coding and problem-solving. 
    My last experience as a Full Stack Developer intern at National Bank of Canada gave me the opportunity to work on diverse projects and enhance my skills. 
    My expertise lies in Java, JavaScript and SQL, 
    enabling me to tackle front-end, back-end and database development challenges.</p>
                <br></br>
                <p class = "user_about_p2">As I look towards the future, my goal is to become a senior developer, 
    contributing my skills and knowledge to complex software solutions. 
    During my previous internships, I had the chance to work as a Full Stack Developer, where I customized websites for various clients. 
    This experience honed my ability to deliver tailored solutions that meet unique requirements.</p>
                <br></br>
                <p class = "user_about_p3">One of the defining qualities I bring to my work is resilience. I approach challenges with determination, 
    always seeking innovative solutions to overcome obstacles. Outside of my professional life, 
    I find joy in expressing my creativity through drawing and photography.</p>
                <br></br>
                
                <Link to="/Work">
                    <a class="workExp_link">
                    <button class="pushable">
                        <span class="front">
                        Working experiences
                        </span>
                    </button>
                    </a>
                </Link>
                <br></br><br></br>

            </div>
            <img src = {about} alt="about image" width="500" class="block__img"></img>
        </section>

    )
}
export default About