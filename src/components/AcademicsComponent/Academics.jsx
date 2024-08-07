import GoBack from '../MainComponents/GoBack';
import Button from "../ReusableComponents/Button";
import Project from "../ReusableComponents/Project";

import cover from "../../img/academic/spCover.jpg";
import webflix from "../../img/academic/webflix.png";
import pusher from "../../img/academic/pushers.png";
import huffman from "../../img/academic/huffman.png";
import chain from "../../img/academic/chain.jpg";
import opac from "../../img/academic/CSJV.jpg";

import { useLanguage } from '../../LanguageContext/languageContext';

import * as academicsConstantsEn from '../../i18n/academicsConstants_en';
import * as academicsConstantsFr from '../../i18n/academicsConstants_fr';

const Academics = () => {

    const { language } = useLanguage();
    const academicsConstants = language === 'en' ? academicsConstantsEn : academicsConstantsFr;

    return (
        <div>
            <GoBack/>

            <section className="intro">
                <h2 className = "section__title section__title--intro">{academicsConstants.ACADEMICS_WELCOME}<strong className="name"><b className="academicPro_name">{academicsConstants.ACADEMICS_PROJECT}</b></strong> </h2>
                <p className = "section__subtitle section__subtitle--intro academicPro_type">{academicsConstants.ACADEMICS_PROJECT}</p>
                <img src = {cover} alt="web page cover" className="intro__img"></img>
            </section>

            <div className="block_wrap">

                <Project
                    title={academicsConstants.WEBFLIX_PROJECT.title}
                    period={academicsConstants.WEBFLIX_PROJECT.period}
                    description= {academicsConstants.WEBFLIX_PROJECT.description}
                    contributions={academicsConstants.WEBFLIX_PROJECT.contributions}
                    workTime={academicsConstants.WEBFLIX_PROJECT.workTime}
                    tools={academicsConstants.WEBFLIX_PROJECT.tools}
                    grades={academicsConstants.WEBFLIX_PROJECT.grades}
                    image={webflix}
                    imgAlt={academicsConstants.WEBFLIX_PROJECT.imgAlt}
                    buttons={[]}
                />

                
                <Project
                    title={academicsConstants.PUSHERS_PROJECT.title}
                    period={academicsConstants.PUSHERS_PROJECT.period}
                    description= {academicsConstants.PUSHERS_PROJECT.description}
                    contributions={academicsConstants.PUSHERS_PROJECT.contributions}
                    workTime={academicsConstants.PUSHERS_PROJECT.workTime}
                    tools={academicsConstants.PUSHERS_PROJECT.tools}
                    grades={academicsConstants.PUSHERS_PROJECT.grades}
                    image={pusher}
                    imgAlt={academicsConstants.PUSHERS_PROJECT.imgAlt}
                    buttons={[]}
                />

                <Project
                    title={academicsConstants.HUFFMAN_PROJECT.title}
                    period={academicsConstants.HUFFMAN_PROJECT.period}
                    description= {academicsConstants.HUFFMAN_PROJECT.description}
                    contributions={academicsConstants.HUFFMAN_PROJECT.contributions}
                    workTime={academicsConstants.HUFFMAN_PROJECT.workTime}
                    tools={academicsConstants.HUFFMAN_PROJECT.tools}
                    grades={academicsConstants.HUFFMAN_PROJECT.grades}
                    image={huffman}
                    imgAlt={academicsConstants.HUFFMAN_PROJECT.imgAlt}
                    buttons={[]}
                />

                <Project
                    title={academicsConstants.CHAIN_PROJECT.title}
                    period={academicsConstants.CHAIN_PROJECT.period}
                    description= {academicsConstants.CHAIN_PROJECT.description}
                    contributions={academicsConstants.CHAIN_PROJECT.contributions}
                    workTime={academicsConstants.CHAIN_PROJECT.workTime}
                    tools={academicsConstants.CHAIN_PROJECT.tools}
                    grades={academicsConstants.CHAIN_PROJECT.grades}
                    image={chain}
                    imgAlt={academicsConstants.CHAIN_PROJECT.imgAlt}
                    buttons={[]}
                />

                <Project
                    title={academicsConstants.KOHA_PROJECT.title}
                    period={academicsConstants.KOHA_PROJECT.period}
                    description= {academicsConstants.KOHA_PROJECT.description}
                    contributions={academicsConstants.KOHA_PROJECT.contributions}
                    workTime={academicsConstants.KOHA_PROJECT.workTime}
                    tools={academicsConstants.KOHA_PROJECT.tools}
                    grades={[]}
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
