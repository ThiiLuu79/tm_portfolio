import React from 'react';

const SocialLink = ({ redirect, iconClass, text, fabClass }) => {
        
    return(
        <a href={redirect}  target="_blank" rel="noreferrer">
            <div className={iconClass}>
            <div className="tooltip">{text}</div>
            <span><i className= {fabClass}></i></span>
            </div>
        </a>
    )
}

export default SocialLink;
