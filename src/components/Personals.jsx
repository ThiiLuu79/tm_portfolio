import GoBack from './MainComponents/GoBack';

import cover from "../img/personal/html.jpg";
import cssZenGarden from "../img/personal/cssZenGarden.jpg";
import pygames from "../img/personal/games.gif";
import tititea from "../img/personal/tititea.jpg";

import sharkVideo from "../archives/video/shark.mp4";
import sharkPicture from "../img/personal/hungryShark.jpg";

import sharkZip from "../archives/zip/Hungry Shark.zip";
import carZip from "../archives/zip/Car Crash.zip";
import spaceZip from "../archives/zip/Space Invaders.zip";

import Button from "./MainComponents/Button";




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

                <section className="block project__item">
                    <h2 className = "section__title section__title--block">CSS Zen Garden</h2>
                    <p className = "section__subtitle section__subtitle--block">2021</p>
            
                    <div className = "block__body">
                    <p>To enhance my CSS skills, I decided to take on the "CSS Zen Garden Challenge." The task was to style a common webpage <a href="http://www.csszengarden.com/214/page2/" target="blank">(original page)</a> using only CSS, without changing the original HTML.
                        It turned out to be a cool project that helped me pick up different CSS tricks.
                        I felt proud of what I achieved, and it was interesting to see how other developers approached the same challenge. 
                        Overall, it was a fun way for me to explore and improve my CSS skills.</p>

                    <br/>
                    <Button text="Visit" redirect='https://csszengardentm.netlify.app' blank={true} noreferrer={true} buttonType='Link'/>
                    <br/><br/>
                    <h4>Skills:</h4>
                    <ul style={{listStyleType:"none"}}>
                        <li>Language(s): CSS</li>
                        <li>Tool(s): Git/GitHub, VSCode</li>
                    </ul>
                    </div>
                    <img src = {cssZenGarden} alt="css zen garden cover" width="500" className="block__img"/>
                </section>


                <section className="block project__item">
                    <h2 className = "section__title section__title--block">Pygame Projects</h2>
                    <p className = "section__subtitle section__subtitle--block">2021</p>

                    <div className = "block__body">
                    <p>Using Python's game module, Pygame, I honed my programming skills by crafting a variety of engaging games. 
                        Among my creations are titles like Space Invaders, Car Crash, and Hungry Shark.
                    </p>

                    <br/>
                    <h4>Skills:</h4>
                    <ul style={{listStyleType:"none"}}>
                        <li>Language(s): Python / Pygame</li>
                        <li>Tool(s): Git/GitHub, Pycharm</li>
                    </ul>
                    <br/>
                    <p><b>Hungry Shark demo</b></p>
                    <video src={sharkVideo} playsInline poster={sharkPicture} controls width="500" className="video"></video>

                    <br/><br/>
                    <p><b>Download for Windows (.zip)</b></p>
                    <br/>
                    <Button text="Hungry Shark" redirect={sharkZip} buttonType='Download'/>
                    <br/>
                    <br/>
                    <Button text="Car Crash" redirect={carZip} buttonType='Download'/>
                    <br/><br/>
                    <Button text="Space Invaders" redirect={spaceZip} buttonType='Download'/>

                    </div>
                    <img src = {pygames} alt="space invaders cover" width="500" className="block__img"/>
                </section>


                <section className="block project__item">
                    <h2 className = "section__title section__title--block">TiTiTea Website</h2>
                    <p className = "section__subtitle section__subtitle--block">2021</p>
            
                    <div className = "block__body">
                    <p>For my first website,  I made a page for TiTiTea, a pretend tea shop. On this page, people could order tea, give ratings, and even check out job openings.
                        While working on it, I picked up some useful web development skills.
                        I started by making the page look good and easy to use. 
                        Then, I added features to help users, like messages that pop up if they forgot to fill in all the required info in a form.
                        To wrap it up, I set up a system on the back end to safely store the info people entered into a database. Users would get a quick confirmation message,
                        letting them know their request was successfully sent to the back end.</p>
                        <br/>
                    <Button text="Visit" redirect='https://tititea.netlify.app' blank={true} noreferrer={true} buttonType='Link'/>
                    <br/><br/>
                    <h4>Skills:</h4>
                    <ul style={{listStyleType:"none"}}>
                        <li>Language(s): JavaScript, HTML5, CSS, PHP, SQL</li>
                        <li>Database: MySQL</li>
                        <li>Tool(s): Git/GitHub, XAMPP Stack, VSCode </li>
                    </ul>
                    </div>
                    <img src = {tititea} alt="tititea cover" width="500" className="block__img"/>
                </section>


            </div>
            
        </div>
    )
}
export default Personals