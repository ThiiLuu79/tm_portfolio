import academics from "../../img/home/academic.jpg";
import personals from "../../img/home/personal.jpg";
import {Link} from 'react-router-dom';

const CSProjects = () => {

    return (
        <section className = "my-projects" id = "cs_projects">
            <h2 className = "section__title section__title--projects">Computer Science Projects</h2>
            <p className = "section__subtitle section__subtitle--projects">Hover over the images to see the project type</p>

            <div className = "portfolio">

                <Link to="/Academics" onClick={() => {
                window.scroll({
                top: 0,
                left: 0,
                behavior: "smooth",
                });
            }}>

                    <div className="project__container portfolio__item academicPro_link">
                        <img src = {academics} alt="academic-project cover" width="900" className = "portfolio__img project__img"></img>
                        <div className="project__box">
                        <p className="project__text academicPro_">Academic Projects</p>
                        </div>
                    </div>
                </Link>

                <Link to="/Personals" onClick={() => {
                window.scroll({
                top: 0,
                left: 0,
                behavior: "smooth",
                });
            }}>

                <div className="project__container portfolio__item personal_link">
                    <img src = {personals} alt="personal-project cover" width="900" className = "portfolio__img project__img"></img>
                    <div className="project__box">
                        <p className="project__text personal_">Personal Projects</p>
                    </div>
                </div>
                </Link>

            </div>

        </section>
    )
}
export default CSProjects