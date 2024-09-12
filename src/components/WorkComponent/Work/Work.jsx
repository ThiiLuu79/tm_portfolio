import Card from '../../ReusableComponents/Card/Card';
import cover from "../../../img/experiences/experience.jpg";
import intactImg from "../../../img/experiences/intact.png";
import nbcImg from "../../../img/experiences/nbc_interns.jpg";
import inlibro from "../../../img/experiences/inlibro.png";
import ciuss from "../../../img/experiences/ciuss.jpg";

import GetExpTimeString from "../../../utils/time";

import { useLanguage } from '../../ReusableComponents/LanguageToggler/LanguageContext';

import * as workConstantsEn from '../../../i18n/workConstants_en';
import * as workConstantsFr from '../../../i18n/workConstants_fr';
import PageItem from "../../ReusableComponents/PageItem/PageItem";


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
            <Card
                intro = {workConstants.WORK_INTRODUCTION}
                title = {workConstants.WORK_PAGE_TITLE}
                subtitle = {workConstants.WORK_SUBTITLE}
                image = {cover}
            />
            <div>
                <PageItem
                    title={workConstants.INTACT_EXPERIENCE.title}
                    period={intactExpTimeString}
                    description= {workConstants.INTACT_EXPERIENCE.description}
                    contributions={workConstants.INTACT_EXPERIENCE.contributions}
                    tools={workConstants.INTACT_EXPERIENCE.tools}
                    image={intactImg}
                    imgAlt={workConstants.INTACT_EXPERIENCE.imgAlt}
                    itemType={"work"}
                    companyLink={workConstants.INTACT_EXPERIENCE.companyLink}
                    company={workConstants.INTACT_EXPERIENCE.company}
                    location={workConstants.INTACT_EXPERIENCE.location}
                    linkedinPost={workConstants.INTACT_EXPERIENCE.linkedinPost}
                />
                <PageItem
                    title={workConstants.NBC_EXPERIENCE.title}
                    period={nbcExpTimeString}
                    description={workConstants.NBC_EXPERIENCE.description}
                    contributions={workConstants.NBC_EXPERIENCE.contributions}
                    tools={workConstants.NBC_EXPERIENCE.tools}
                    image={nbcImg}
                    imgAlt={workConstants.NBC_EXPERIENCE.imgAlt}
                    itemType={"work"}
                    companyLink={workConstants.NBC_EXPERIENCE.companyLink}
                    company={workConstants.NBC_EXPERIENCE.company}
                    location={workConstants.NBC_EXPERIENCE.location}
                    linkedinPost={workConstants.NBC_EXPERIENCE.linkedinPost}
                />
                <PageItem
                    title={workConstants.INLIBRO_EXPERIENCE.title}
                    period={inlibroExpTimeString}
                    description={workConstants.INLIBRO_EXPERIENCE.description}
                    contributions={workConstants.INLIBRO_EXPERIENCE.contributions}
                    tools={workConstants.INLIBRO_EXPERIENCE.tools}
                    image={inlibro}
                    imgAlt={workConstants.INLIBRO_EXPERIENCE.imgAlt}
                    itemType={"work"}
                    companyLink={workConstants.INLIBRO_EXPERIENCE.companyLink}
                    company={workConstants.INLIBRO_EXPERIENCE.company}
                    location={workConstants.INLIBRO_EXPERIENCE.location}
                    linkedinPost={workConstants.INLIBRO_EXPERIENCE.linkedinPost}
                />
                <PageItem
                    title={workConstants.CIUSS_EXPERIENCE.title}
                    period={ciussExpTimeString}
                    description={workConstants.CIUSS_EXPERIENCE.description}
                    contributions={workConstants.CIUSS_EXPERIENCE.contributions}
                    tools={workConstants.CIUSS_EXPERIENCE.tools}
                    image={ciuss}
                    imgAlt={workConstants.CIUSS_EXPERIENCE.imgAlt}
                    itemType={"work"}
                    companyLink={workConstants.CIUSS_EXPERIENCE.companyLink}
                    company={workConstants.CIUSS_EXPERIENCE.company}
                    location={workConstants.CIUSS_EXPERIENCE.location}
                />
            </div>
        </div>
    )
}
export default Work
