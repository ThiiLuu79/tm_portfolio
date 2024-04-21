import React from 'react';

import{
    CONTRIBUTIONS,
    TOOLS
} from "./constants.js";

const WorkExperience = ({ title, image, imgAlt, company, companyLink, location, workTime, description, contributions, tools }) => (
    
    <section className="block project__item">
        <div className = "block__body">
            <div className="job-details">
                <h3>{title}</h3>
                <img src = {image} alt={imgAlt} width="500" className="block__img"></img>
                <p><a href={companyLink} target="_blank" rel="noreferrer">{company}</a> - {location}</p>
                <p id="nbc_time">{workTime}</p>
            </div>

            <div className="job-summary">
                <p>{description}</p>
            </div>
            <br></br>
            <p className="cont-title">{CONTRIBUTIONS}</p>
            <ul className="cont">
                {contributions.map((contribution) => (
                    <li key={contribution}>{contribution}</li>
                ))}
            </ul>
            <div className="environment">
                <p className="tools">{TOOLS}</p>
                <ul className="tool-list">
                    {tools.map((tool) => (
                        <li key={tool}>{tool}</li>
                    ))}
                </ul>
            </div>
        </div>
    </section>
    
);

export default WorkExperience;