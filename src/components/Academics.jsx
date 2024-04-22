import GoBack from './mainComponents/GoBack.jsx';
import Button from "./reusableComponents/Button.jsx";
import Project from "./reusableComponents/Project.jsx";

import cover from "../img/academic/spCover.jpg";
import webflix from "../img/academic/webflix.png";
import pusher from "../img/academic/pushers.png";
import huffman from "../img/academic/huffman.png";
import chain from "../img/academic/chain.jpg";
import opac from "../img/academic/CSJV.jpg";

import {
    ACADEMICS_WELCOME,
    ACADEMICS_PROJECT,
    WEBFLIX_PROJECT,
    PUSHERS_PROJECT,
    HUFFMAN_PROJECT,
    CHAIN_PROJECT,
    KOHA_PROJECT
} from "./academicsConstants.js";

const Academics = () => {

    return (
        <div>
            <GoBack/>

            <section className="intro">
                <h2 className = "section__title section__title--intro">{ACADEMICS_WELCOME}<strong className="name"><b className="academicPro_name">{ACADEMICS_PROJECT}</b></strong> </h2>
                <p className = "section__subtitle section__subtitle--intro academicPro_type">{ACADEMICS_PROJECT}</p>
                <img src = {cover} alt="web page cover" className="intro__img"></img>
            </section>

            <div className="block_wrap">

                <Project
                    title={WEBFLIX_PROJECT.title}
                    period={WEBFLIX_PROJECT.period}
                    description= {WEBFLIX_PROJECT.description}
                    contributions={WEBFLIX_PROJECT.contributions}
                    workTime={WEBFLIX_PROJECT.workTime}
                    tools={WEBFLIX_PROJECT.tools}
                    grades={WEBFLIX_PROJECT.grades}
                    image={webflix}
                    imgAlt={WEBFLIX_PROJECT.imgAlt}
                    buttons={[]}
                />

                
                <Project
                    title={PUSHERS_PROJECT.title}
                    period={PUSHERS_PROJECT.period}
                    description= {PUSHERS_PROJECT.description}
                    contributions={PUSHERS_PROJECT.contributions}
                    workTime={PUSHERS_PROJECT.workTime}
                    tools={PUSHERS_PROJECT.tools}
                    grades={PUSHERS_PROJECT.grades}
                    image={pusher}
                    imgAlt={PUSHERS_PROJECT.imgAlt}
                    buttons={[]}
                />

                <Project
                    title={HUFFMAN_PROJECT.title}
                    period={HUFFMAN_PROJECT.period}
                    description= {HUFFMAN_PROJECT.description}
                    contributions={HUFFMAN_PROJECT.contributions}
                    workTime={HUFFMAN_PROJECT.workTime}
                    tools={HUFFMAN_PROJECT.tools}
                    grades={HUFFMAN_PROJECT.grades}
                    image={huffman}
                    imgAlt={HUFFMAN_PROJECT.imgAlt}
                    buttons={[]}
                />

                <Project
                    title={CHAIN_PROJECT.title}
                    period={CHAIN_PROJECT.period}
                    description= {CHAIN_PROJECT.description}
                    contributions={CHAIN_PROJECT.contributions}
                    workTime={CHAIN_PROJECT.workTime}
                    tools={CHAIN_PROJECT.tools}
                    grades={CHAIN_PROJECT.grades}
                    image={chain}
                    imgAlt={CHAIN_PROJECT.imgAlt}
                    buttons={[]}
                />

                <Project
                    title={KOHA_PROJECT.title}
                    period={KOHA_PROJECT.period}
                    description= {KOHA_PROJECT.description}
                    contributions={KOHA_PROJECT.contributions}
                    workTime={KOHA_PROJECT.workTime}
                    tools={KOHA_PROJECT.tools}
                    grades={[]}
                    image={opac}
                    imgAlt={KOHA_PROJECT.imgAlt}
                    buttons={[<Button key="button1" text="CSJV" redirect='https://csjv-biblio.inlibro.net/' blank={true} noreferrer={true} buttonType='Link'/>,
                    <Button key="button2" text="CCFV" redirect='https://ccfvancouver.inlibro.net/' blank={true} noreferrer={true} buttonType='Link'/>]}
                />


            </div>


        </div>
    )
}
export default Academics