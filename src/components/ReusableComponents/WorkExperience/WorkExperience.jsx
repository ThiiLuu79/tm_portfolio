import React from 'react';

import { useLanguage } from '../../../LanguageToggler/LanguageContext';

import * as reusableConstantsEn from '../../../i18n/reusableConstants_en';
import * as reusableConstantsFr from '../../../i18n/reusableConstants_fr';

const WorkExperience = ({ title, image, imgAlt, company, companyLink, location, workTime, description, contributions, tools }) => {
    
    const { language } = useLanguage();
    const reusableConstants = language === 'en' ? reusableConstantsEn : reusableConstantsFr;
    
    return(
        <section className="block project__item">
            <div>
                <div className="job-details">
                    <h3>{title}</h3>
                    <img src = {image} alt={imgAlt} width="500" className="block__img"></img>
                    <p><a href={companyLink} target="_blank" rel="noreferrer">{company}</a> - {location}</p>
                    <p id="nbc_time">{workTime}</p>
                </div>

                <div>
                    <p>{description}</p>
                </div>
                <br></br>
                <h4>{reusableConstants.CONTRIBUTIONS}</h4>
                <ul className="cont">
                    {contributions.map((contribution) => (
                        <li key={contribution}>{contribution}</li>
                    ))}
                </ul>
                <div>
                    <h4>{reusableConstants.TOOLS}</h4>
                    <ul className="tool-list">
                        {tools.map((tool) => (
                            <li key={tool}>{tool}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default WorkExperience;
