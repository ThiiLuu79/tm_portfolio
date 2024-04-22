import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import ScrollToTopOnLoad from './ScrollToTopOnLoad.jsx';

import{
    HOME,
    ABOUT_ME,
    WORKING_EXPERIENCES,
    PROJECTS,
    ACADEMIC_PROJECTS,
    PERSONAL_PROJECTS,
    ART_GALLERY,
    PHOTO_GALLERY,
    EDUCATION,
    CONTACT
} from "./constants.js";

const Navbar = () => {
  // Function to toggle the navbar
  const toggleNavbar = () => {
    document.body.classList.toggle('nav-open');
  };

  // Function to show the dropdown
  const showDropdown = (dropdownId, showClass) => {
    document.getElementById(dropdownId).classList.toggle(showClass);
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
              {HOME}
            </a>
          </li>
          <div className="drop_about">
            <li className="nav__item">
              <a href="/#about" className="nav__link">
                {ABOUT_ME}
              </a>
            </li>
            <button className="button">
              <div
                className="dropbtn button__arrow"
                onClick={() => showDropdown('myDropdownExp', 'show')}
              ></div>
            </button>
          </div>
          <div id="myDropdownExp" className="dropdown-content drop_exp">
          <Link to="/Work" className="dropdown_link">{WORKING_EXPERIENCES}</Link>
          </div>
          <div className="drop_projects">
            <li className="nav__item">
              <a href="/#cs_projects" className="nav__link">
                {PROJECTS}
              </a>
            </li>
            <button className="button">
              <div
                className="dropbtn button__arrow"
                onClick={() => showDropdown('myDropdown', 'show')}
              ></div>
            </button>
          </div>
          <div id="myDropdown" className="dropdown-content">
          <Link to="/Academics" className="dropdown_link">{ACADEMIC_PROJECTS}</Link>
          <Link to="/Personals" className="dropdown_link">{PERSONAL_PROJECTS}</Link>
            <hr />
          <Link to="/ArtGallery" className="dropdown_link">{ART_GALLERY}</Link>
          <Link to="/PhotoGallery" className="dropdown_link">{PHOTO_GALLERY}</Link>
          </div>
          <li className="nav__item">
            <a href="/#education" className="nav__link">
              {EDUCATION}
            </a>
          </li>
          <li className="nav__item">
            <a href="#contact" className="nav__link">
              {CONTACT}
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
