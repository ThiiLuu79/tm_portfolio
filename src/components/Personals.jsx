import GoBack from './mainComponents/GoBack';

import cover from "../img/personal/html.jpg";
import cssZenGarden from "../img/personal/cssZenGarden.jpg";
import pygames from "../img/personal/games.gif";
import tititea from "../img/personal/tititea.jpg";

//import sharkVideo from "../archives/video/shark.mp4";
//import sharkPicture from "../img/personal/hungryShark.jpg";

import sharkZip from "../archives/zip/Hungry Shark.zip";
import carZip from "../archives/zip/Car Crash.zip";
import spaceZip from "../archives/zip/Space Invaders.zip";

import Button from "./reusableComponents/Button";
import Project from "./reusableComponents/Project";

import {
    PERSONALS_WELCOME,
    PERSONALS_PROJECT,
    CSS_ZEN_GARDEN_PROJECT,
    PYGAMES_PROJECT,
    TITITEA_PROJECT
} from "./personalsConstants";


const Personals = () => {

    return (
        <div>
            <GoBack/>
            
            <section className="intro">
                <h2 className = "section__title section__title--intro">{PERSONALS_WELCOME}  <strong className="name"><b className="personal_name">{PERSONALS_PROJECT}</b></strong> </h2>
                <p className = "section__subtitle section__subtitle--intro personnal_type">{PERSONALS_PROJECT}</p>
                <img src = {cover} alt="web page cover" className="intro__img"></img>
            </section>

            <div className="block_wrap">

                <Project
                    title={CSS_ZEN_GARDEN_PROJECT.title}
                    period={CSS_ZEN_GARDEN_PROJECT.period}
                    description= {CSS_ZEN_GARDEN_PROJECT.description}
                    contributions={CSS_ZEN_GARDEN_PROJECT.contributions}
                    workTime={CSS_ZEN_GARDEN_PROJECT.workTime}
                    tools={CSS_ZEN_GARDEN_PROJECT.tools}
                    grades={CSS_ZEN_GARDEN_PROJECT.grades}
                    image={cssZenGarden}
                    imgAlt={CSS_ZEN_GARDEN_PROJECT.imgAlt}
                    buttons={[<Button key="button1" text="Visit" redirect='https://csszengardentm.netlify.app' blank={true} noreferrer={true} buttonType='Link'/>]}
                />

                <Project
                    title= {PYGAMES_PROJECT.title}
                    period= {PYGAMES_PROJECT.period}
                    description= {PYGAMES_PROJECT.description}
                    contributions= {PYGAMES_PROJECT.contributions}
                    workTime= {PYGAMES_PROJECT.workTime}
                    tools= {PYGAMES_PROJECT.tools}
                    grades= {PYGAMES_PROJECT.grades}
                    image={pygames}
                    imgAlt={PYGAMES_PROJECT.imgAlt}
                    buttons={[<Button key="button1" text="Hungry Shark (.zip)" redirect={sharkZip} buttonType='Download'/>,
                                <Button key="button2" text="Car Crash (.zip)" redirect={carZip} buttonType='Download'/>,
                                <Button key="button3" text="Space Invaders (.zip)" redirect={spaceZip} buttonType='Download'/>]}
                />
                
                <Project
                    title={TITITEA_PROJECT.title}
                    period={TITITEA_PROJECT.period}
                    description= {TITITEA_PROJECT.description}
                    contributions={TITITEA_PROJECT.contributions}
                    workTime= {TITITEA_PROJECT.workTime}
                    tools= {TITITEA_PROJECT.tools}
                    grades={TITITEA_PROJECT.grades}
                    image={tititea}
                    imgAlt={TITITEA_PROJECT.imgAlt}
                    buttons={[<Button key="button1" text="Visit" redirect='https://tititea.netlify.app' blank={true} noreferrer={true} buttonType='Link'/>]}
                />


            </div>
            
        </div>
    )
}
export default Personals