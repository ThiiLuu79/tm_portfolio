import GoBack from './mainComponents/GoBack.jsx';
import WorkExperience from "./reusableComponents/WorkExperience.jsx";

import cover from "../img/experiences/experience.jpg";
import nbcImg from "../img/experiences/nbc_interns.jpg";
import inlibro from "../img/experiences/inlibro.png";
import ciuss from "../img/experiences/ciuss.jpg";

import getExpTimeString from "../utils/time.js";

import {
    WORK_PAGE_TITLE,
    NBC_EXPERIENCE,
    INLIBRO_EXPERIENCE,
    CIUSS_EXPERIENCE
} from "./workConstants.js";

const Work = () => {

    var nbcStart = new Date(2023, 4, 14);
    var nbcEnd = new Date(2023, 7, 30);
    var inlibroStart = new Date(2022, 0);
    var inlibroEnd = new Date(2022, 3);
    var ciussStart = new Date(2019, 7);
    var ciussEnd = new Date(2019, 8);

    var nbcExpTimeString = getExpTimeString(nbcEnd, nbcStart);
    var inlibroExpTimeString = getExpTimeString(inlibroEnd, inlibroStart);
    var ciussExpTimeString = getExpTimeString(ciussEnd, ciussStart);


    return (
        <div>
            <GoBack/>
            
            <section className="exp_section">
                <h2 className = "section__title section__title--block">{WORK_PAGE_TITLE}</h2>
                <img src = {cover} alt="experience page cover" width="500" className="block__img"></img>
            </section>

            <div className="block_wrap">

                <WorkExperience
                    title={NBC_EXPERIENCE.title}
                    image={nbcImg}
                    imgAlt={NBC_EXPERIENCE.imgAlt}
                    company={NBC_EXPERIENCE.company}
                    companyLink={NBC_EXPERIENCE.companyLink}
                    location={NBC_EXPERIENCE.location}
                    workTime={nbcExpTimeString}
                    description={NBC_EXPERIENCE.description}
                    contributions={NBC_EXPERIENCE.contributions}
                    tools={NBC_EXPERIENCE.tools}
                />

                <WorkExperience
                    title={INLIBRO_EXPERIENCE.title}
                    image={inlibro}
                    imgAlt={INLIBRO_EXPERIENCE.imgAlt}
                    company={INLIBRO_EXPERIENCE.company}
                    companyLink={INLIBRO_EXPERIENCE.companyLink}
                    location={INLIBRO_EXPERIENCE.location}
                    workTime={inlibroExpTimeString}
                    description={INLIBRO_EXPERIENCE.description}
                    contributions={INLIBRO_EXPERIENCE.contributions}
                    tools={INLIBRO_EXPERIENCE.tools}
                />

                <WorkExperience
                    title={CIUSS_EXPERIENCE.title}
                    image={ciuss}
                    imgAlt={CIUSS_EXPERIENCE.imgAlt}
                    company={CIUSS_EXPERIENCE.company}
                    companyLink={CIUSS_EXPERIENCE.companyLink}
                    location={CIUSS_EXPERIENCE.location}
                    workTime={ciussExpTimeString}
                    description={CIUSS_EXPERIENCE.description}
                    contributions={CIUSS_EXPERIENCE.contributions}
                    tools={CIUSS_EXPERIENCE.tools}
                />
            </div>
            
        </div>
    )
}
export default Work