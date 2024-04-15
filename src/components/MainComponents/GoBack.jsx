import {Link} from 'react-router-dom';

const GoBack = () => {

    return (
        <Link to="/"  reloadDocument>
            <div className="go__back">
                <div className="button__arrow"></div>
                <a href="../index.html">Go back to home page</a>
            </div>
        </Link>

    )
}
export default GoBack