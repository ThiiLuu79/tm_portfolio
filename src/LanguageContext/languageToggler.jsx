import React, { useState } from 'react';
import Button from "../components/ReusableComponents/Button/Button";
import { useLanguage } from './languageContext';

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
