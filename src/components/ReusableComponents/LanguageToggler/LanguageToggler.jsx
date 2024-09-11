import React, { useState } from 'react';
import Button from "../Button/Button";
import { useLanguage } from './LanguageContext';

export const LanguageToggler = () => {
    const { setLanguage } = useLanguage();
    const [currentLanguage, setCurrentLanguage] = useState('en');

    const toggleLanguage = () => {
        const newLanguage = currentLanguage === 'en' ? 'fr' : 'en';
        setCurrentLanguage(newLanguage);
        setLanguage(newLanguage);
    };

    return (
        <div className='translator'>
            <Button
                text={currentLanguage === 'en' ? 'Français' : 'English'}
                buttonType='Toggle'
                onClickFunction={toggleLanguage}
            />
        </div>
    );
};
