import React, { useEffect } from 'react';
//import { Link } from 'react-router-dom';

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
  }, []); // Empty dependency array means this effect will run only once when the component mounts

  return (
    <div>
      <button className="nav-toggle" aria-label="toggle navigation">
        <span className="hamburger"></span>
      </button>
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item">
            <a href="#home" className="nav__link">
              Home
            </a>
          </li>
          <div className="drop_about">
            <li className="nav__item">
              <a href="#about" className="nav__link">
                About me
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
            <a href="_#">Working experiences</a>
          </div>
          <div className="drop_projects">
            <li className="nav__item">
              <a href="#cs_projects" className="nav__link">
                Projects
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
            <a href="">Academic Projects</a>
            <a href="">Personal Projets</a>
            <hr />
            <a href="">Art Gallery</a>
            <a href="">Photo Gallery</a>
          </div>
          <li className="nav__item">
            <a href="#education" className="nav__link">
              Education
            </a>
          </li>
          <li className="nav__item">
            <a href="#contact" className="nav__link">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;