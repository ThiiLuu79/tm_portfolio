import about from "../../img/home/about_img.jpg";
import ScrollToTopOnLoad from "../MainComponents/ScrollToTopOnLoad";
import Button from "../ReusableComponents/Button";

import {
    ABOUT_TITLE,
    ABOUT_LOCATION,
    ABOUT_P1,
    ABOUT_P2,
    ABOUT_P3
} from "../../i18n/homeConstants";

const About = () => {

    ScrollToTopOnLoad();

    return (
        <section className="block" id = "about">
            <h2 className = "section__title section__title--block">{ABOUT_TITLE}</h2>
            <p className = "section__subtitle section__subtitle--block user_country">{ABOUT_LOCATION}</p>

            <div className = "block__body">
                <p className="block__content user_about_p1">{ABOUT_P1}</p>
                <br></br>
                <p className = "user_about_p2">{ABOUT_P2}</p>
                <br></br>
                <p className = "user_about_p3">{ABOUT_P3}</p>
                <br></br>
                <Button text="Working experiences" redirect="/Work" blank={false} noreferrer={false} buttonType='Link'/>
                <br></br><br></br>

            </div>
            <img src = {about} alt="about_image" width="500" className="block__img"></img>
        </section>

    )
}
export default About