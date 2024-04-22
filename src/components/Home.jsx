import Card from './homeComponents/Card';
import About from './homeComponents/About';
import CSProjects from './homeComponents/CSProjects';
import FreetimeProjects from './homeComponents/FreetimeProjects';
import Education from './homeComponents/Education';

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