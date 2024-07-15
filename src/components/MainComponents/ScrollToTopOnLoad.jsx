import { useLocation } from "react-router-dom";
import { useEffect } from "react";

// When the location changes, this function checks if there's hash in the url
// If there is, then scroll to that section Id, else to the top of the page
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

    return null; // This component doesn't render anything
}

export default ScrollToTopOnLoad;
