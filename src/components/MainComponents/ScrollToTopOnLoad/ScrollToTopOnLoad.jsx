import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const ScrollToTopOnLoad = () => {
    const location = useLocation();

    useEffect(() => {
      if (location.hash) {
        let elem = document.getElementById(location.hash.slice(1));
        if (elem) {
          elem.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      }
    }, [location]);

    return null;
}

export default ScrollToTopOnLoad;
