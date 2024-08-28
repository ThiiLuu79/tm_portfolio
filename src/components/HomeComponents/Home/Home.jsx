import Card from '../Card/Card';
import About from '../About/About';
import CSProjects from '../CSProjects/CSProjects';
import FreetimeProjects from '../FreeTimeProjects/FreetimeProjects';
import Education from '../Education/Education';

import { LanguageToggler } from '../../../LanguageContext/languageToggler.jsx';

const Home = () => {

    return (
        <div>
            <LanguageToggler/>
            <Card/>
            <About/>
            <CSProjects/>
            <FreetimeProjects/>
            <Education/>  
        </div>
    )
}
export default Home
