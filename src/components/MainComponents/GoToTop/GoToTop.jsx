import {Link} from 'react-router-dom';

const GoToTop = () => {

    return (
        <Link className="go__top" onClick={() => {
            window.scroll({
              top: 0,
              left: 0,
              behavior: "smooth",
            });
          }}>
            <div className="button__arrow"></div>
        </Link>
    )
}
export default GoToTop
