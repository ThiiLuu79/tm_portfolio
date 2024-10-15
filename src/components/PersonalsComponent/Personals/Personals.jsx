import Card from '../../ReusableComponents/Card/Card';
import cover from "../../../img/personal/html.jpg";
import pygames from "../../../img/personal/games.gif";
import tititea from "../../../img/personal/tititea.jpg";

import sharkZip from "../../../archives/zip/Hungry Shark.zip";
import carZip from "../../../archives/zip/Car Crash.zip";
import spaceZip from "../../../archives/zip/Space Invaders.zip";

import Button from "../../ReusableComponents/Button/Button";
import PageItem from "../../ReusableComponents/PageItem/PageItem";

import { useLanguage } from '../../ReusableComponents/LanguageToggler/LanguageContext';

import * as personnalsConstantsEn from '../../../i18n/personalsConstants_en';
import * as personnalsConstantsFr from '../../../i18n/personalsConstants_fr';

const Personals = () => {

    const { language } = useLanguage();
    const personnalsConstants = language === 'en' ? personnalsConstantsEn : personnalsConstantsFr;

    return (
        <div>
            <Card
                intro = {personnalsConstants.PERSONALS_WELCOME}
                title = {personnalsConstants.PERSONALS_PROJECT}
                subtitle = {personnalsConstants.PERSONALS_PROJECT}
                image = {cover}
            />

            <div>

                <PageItem
                    title= {personnalsConstants.PYGAMES_PROJECT.title}
                    period= {personnalsConstants.PYGAMES_PROJECT.period}
                    description= {personnalsConstants.PYGAMES_PROJECT.description}
                    contributions= {personnalsConstants.PYGAMES_PROJECT.contributions}
                    tools= {personnalsConstants.PYGAMES_PROJECT.tools}
                    image={pygames}
                    imgAlt={personnalsConstants.PYGAMES_PROJECT.imgAlt}
                    buttons={[<Button key="button1" text="Hungry Shark (.zip)" redirect={sharkZip} buttonType='Download'/>,
                                <Button key="button2" text="Car Crash (.zip)" redirect={carZip} buttonType='Download'/>,
                                <Button key="button3" text="Space Invaders (.zip)" redirect={spaceZip} buttonType='Download'/>]}
                />
                
                <PageItem
                    title={personnalsConstants.TITITEA_PROJECT.title}
                    period={personnalsConstants.TITITEA_PROJECT.period}
                    description= {personnalsConstants.TITITEA_PROJECT.description}
                    contributions={personnalsConstants.TITITEA_PROJECT.contributions}
                    tools= {personnalsConstants.TITITEA_PROJECT.tools}
                    image={tititea}
                    imgAlt={personnalsConstants.TITITEA_PROJECT.imgAlt}
                    buttons={[<Button key="button1" text={personnalsConstants.VISIT} redirect='https://tititea.netlify.app' blank={true} noreferrer={true} buttonType='Link'/>]}
                />
            </div>
        </div>
    )
}
export default Personals
