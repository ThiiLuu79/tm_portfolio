import academics from "../../img/home/academic.jpg";
import personals from "../../img/home/personal.jpg";

const CSProjects = () => {

    return (
        <section class = "my-projects" id = "cs_projects">
        <h2 class = "section__title section__title--projects">Computer Science Projects</h2>
        <p class = "section__subtitle section__subtitle--projects">Hover over the images to see the project type</p>


            <a class = "portfolio__item academicPro_link">
            <div class="project__container">
                <img src = {academics} alt="academic-project cover" width="900" class = "portfolio__img project__img"></img>
                <div class="project__box">
                <p class="project__text academicPro_">Academic Projects</p>
                </div>
            </div>
            </a>

            <a class = "portfolio__item personal_link">
            <div class="project__container">
                <img src = {personals} alt="personal-project cover" width="900" class = "portfolio__img project__img"></img>
                <div class="project__box">
                <p class="project__text personal_">Personal Projects</p>
                </div>
            </div>
            </a>

        </section>
    )
}
export default CSProjects