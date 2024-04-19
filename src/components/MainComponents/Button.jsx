import {Link} from 'react-router-dom';

const Button = ({text, redirect, blank, noreferrer}) => {

        const linkProps = {};
        if (blank) {
            linkProps.target = "_blank";
        }
        if (noreferrer) {
            linkProps.rel = "noreferrer";
        }

    return (
        <Link className='btn__link' to={redirect} {...linkProps}>
            <button className="pushable">
                <span className="front">
                    {text}
                </span>
            </button>
        </Link>
    )
}
export default Button