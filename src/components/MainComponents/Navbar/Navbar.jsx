import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import ScrollToTopOnLoad from '../ScrollToTopOnLoad/ScrollToTopOnLoad.jsx';

import { useLanguage } from '../../../LanguageContext/languageContext.js';

import * as mainConstantsEn from '../../../i18n/mainConstants_en.js';
import * as mainConstantsFr from '../../../i18n/mainConstants_fr.js';

const Navbar = () => {

  const { language } = useLanguage();
  const mainConstants = language === 'en' ? mainConstantsEn : mainConstantsFr;

  // Function to toggle the navbar
  const toggleNavbar = () => {
    document.body.classList.toggle('nav-open');
  };

  // Function to show the dropdown
  const showDropdown = (dropdownId, showClass, hideClass) => {
    const dropdown = document.getElementById(dropdownId);
    if (dropdown.classList.contains(showClass)) {
      dropdown.classList.remove(showClass);
      dropdown.classList.add(hideClass);
      dropdown.addEventListener('animationend', () => {
        if (dropdown.classList.contains(hideClass)) {
          dropdown.style.display = 'none';
        }
      }, { once: true });
    } else {
      dropdown.style.display = 'flex';
      dropdown.style.flexDirection = 'column';
      dropdown.classList.remove(hideClass);
      dropdown.classList.add(showClass);
    }
  };

  // Add event listeners when the component mounts and remove them when it unmounts
  useEffect(() => {
    const handleNavbarToggle = () => {
      document.body.classList.remove('nav-open');
    };

    document.querySelectorAll('.nav-toggle').forEach(element => {
      element.addEventListener('click', toggleNavbar);
    });

    document.querySelectorAll('.nav__link, .dropdown_link').forEach(element => {
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
  }, []); // Empty dependency array means this effect will run only once when the component mounts

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
          <div className="drop_about">
            <li className="nav__item">
              <a href="/#about" className="nav__link">
                {mainConstants.ABOUT_ME}
              </a>
            </li>
            <button className="button">
              <div
                className="dropbtn button__arrow"
                onClick={() => showDropdown('myDropdownExp', 'show', 'hide')}
              ></div>
            </button>
          </div>
          <div id="myDropdownExp" className="dropdown-content drop_exp">
          <Link to="/Work" className="dropdown_link">{mainConstants.WORKING_EXPERIENCES}</Link>
          </div>
          <div className="drop_projects">
            <li className="nav__item">
              <a href="/#cs_projects" className="nav__link">
                {mainConstants.PROJECTS}
              </a>
            </li>
            <button className="button">
              <div
                className="dropbtn button__arrow"
                onClick={() => showDropdown('myDropdown', 'show', 'hide')}
              ></div>
            </button>
          </div>
          <div id="myDropdown" className="dropdown-content drop_pro">
          <Link to="/Academics" className="dropdown_link">{mainConstants.ACADEMIC_PROJECTS}</Link>
          <Link to="/Personals" className="dropdown_link">{mainConstants.PERSONAL_PROJECTS}</Link>
            <hr />
          <Link to="/ArtGallery" className="dropdown_link">{mainConstants.ART_GALLERY}</Link>
          <Link to="/PhotoGallery" className="dropdown_link">{mainConstants.PHOTO_GALLERY}</Link>
          </div>
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
