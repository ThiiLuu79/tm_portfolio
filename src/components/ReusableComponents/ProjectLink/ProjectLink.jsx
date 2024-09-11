import React from 'react';
import {Link} from 'react-router-dom';

const ProjectLink = ({ redirect, image, alt, text }) => {
        
    return(
        <div>
            <Link to={redirect}>
                <div className="project__container portfolio__item">
                    <img src = {image} alt={alt} width="900" className = "portfolio__img project__img"></img>
                    <div className="project__box">
                    <p className="project__text">{text}</p>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default ProjectLink;
