import {Link} from 'react-router-dom';

import ScrollToTopOnLoad from './ScrollToTopOnLoad.jsx';

import { GO_BACK } from './constants.js';

const GoBack = () => {

    ScrollToTopOnLoad();

    return (
        <Link to="/" className='go_back_container'>
            <div className="go__back">
                <div className="button__arrow"></div>
                  {GO_BACK}
            </div>
        </Link>

    )
}
export default GoBack