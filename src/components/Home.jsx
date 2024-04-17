import Card from './HomeComponents/Card.jsx';
import About from './HomeComponents/About.jsx';
import CSProjects from './HomeComponents/CSProjects.jsx';
import FreetimeProjects from './HomeComponents/FreetimeProjects.jsx';
import Education from './HomeComponents/Education.jsx';
import Navbar from './MainComponents/Navbar.jsx';

const Home = () => {

    return (
        <div>
            <Navbar/>
            <Card/>
            <About/>
            <CSProjects/>
            <FreetimeProjects/>
            <Education/>  
        </div>
    )
}
export default Home