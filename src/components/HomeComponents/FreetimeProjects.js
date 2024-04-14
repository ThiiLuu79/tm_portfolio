import arts from "../../img/home/art_gallery.jpg";
import photos from "../../img/home/photography_cover.jpg";

const FreetimeProjects = () => {

    return (
        <section class = "my-projects" id = "freetime_projects">
        <h2 class = "section__title section__title--projects">Freetime Projects</h2>
        <p class = "section__subtitle section__subtitle--projects">Hover over the images to see the project type</p>

            <a class = "portfolio__item drawPro_link">
            <div class="project__container">
                <img src = {arts} alt="art-project cover" width="900" class = "portfolio__img project__img"></img>
                <div class="project__box">
                <p class="project__text drawPro_">Art Gallery</p>
                </div>
            </div>
            </a>

            <a class = "portfolio__item photoPro_link">
            <div class="project__container">
                <img src = {photos} alt="photo-project cover" width="900" class = "portfolio__img project__img"></img>
                <div class="project__box">
                <p class="project__text photoPro_">Photo Gallery</p>
                </div>
            </div>
            </a>

        </section>
    )
}
export default FreetimeProjects