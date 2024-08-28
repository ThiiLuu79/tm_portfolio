import React, { useEffect } from 'react';

import GoBack from '../../MainComponents/GoBack/GoBack';

import cover from "../../../img/art/art_cover.jpg";

import p1 from "../../../img/art/art01.jpg";
import p2 from "../../../img/art/art02.jpg";
import p3 from "../../../img/art/art03.jpg";
import p4 from "../../../img/art/art04.jpg";
import p5 from "../../../img/art/art05.jpg";
import p6 from "../../../img/art/art06.jpg";
import p7 from "../../../img/art/art07.jpg";
import p8 from "../../../img/art/art08.jpg";
import p9 from "../../../img/art/art09.jpg";
import p10 from "../../../img/art/art10.jpg";
import p11 from "../../../img/art/art11.jpg";
import p12 from "../../../img/art/art12.jpg";
import p13 from "../../../img/art/art13.jpg";

import { useLanguage } from '../../../LanguageContext/languageContext';

import * as freeTimeConstantsEn from '../../../i18n/freeTimeConstants_en';
import * as freeTimeConstantsFr from '../../../i18n/freeTimeConstants_fr';


const ArtGallery = () => {

    const { language } = useLanguage();
    const freeTimeConstants = language === 'en' ? freeTimeConstantsEn : freeTimeConstantsFr;

    useEffect(() => {
        // JavaScript function to handle click events
        function handleImageClick() {
            document.getElementById('myModal').style.display = "block";
            document.getElementById('modal_img').src = this.src;
        }

        function handleCloseClick() {
            document.getElementById('myModal').style.display = "none";
        }

        // Add click event listeners to all images
        var collectionImages = document.querySelectorAll('.collection__img');
        collectionImages.forEach(function(image) {
            image.addEventListener('click', handleImageClick);
        });

        // Add click event listener to the close button
        document.querySelector('.close').addEventListener('click', handleCloseClick);

        // Clean up function to remove event listeners when component unmounts
        return () => {
            collectionImages.forEach(function(image) {
                image.removeEventListener('click', handleImageClick);
            });
            
        };
    }, []);

    return (
        <div>
            <GoBack/>
            
            <section className="intro">
                <h2 className = "section__title section__title--intro">{freeTimeConstants.WELCOME_ART}<strong className="name"><b className="drawPro_name">{freeTimeConstants.ART_GALLERY}</b></strong> </h2>
                <p className = "section__subtitle section__subtitle--intro drawPro_type">{freeTimeConstants.ART_PROJECT}</p>
                <img src = {cover} alt="art page cover" className="intro__img"/>
            </section>

            <div className="art__container">       
                <div className="art__item"><img src={p1} alt="shinobu drawing" className="collection__img"/></div>
                <div className="art__item"><img src={p2} alt="snake lady drawing" className="collection__img"/></div>
                <div className="art__item"><img src={p3} alt="bird lady drawing" className="collection__img"/></div>
                <div className="art__item"><img src={p4} alt="fairy girl drawing" className="collection__img"/></div>
                <div className="art__item"><img src={p5} alt="dragin drawing" className="collection__img"/></div>
                <div className="art__item"><img src={p6} alt="miyeon drawing" className="collection__img"/></div>
                <div className="art__item"><img src={p7} alt="ying yang fish drawing" className="collection__img"/></div>
                <div className="art__item"><img src={p8} alt="japanese lady drawing" className="collection__img"/></div>
                <div className="art__item"><img src={p9} alt="maleficient drawing" className="collection__img"/></div>
                <div className="art__item"><img src={p10} alt="fish girl drawing" className="collection__img"/></div>
                <div className="art__item"><img src={p11} alt="ghost lady drawing" className="collection__img"/></div>
                <div className="art__item"><img src={p12} alt="scary faces drawing" className="collection__img"/></div>
                <div className="art__item"><img src={p13} alt="dragon lady drawing" className="collection__img"/></div>
            </div>

            <div className="wrapper">
                    <a href="https://www.instagram.com/thiiluu.art/" target="_blank" rel="noreferrer">
                    <div className="icon instagram">
                        <div className="tooltip">{freeTimeConstants.PHOTO_INSTA}</div>
                        <span><i className="fab fa-instagram"></i></span>
                    </div>
                    </a>
            </div>

            <div id="myModal" className="modal">
                <span className="close">&times;</span>
                <img className="modal-content" id="modal_img" alt='modal'/>
            </div>

        </div>
    )
}
export default ArtGallery
