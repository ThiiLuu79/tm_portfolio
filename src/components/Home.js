import Card from '../components/HomeComponents/Card.js';
import About from '../components/HomeComponents/About.js';
import CSProjects from '../components/HomeComponents/CSProjects.js';
import FreetimeProjects from '../components/HomeComponents/FreetimeProjects.js';
import Education from '../components/HomeComponents/Education.js';

const Home = () => {

    return (
        <div>
            <Card/>
            <About/>
            <CSProjects/>
            <FreetimeProjects/>
            <Education/>  
        </div>
    )
}
export default Home