import React from 'react';
import { useLanguage } from './languageContext';

export const LanguageToggler = () => {
    const { setLanguage } = useLanguage();

    return (
        <div className='translator'>
            <button className="pushable" onClick={() => setLanguage('en')}>
                <span className="front">
                    English
                </span>
            </button>
            
            <button className="pushable" onClick={() => setLanguage('fr')}>
                <span className="front">
                    Français
                </span>
            </button>
        </div>
    );
};
