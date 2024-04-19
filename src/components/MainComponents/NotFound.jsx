import GoBack from '../MainComponents/GoBack';
import {Link} from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <GoBack/>
            <h3 className="page_not_found">
                Whoops! It seems we've hit a dead end. Let's get back on track. <Link to="/">Navigate back to the homepage to continue your exploration</Link>. See you there!
            </h3>
        </div>

    )
}
export default NotFound