import Button from "../../ReusableComponents/Button/Button";
import PageItem from "../../ReusableComponents/PageItem/PageItem";
import Card from '../../ReusableComponents/Card/Card';
import cover from "../../../img/academic/spCover.jpg";
import webflix from "../../../img/academic/webflix.png";
import pusher from "../../../img/academic/pushers.png";
import chain from "../../../img/academic/chain.jpg";
import opac from "../../../img/academic/CSJV.jpg";

import { useLanguage } from '../../ReusableComponents/LanguageToggler/LanguageContext';

import * as academicsConstantsEn from '../../../i18n/academicsConstants_en';
import * as academicsConstantsFr from '../../../i18n/academicsConstants_fr';

const Academics = () => {

    const { language } = useLanguage();
    const academicsConstants = language === 'en' ? academicsConstantsEn : academicsConstantsFr;

    return (
        <div>
            <Card
                intro = {academicsConstants.ACADEMICS_WELCOME}
                title = {academicsConstants.ACADEMICS_PROJECT}
                subtitle = {academicsConstants.ACADEMICS_PROJECT}
                image = {cover}
            />
            
            <div>

                <PageItem
                    title={academicsConstants.WEBFLIX_PROJECT.title}
                    period={academicsConstants.WEBFLIX_PROJECT.period}
                    description= {academicsConstants.WEBFLIX_PROJECT.description}
                    contributions={academicsConstants.WEBFLIX_PROJECT.contributions}
                    tools={academicsConstants.WEBFLIX_PROJECT.tools}
                    image={webflix}
                    imgAlt={academicsConstants.WEBFLIX_PROJECT.imgAlt}
                    buttons={[]}
                />

                
                <PageItem
                    title={academicsConstants.PUSHERS_PROJECT.title}
                    period={academicsConstants.PUSHERS_PROJECT.period}
                    description= {academicsConstants.PUSHERS_PROJECT.description}
                    contributions={academicsConstants.PUSHERS_PROJECT.contributions}
                    tools={academicsConstants.PUSHERS_PROJECT.tools}
                    image={pusher}
                    imgAlt={academicsConstants.PUSHERS_PROJECT.imgAlt}
                    buttons={[]}
                />

                <PageItem
                    title={academicsConstants.CHAIN_PROJECT.title}
                    period={academicsConstants.CHAIN_PROJECT.period}
                    description= {academicsConstants.CHAIN_PROJECT.description}
                    contributions={academicsConstants.CHAIN_PROJECT.contributions}
                    tools={academicsConstants.CHAIN_PROJECT.tools}
                    image={chain}
                    imgAlt={academicsConstants.CHAIN_PROJECT.imgAlt}
                    buttons={[]}
                />

                <PageItem
                    title={academicsConstants.KOHA_PROJECT.title}
                    period={academicsConstants.KOHA_PROJECT.period}
                    description= {academicsConstants.KOHA_PROJECT.description}
                    contributions={academicsConstants.KOHA_PROJECT.contributions}
                    tools={academicsConstants.KOHA_PROJECT.tools}
                    image={opac}
                    imgAlt={academicsConstants.KOHA_PROJECT.imgAlt}
                    buttons={[<Button key="button1" text="CSJV" redirect='https://csjv-biblio.inlibro.net/' blank={true} noreferrer={true} buttonType='Link'/>,
                    <Button key="button2" text="CCFV" redirect='https://ccfvancouver.inlibro.net/' blank={true} noreferrer={true} buttonType='Link'/>]}
                />


            </div>


        </div>
    )
}
export default Academics
