import React from 'react';

import { useLanguage } from '../LanguageToggler/LanguageContext';

import * as reusableConstantsEn from '../../../i18n/reusableConstants_en';
import * as reusableConstantsFr from '../../../i18n/reusableConstants_fr';


const PageItem = ({ title, period, description, contributions, workTime, tools, image, imgAlt, grades, buttons, itemType, companyLink, company, location, linkedinPost }) => {

    const { language } = useLanguage();
    const reusableConstants = language === 'en' ? reusableConstantsEn : reusableConstantsFr;

    return(
        <section className="block project__item">
            <h2 className = "section__title section__title--block">{title}</h2>
            <p className = "section__subtitle section__subtitle--block">{period}</p>
            {itemType === 'work' && (
                    <div>
                        <h4><a href={companyLink} target="_blank" rel="noreferrer">{company}</a> - {location}</h4>
                    </div>
            )}

            <div>
                <p>{description}
                </p>
                <br></br>

                <h4>{reusableConstants.CONTRIBUTIONS}</h4>
                <ul className="cont">
                    {contributions.map((contribution) => (
                    <li key={contribution}>{contribution}</li>
                    ))}
                </ul>

                <br></br>
                {itemType !== 'work' && (
                    <div>
                        <h4>{reusableConstants.WORK_TIME} {workTime}</h4>
                        <ul style={{listStyleType:"none"}}>
                        {grades.map((grade) => (
                            <b key={grade}><li>{grade}</li></b>
                        ))}
                        </ul>
                    </div>
                )}
                <br/>
                <h4>{reusableConstants.TOOLS}</h4>
                <ul className="tool-list">
                    {tools.map((tool) => (
                        <li key={tool}>{tool}</li>
                    ))}
                </ul>
                <br/>
                {itemType === 'work' && linkedinPost && (
                    <div>
                        <h4><a href={linkedinPost} target="_blank" rel="noreferrer">{reusableConstants.LEARN_MORE}</a></h4>
                    </div>
                )}
                <br></br>
            </div>
            <div className="project__buttons">
                {buttons}
            </div>
            <img src = {image} alt={imgAlt} width="500" className="block__img"></img>

        </section>
    )
};

export default PageItem;
