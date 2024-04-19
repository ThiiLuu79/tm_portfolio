import {Link} from 'react-router-dom';

const Button = ({text, redirect, blank, noreferrer, buttonType}) => {

    const linkProps = {};
    if (blank) {
        linkProps.target = "_blank";
    }
    if (noreferrer) {
        linkProps.rel = "noreferrer";
    }
    
    const renderPushableButton = () => {
        return (
            <button className="pushable">
                <span className="front">
                    {text}
                </span>
            </button>
        )
    }
        
    if (buttonType === 'Link') {
        return (
            <Link className='btn__link line-break--major' to={redirect} {...linkProps}>
                {renderPushableButton()}
            </Link>
        )
    } else if (buttonType === 'Download') {
        return (
            <a className='line-break--major' href={redirect} download>
                {renderPushableButton()}
            </a>
        )
    }
}
export default Button