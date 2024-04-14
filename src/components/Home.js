import Card from '../components/HomeComponents/Card.js';
import About from '../components/HomeComponents/About.js';
import CSProjects from '../components/HomeComponents/CSProjects.js';
import FreetimeProjects from '../components/HomeComponents/FreetimeProjects.js';
import Education from '../components/HomeComponents/Education.js';
import GoToTop from '../components/MainComponents/GoToTop.js';

const Home = () => {

    return (
        <div>
            <Card/>
            <About/>
            <CSProjects/>
            <FreetimeProjects/>
            <Education/>
            <GoToTop/>
        </div>
    )
}
export default Home