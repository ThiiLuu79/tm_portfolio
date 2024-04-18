import Card from './HomeComponents/Card.jsx';
import About from './HomeComponents/About.jsx';
import CSProjects from './HomeComponents/CSProjects.jsx';
import FreetimeProjects from './HomeComponents/FreetimeProjects.jsx';
import Education from './HomeComponents/Education.jsx';

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