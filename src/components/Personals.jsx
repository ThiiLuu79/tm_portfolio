import GoBack from './MainComponents/GoBack';

import cover from "../img/personal/html.jpg";
import cssZenGarden from "../img/personal/cssZenGarden.jpg";
import pygames from "../img/personal/games.gif";
import tititea from "../img/personal/tititea.jpg";

//import sharkVideo from "../archives/video/shark.mp4";
//import sharkPicture from "../img/personal/hungryShark.jpg";

import sharkZip from "../archives/zip/Hungry Shark.zip";
import carZip from "../archives/zip/Car Crash.zip";
import spaceZip from "../archives/zip/Space Invaders.zip";

import Button from "./ReusableComponents/Button";
import Project from "./ReusableComponents/Project";




const Personals = () => {

    return (
        <div>
            <GoBack/>
            
            <section className="intro">
                <h2 className = "section__title section__title--intro">Here are my  <strong className="name"><b className="personal_name">Personal Projects</b></strong> </h2>
                <p className = "section__subtitle section__subtitle--intro personnal_type">Personal Projects</p>
                <img src = {cover} alt="web page cover" className="intro__img"></img>
            </section>

            <div className="block_wrap">

                <Project
                    title="CSS Zen Garden"
                    period="2021"
                    description= "To enhance my CSS skills, I decided to take on the 'CSS Zen Garden Challenge.' The task was to style a common webpage using only CSS, without changing the original HTML. It turned out to be a cool project that helped me pick up different CSS tricks. I felt proud of what I achieved, and it was interesting to see how other developers approached the same challenge. Overall, it was a fun way for me to explore and improve my CSS skills."
                    contributions={["Styled a common webpage using only CSS, without changing the original HTML"]}
                    workTime="1 week"
                    tools={["Language(s): CSS", "Tool(s): Git/GitHub, VSCode"]}
                    grades={[]}
                    image={cssZenGarden}
                    buttons={[<Button key="button1" text="Visit" redirect='https://csszengardentm.netlify.app' blank={true} noreferrer={true} buttonType='Link'/>]}
                />

                <Project
                    title="Pygame Projects"
                    period="2021"
                    description= "Using Python's game module, Pygame, I honed my programming skills by crafting a variety of engaging games. Among my creations are titles like Space Invaders, Car Crash, and Hungry Shark."
                    contributions={["Crafted a variety of engaging games using Python's game module, Pygame", "Created titles like Space Invaders, Car Crash, and Hungry Shark"]}
                    workTime="1 week per game"
                    tools={["Language(s): Python / Pygame", "   Tool(s): Git/GitHub, Pycharm"]}
                    grades={[]}
                    image={pygames}
                    buttons={[<Button key="button1" text="Hungry Shark (.zip)" redirect={sharkZip} buttonType='Download'/>,
                                <Button key="button2" text="Car Crash (.zip)" redirect={carZip} buttonType='Download'/>,
                                <Button key="button3" text="Space Invaders (.zip)" redirect={spaceZip} buttonType='Download'/>]}
                />
                
                <Project
                    title="TiTiTea Website"
                    period="2021"
                    description= "For my first website,  I made a page for TiTiTea, a pretend tea shop. On this page, people could order tea, give ratings, and even check out job openings. While working on it, I picked up some useful web development skills. I started by making the page look good and easy to use. Then, I added features to help users, like messages that pop up if they forgot to fill in all the required info in a form. To wrap it up, I set up a system on the back end to safely store the info people entered into a database. Users would get a quick confirmation message, letting them know their request was successfully sent to the back end."
                    contributions={["Made a page for TiTiTea, a pretend tea shop", "Users could order tea, give ratings, and check out job openings", "Added features to help users, like messages that pop up if they forgot to fill in all the required info in a form", "Set up a system on the back end to safely store the info people entered into a database", "Users would get a quick confirmation message, letting them know their request was successfully sent to the back end"]}
                    workTime="2 weeks"
                    tools={["Language(s): JavaScript, HTML5, CSS, PHP, SQL", "Database: MySQL", "Tool(s): Git/GitHub, XAMPP Stack, VSCode"]}
                    grades={[]}
                    image={tititea}
                    buttons={[<Button key="button1" text="Visit" redirect='https://tititea.netlify.app' blank={true} noreferrer={true} buttonType='Link'/>]}
                />


            </div>
            
        </div>
    )
}
export default Personals