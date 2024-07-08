import React from 'react';
import { useLanguage } from './languageContext';

export const LanguageToggler = () => {
    const { setLanguage } = useLanguage();

    return (
        <div>
            <button onClick={() => setLanguage('en')}>English</button>
            <button onClick={() => setLanguage('fr')}>Français</button>
        </div>
    );
};
