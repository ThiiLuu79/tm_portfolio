import React from 'react';
import Card from '../../ReusableComponents/Card/Card';

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


import { useLanguage } from '../../ReusableComponents/LanguageToggler/LanguageContext';

import * as freeTimeConstantsEn from '../../../i18n/freeTimeConstants_en';
import * as freeTimeConstantsFr from '../../../i18n/freeTimeConstants_fr';

import ImagesGallery from '../../ReusableComponents/ImagesGallery/ImagesGallery';


const PhotoGallery = () => {

    const { language } = useLanguage();
    const freeTimeConstants = language === 'en' ? freeTimeConstantsEn : freeTimeConstantsFr;

    const photoArray = [
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
        {src: p15, alt: 'p15'},
        {src: p16, alt: 'p16'},
        {src: p18, alt: 'p18'},
        {src: p19, alt: 'p19'},
        {src: p20, alt: 'p20'},
        {src: p21, alt: 'p21'},
        {src: p22, alt: 'p22'},
        {src: p23, alt: 'p23'},
        {src: p25, alt: 'p25'},
        {src: p26, alt: 'p26'},
        {src: p27, alt: 'p27'},
        {src: p28, alt: 'p28'},
        {src: p30, alt: 'p30'},
        {src: p33, alt: 'p33'},
        {src: p34, alt: 'p34'},
    ]

    return (
        <div>
            <Card
                intro = {freeTimeConstants.WELCOME_PHOTO}
                title = {freeTimeConstants.PHOTO_GALLERY}
                subtitle = {freeTimeConstants.PHOTO_PROJECT}
                image = {cover}
            />
            <ImagesGallery images={photoArray}/>
        </div>
    )
}
export default PhotoGallery
