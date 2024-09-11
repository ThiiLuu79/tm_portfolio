import React, { useEffect } from 'react';

import ScrollToTopOnLoad from '../ScrollToTopOnLoad/ScrollToTopOnLoad.jsx';

import { useLanguage } from '../../ReusableComponents/LanguageToggler/LanguageContext.js';

import * as mainConstantsEn from '../../../i18n/mainConstants_en.js';
import * as mainConstantsFr from '../../../i18n/mainConstants_fr.js';

const Navbar = () => {

  const { language } = useLanguage();
  const mainConstants = language === 'en' ? mainConstantsEn : mainConstantsFr;

  const toggleNavbar = () => {
    document.body.classList.toggle('nav-open');
  };

  useEffect(() => {
    const handleNavbarToggle = () => {
      document.body.classList.remove('nav-open');
    };

    document.querySelectorAll('.nav-toggle').forEach(element => {
      element.addEventListener('click', toggleNavbar);
    });

    document.querySelectorAll('.nav__link').forEach(element => {
      element.addEventListener('click', handleNavbarToggle);
    });

    return () => {
      document.querySelectorAll('.nav-toggle').forEach(element => {
        element.removeEventListener('click', toggleNavbar);
      });

      document.querySelectorAll('.nav__link').forEach(element => {
        element.removeEventListener('click', handleNavbarToggle);
      });
    };
  }, []);

  ScrollToTopOnLoad();

  return (
    <div>
      <button className="nav-toggle" aria-label="toggle navigation">
        <span className="hamburger"></span>
      </button>
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item">
            <a href="/#home" className="nav__link">
              {mainConstants.HOME}
            </a>
          </li>
          <li className="nav__item">
            <a href="/#about" className="nav__link">
              {mainConstants.ABOUT_ME}
            </a>
          </li>
          <li className="nav__item">
            <a href="/#cs_projects" className="nav__link">
              {mainConstants.PROJECTS}
            </a>
          </li>
          <li className="nav__item">
            <a href="/#education" className="nav__link">
              {mainConstants.EDUCATION}
            </a>
          </li>
          <li className="nav__item">
            <a href="#contact" className="nav__link">
              {mainConstants.CONTACT}
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
