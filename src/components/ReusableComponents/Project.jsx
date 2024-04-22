import React from 'react';

import{
    CONTRIBUTIONS,
    WORK_TIME,
    SKILLS
} from "./constants";

const Project = ({ title, period, description, contributions, workTime, tools, image, imgAlt, grades, buttons }) => (
    <section className="block project__item">
        <h2 className = "section__title section__title--block">{title}</h2>
        <p className = "section__subtitle section__subtitle--block">{period}</p>

        <div className = "block__body">
            <p>{description}
            </p>
            <br></br>

            <p className="cont-title">{CONTRIBUTIONS}</p>
            <ul className="cont">
                {contributions.map((contribution) => (
                <li key={contribution}>{contribution}</li>
                ))}
            </ul>

            <br></br>
            <h4>{WORK_TIME} {workTime}</h4>
            <ul style={{listStyleType:"none"}}>
                {grades.map((grade) => (
                <b key={grade}><li>{grade}</li></b>
                ))}
            </ul>
            <br/>
            <h4>{SKILLS}</h4>
            <ul style={{listStyleType:"none"}}>
                {tools.map((tool) => (
                    <li key={tool}>{tool}</li>
                ))}
            </ul>
            <br></br>
        </div>
        <div className="project__buttons">
            {buttons}
        </div>
        <img src = {image} alt={imgAlt} width="500" className="block__img"></img>

    </section>
);

export default Project;