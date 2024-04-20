import GoBack from '../MainComponents/GoBack';
import {Link} from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <GoBack/>
            <div className="page_not_found">
                <h2>404</h2>
                <br/>
                <h3 >
                    Whoops! It seems we've hit a dead end. Let's get back on track. <Link to="/" style={{ textDecoration: 'underline' }}>Navigate back to the homepage to continue your exploration</Link>.<br/><br/>
                    You can still use the "Go back to home page" button or the navbar to navigate back to the homepage.<br/><br/>
                    See you there!
                </h3>
            </div>

        </div>

    )
}
export default NotFound