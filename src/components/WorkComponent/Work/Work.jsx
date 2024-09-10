import GoBack from '../../MainComponents/GoBack/GoBack';
import WorkExperience from "../../ReusableComponents/WorkExperience/WorkExperience";
import Card from '../../ReusableComponents/Card/Card';
import cover from "../../../img/experiences/experience.jpg";
import intactImg from "../../../img/experiences/intact.png";
import nbcImg from "../../../img/experiences/nbc_interns.jpg";
import inlibro from "../../../img/experiences/inlibro.png";
import ciuss from "../../../img/experiences/ciuss.jpg";

import GetExpTimeString from "../../../utils/time";

import { useLanguage } from '../../../LanguageContext/languageContext';

import * as workConstantsEn from '../../../i18n/workConstants_en';
import * as workConstantsFr from '../../../i18n/workConstants_fr';

import { LanguageToggler } from '../../../LanguageContext/languageToggler.jsx';

const Work = () => {

    const { language } = useLanguage();
    const workConstants = language === 'en' ? workConstantsEn : workConstantsFr;

    var intactStart = new Date(2024, 4, 6);
    var intactEnd = new Date(2024, 7, 23);
    var nbcStart = new Date(2023, 4, 14);
    var nbcEnd = new Date(2023, 7, 30);
    var inlibroStart = new Date(2022, 0);
    var inlibroEnd = new Date(2022, 3);
    var ciussStart = new Date(2019, 7);
    var ciussEnd = new Date(2019, 8);

    var intactExpTimeString = GetExpTimeString(intactEnd, intactStart); 
    var nbcExpTimeString = GetExpTimeString(nbcEnd, nbcStart);
    var inlibroExpTimeString = GetExpTimeString(inlibroEnd, inlibroStart);
    var ciussExpTimeString = GetExpTimeString(ciussEnd, ciussStart);


    return (
        <div>
            <LanguageToggler/>
            <GoBack/>
            <Card
                intro = {workConstants.WORK_INTRODUCTION}
                title = {workConstants.WORK_PAGE_TITLE}
                subtitle = {workConstants.WORK_SUBTITLE}
                image = {cover}
            />

            <div className="block_wrap">

            <WorkExperience
                    title={workConstants.INTACT_EXPERIENCE.title}
                    image={intactImg}
                    imgAlt={workConstants.INTACT_EXPERIENCE.imgAlt}
                    company={workConstants.INTACT_EXPERIENCE.company}
                    companyLink={workConstants.INTACT_EXPERIENCE.companyLink}
                    location={workConstants.INTACT_EXPERIENCE.location}
                    workTime={intactExpTimeString}
                    description={workConstants.INTACT_EXPERIENCE.description}
                    contributions={workConstants.INTACT_EXPERIENCE.contributions}
                    tools={workConstants.INTACT_EXPERIENCE.tools}
                />

                <WorkExperience
                    title={workConstants.NBC_EXPERIENCE.title}
                    image={nbcImg}
                    imgAlt={workConstants.NBC_EXPERIENCE.imgAlt}
                    company={workConstants.NBC_EXPERIENCE.company}
                    companyLink={workConstants.NBC_EXPERIENCE.companyLink}
                    location={workConstants.NBC_EXPERIENCE.location}
                    workTime={nbcExpTimeString}
                    description={workConstants.NBC_EXPERIENCE.description}
                    contributions={workConstants.NBC_EXPERIENCE.contributions}
                    tools={workConstants.NBC_EXPERIENCE.tools}
                />

                <WorkExperience
                    title={workConstants.INLIBRO_EXPERIENCE.title}
                    image={inlibro}
                    imgAlt={workConstants.INLIBRO_EXPERIENCE.imgAlt}
                    company={workConstants.INLIBRO_EXPERIENCE.company}
                    companyLink={workConstants.INLIBRO_EXPERIENCE.companyLink}
                    location={workConstants.INLIBRO_EXPERIENCE.location}
                    workTime={inlibroExpTimeString}
                    description={workConstants.INLIBRO_EXPERIENCE.description}
                    contributions={workConstants.INLIBRO_EXPERIENCE.contributions}
                    tools={workConstants.INLIBRO_EXPERIENCE.tools}
                />

                <WorkExperience
                    title={workConstants.CIUSS_EXPERIENCE.title}
                    image={ciuss}
                    imgAlt={workConstants.CIUSS_EXPERIENCE.imgAlt}
                    company={workConstants.CIUSS_EXPERIENCE.company}
                    companyLink={workConstants.CIUSS_EXPERIENCE.companyLink}
                    location={workConstants.CIUSS_EXPERIENCE.location}
                    workTime={ciussExpTimeString}
                    description={workConstants.CIUSS_EXPERIENCE.description}
                    contributions={workConstants.CIUSS_EXPERIENCE.contributions}
                    tools={workConstants.CIUSS_EXPERIENCE.tools}
                />
            </div>
            
        </div>
    )
}
export default Work
