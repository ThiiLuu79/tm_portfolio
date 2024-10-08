import {Link} from 'react-router-dom';

const Button = ({text, redirect, blank, noreferrer, buttonType, onClickFunction}) => {

    const linkProps = {};
    if (blank) {
        linkProps.target = "_blank";
    }
    if (noreferrer) {
        linkProps.rel = "noreferrer";
    }
    
    const renderPushableButton = () => {
        return (
            <button className="tm_button tm_button_large">
                <span>
                    {text}
                </span>
            </button>
        )
    }
        
    if (buttonType === 'Link') {
        return (
            <Link className='btn__link' to={redirect} {...linkProps}>
                {renderPushableButton()}
            </Link>
        )
    } else if (buttonType === 'Download') {
        return (
            <a className='btn__link' href={redirect} download>
                {renderPushableButton()}
            </a>
        )
    }else if (buttonType === 'Toggle') {
        return (
            <button onClick={onClickFunction} className="tm_button tm_button_small" href={redirect} download>
                <span>
                    {text}
                </span>
            </button>
        )  
    }
    else{
        return null;
    }
}
export default Button
