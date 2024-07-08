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
            <button className="pushable" onClick={toggleLanguage}>
                <span className="front">
                    {currentLanguage === 'en' ? 'Français' : 'English'}
                </span>
            </button>
        </div>
    );
};