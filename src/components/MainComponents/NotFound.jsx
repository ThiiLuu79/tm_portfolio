import GoBack from '../MainComponents/GoBack';
import {Link} from 'react-router-dom';

import{
    ERROR_404,
    ERROR_MESSAGE,
    NAVIGATE_BACK,
    HINTS,
    SEE_YOU
} from "./constants.js";

const NotFound = () => {
    return (
        <div>
            <GoBack/>
            <div className="page_not_found">
                <h2>{ERROR_404}</h2>
                <br/>
                <h3 >
                    {ERROR_MESSAGE} <Link to="/" style={{ textDecoration: 'underline' }}>{NAVIGATE_BACK}</Link>.<br/><br/>
                    {HINTS}<br/><br/>
                    {SEE_YOU}
                </h3>
            </div>

        </div>

    )
}
export default NotFound