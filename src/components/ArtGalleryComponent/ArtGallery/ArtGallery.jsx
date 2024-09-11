import React, { useEffect } from 'react';
import Card from '../../ReusableComponents/Card/Card';
import GoBack from '../../MainComponents/GoBack/GoBack';
import ImageGallery from '../../ReusableComponents/ImageGallery/ImageGallery.jsx';
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

import { LanguageToggler } from '../../../LanguageContext/languageToggler.jsx';


const ArtGallery = () => {

    const { language } = useLanguage();
    const freeTimeConstants = language === 'en' ? freeTimeConstantsEn : freeTimeConstantsFr;

    const artArray = [
        {src: p1, alt: 'p1'},
        {src: p2, alt: 'p2'},
        {src: p3, alt: 'p3'},
        {src: p4, alt: 'p4'},
        {src: p5, alt: 'p5'},
        {src: p6, alt: 'p6'},
        {src: p7, alt: 'p7'},
        {src: p8, alt: 'p8'},
        {src: p9, alt: 'p9'},
        {src: p10, alt: 'p10'},
        {src: p11, alt: 'p11'},
        {src: p12, alt: 'p12'},
        {src: p13, alt: 'p13'},
    ];

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
            <LanguageToggler/>
            <GoBack/>
            <Card
                intro = {freeTimeConstants.WELCOME_ART}
                title = {freeTimeConstants.ART_GALLERY}
                subtitle = {freeTimeConstants.ART_PROJECT}
                image = {cover}
            />

            <ImageGallery images={artArray}/>

            <div id="myModal" className="modal">
                <span className="close">&times;</span>
                <img className="modal-content" id="modal_img" alt='modal'/>
            </div>

        </div>
    )
}
export default ArtGallery
