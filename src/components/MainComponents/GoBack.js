import {Link} from 'react-router-dom';

const GoBack = () => {

    return (
        <Link to="/">
            <div class="go__back">
                <div class="button__arrow"></div>
                <a href="../index.html">Go back to home page</a>
            </div>
        </Link>

    )
}
export default GoBack