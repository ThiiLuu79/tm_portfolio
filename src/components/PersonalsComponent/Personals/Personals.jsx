import GoBack from '../../MainComponents/GoBack/GoBack';
import Card from '../../ReusableComponents/Card/Card';
import cover from "../../../img/personal/html.jpg";
import cssZenGarden from "../../../img/personal/cssZenGarden.jpg";
import pygames from "../../../img/personal/games.gif";
import tititea from "../../../img/personal/tititea.jpg";

import sharkZip from "../../../archives/zip/Hungry Shark.zip";
import carZip from "../../../archives/zip/Car Crash.zip";
import spaceZip from "../../../archives/zip/Space Invaders.zip";

import Button from "../../ReusableComponents/Button/Button";
import Project from "../../ReusableComponents/Project/Project";

import { useLanguage } from '../../../LanguageContext/languageContext';

import * as personnalsConstantsEn from '../../../i18n/personalsConstants_en';
import * as personnalsConstantsFr from '../../../i18n/personalsConstants_fr';

import { LanguageToggler } from '../../../LanguageContext/languageToggler.jsx';

const Personals = () => {

    const { language } = useLanguage();
    const personnalsConstants = language === 'en' ? personnalsConstantsEn : personnalsConstantsFr;

    return (
        <div>
            <LanguageToggler/>
            <GoBack/>
            <Card
                intro = {personnalsConstants.PERSONALS_WELCOME}
                title = {personnalsConstants.PERSONALS_PROJECT}
                subtitle = {personnalsConstants.PERSONALS_PROJECT}
                image = {cover}
            />

            <div>

                <Project
                    title={personnalsConstants.CSS_ZEN_GARDEN_PROJECT.title}
                    period={personnalsConstants.CSS_ZEN_GARDEN_PROJECT.period}
                    description= {personnalsConstants.CSS_ZEN_GARDEN_PROJECT.description}
                    contributions={personnalsConstants.CSS_ZEN_GARDEN_PROJECT.contributions}
                    workTime={personnalsConstants.CSS_ZEN_GARDEN_PROJECT.workTime}
                    tools={personnalsConstants.CSS_ZEN_GARDEN_PROJECT.tools}
                    grades={personnalsConstants.CSS_ZEN_GARDEN_PROJECT.grades}
                    image={cssZenGarden}
                    imgAlt={personnalsConstants.CSS_ZEN_GARDEN_PROJECT.imgAlt}
                    buttons={[<Button key="button1" text={personnalsConstants.VISIT} redirect='https://csszengardentm.netlify.app' blank={true} noreferrer={true} buttonType='Link'/>]}
                />

                <Project
                    title= {personnalsConstants.PYGAMES_PROJECT.title}
                    period= {personnalsConstants.PYGAMES_PROJECT.period}
                    description= {personnalsConstants.PYGAMES_PROJECT.description}
                    contributions= {personnalsConstants.PYGAMES_PROJECT.contributions}
                    workTime= {personnalsConstants.PYGAMES_PROJECT.workTime}
                    tools= {personnalsConstants.PYGAMES_PROJECT.tools}
                    grades= {personnalsConstants.PYGAMES_PROJECT.grades}
                    image={pygames}
                    imgAlt={personnalsConstants.PYGAMES_PROJECT.imgAlt}
                    buttons={[<Button key="button1" text="Hungry Shark (.zip)" redirect={sharkZip} buttonType='Download'/>,
                                <Button key="button2" text="Car Crash (.zip)" redirect={carZip} buttonType='Download'/>,
                                <Button key="button3" text="Space Invaders (.zip)" redirect={spaceZip} buttonType='Download'/>]}
                />
                
                <Project
                    title={personnalsConstants.TITITEA_PROJECT.title}
                    period={personnalsConstants.TITITEA_PROJECT.period}
                    description= {personnalsConstants.TITITEA_PROJECT.description}
                    contributions={personnalsConstants.TITITEA_PROJECT.contributions}
                    workTime= {personnalsConstants.TITITEA_PROJECT.workTime}
                    tools= {personnalsConstants.TITITEA_PROJECT.tools}
                    grades={personnalsConstants.TITITEA_PROJECT.grades}
                    image={tititea}
                    imgAlt={personnalsConstants.TITITEA_PROJECT.imgAlt}
                    buttons={[<Button key="button1" text={personnalsConstants.VISIT} redirect='https://tititea.netlify.app' blank={true} noreferrer={true} buttonType='Link'/>]}
                />


            </div>
            
        </div>
    )
}
export default Personals
