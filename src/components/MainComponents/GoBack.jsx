import {Link} from 'react-router-dom';

const GoBack = () => {

    return (
        <Link to="/"   onClick={() => {
            window.scroll({
              top: 0,
              left: 0,
              behavior: "smooth",
            });
          }}>
            <div className="go__back">
                <div className="button__arrow"></div>
                <a href="../index.html">Go back to home page</a>
            </div>
        </Link>

    )
}
export default GoBack