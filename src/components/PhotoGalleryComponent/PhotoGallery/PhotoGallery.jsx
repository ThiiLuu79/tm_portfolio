import React, { useEffect } from 'react';

import GoBack from '../../MainComponents/GoBack/GoBack';

import cover from "../../../img/photography/photo16.JPG";

import p1 from "../../../img/photography/photo1.JPG";
import p2 from "../../../img/photography/photo2.JPG";
import p3 from "../../../img/photography/photo3.JPG";
import p4 from "../../../img/photography/photo4.JPG";
import p5 from "../../../img/photography/photo5.JPG";
import p6 from "../../../img/photography/photo6.JPG";
import p7 from "../../../img/photography/photo7.JPG";
import p8 from "../../../img/photography/photo8.JPG";
import p9 from "../../../img/photography/photo9.JPG";
import p10 from "../../../img/photography/photo10.JPG";
import p11 from "../../../img/photography/photo11.JPG";
import p12 from "../../../img/photography/photo12.JPG";
import p13 from "../../../img/photography/photo13.JPG";
import p15 from "../../../img/photography/photo15.JPG";
import p16 from "../../../img/photography/photo16.JPG";
import p18 from "../../../img/photography/photo18.JPG";
import p19 from "../../../img/photography/photo19.JPG";
import p20 from "../../../img/photography/photo20.JPG";
import p21 from "../../../img/photography/photo21.JPG";
import p22 from "../../../img/photography/photo22.JPG";
import p23 from "../../../img/photography/photo23.JPG";
import p25 from "../../../img/photography/photo25.JPG";
import p26 from "../../../img/photography/photo26.JPG";
import p27 from "../../../img/photography/photo27.JPG";
import p28 from "../../../img/photography/photo28.JPG";
import p30 from "../../../img/photography/photo30.JPG";
import p33 from "../../../img/photography/photo33.JPG";
import p34 from "../../../img/photography/photo34.JPG";


import { useLanguage } from '../../../LanguageContext/languageContext';

import * as freeTimeConstantsEn from '../../../i18n/freeTimeConstants_en';
import * as freeTimeConstantsFr from '../../../i18n/freeTimeConstants_fr';


const PhotoGallery = () => {

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
                <h2 className = "section__title section__title--intro">{freeTimeConstants.WELCOME_PHOTO} <strong className="name"><b className="photoPro_name">{freeTimeConstants.PHOTO_GALLERY}</b></strong> </h2>
                <p className = "section__subtitle section__subtitle--intro photoPro_type">{freeTimeConstants.PHOTO_PROJECT}</p>
                <img src = {cover} alt="art page cover" className="intro__img"/>
            </section>

            <div className="photo_container">
                <img className="collection__img" src={p1}alt='p'/>
                <img className="collection__img" src={p2}alt='p'/>
                <img className="collection__img" src={p3}alt='p'/>
                <img className="collection__img" src={p4}alt='p'/>
                <img className="collection__img" src={p5}alt='p'/>
                <img className="collection__img" src={p6}alt='p'/>
                <img className="collection__img" src={p7}alt='p'/>
                <img className="collection__img" src={p8}alt='p'/>
                <img className="collection__img" src={p9}alt='p'/>
                <img className="collection__img" src={p10} alt='p'/>
                <img className="collection__img" src={p11} alt='p'/>
                <img className="collection__img" src={p12} alt='p'/>
                <img className="collection__img" src={p13} alt='p'/>
                <img className="collection__img" src={p15} alt='p'/>
                <img className="collection__img" src={p16} alt='p'/>
                <img className="collection__img" src={p18} alt='p'/>
                <img className="collection__img" src={p19} alt='p'/>
                <img className="collection__img" src={p20} alt='p'/>
                <img className="collection__img" src={p21} alt='p'/>
                <img className="collection__img" src={p22} alt='p'/>
                <img className="collection__img" src={p23} alt='p'/>
                <img className="collection__img" src={p25} alt='p'/>
                <img className="collection__img" src={p26} alt='p'/>
                <img className="collection__img" src={p27} alt='p'/>
                <img className="collection__img" src={p28} alt='p'/>
                <img className="collection__img" src={p30} alt='p'/>
                <img className="collection__img" src={p33} alt='p'/>
                <img className="collection__img" src={p34} alt='p'/>
            </div>

            <div className="art_gallery_link">{freeTimeConstants.PHOTO_MESSAGE}<a href="https://www.instagram.com/thiiluu.jpg/" target="_blank" rel="noreferrer">{freeTimeConstants.PHOTO_INSTAGRAM}</a>.</div>
    
            <div id="myModal" className="modal">
                <span className="close">&times;</span>
                <img className="modal-content" id="modal_img" alt='modal'/>
            </div>

        </div>
    )
}
export default PhotoGallery
