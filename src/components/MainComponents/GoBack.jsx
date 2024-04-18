import {Link} from 'react-router-dom';

import ScrollToTopOnLoad from './ScrollToTopOnLoad.jsx';

const GoBack = () => {

    ScrollToTopOnLoad();

    return (
        <Link to="/" className='go_back_container'>
            <div className="go__back">
                <div className="button__arrow"></div>
                  Go back to home page
            </div>
        </Link>

    )
}
export default GoBack