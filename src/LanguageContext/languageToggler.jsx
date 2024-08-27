import React, { useState } from 'react';
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
            <button className='translator_button' onClick={toggleLanguage}>
                    {currentLanguage === 'en' ? 'Français' : 'English'}
            </button>
        </div>
    );
};
