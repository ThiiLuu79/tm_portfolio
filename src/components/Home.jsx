import Card from './HomeComponents/Card';
import About from './HomeComponents/About';
import CSProjects from './HomeComponents/CSProjects';
import FreetimeProjects from './HomeComponents/FreetimeProjects';
import Education from './HomeComponents/Education';

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