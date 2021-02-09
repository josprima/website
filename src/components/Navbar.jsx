import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import classnames from 'classnames';
import Link from 'next/link';

import Logo from '../assets/logo.svg';
import css from './Navbar.module.scss';

const isMobileView = () => {
  const viewPortWidth = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);

  return viewPortWidth < 600;
};

const LinkItem = ({ text, url }) => (
  <li className={css.navbar__item}>
    <Link href={url}>
      <a className={css.navbar__link}>{text}</a>
    </Link>
  </li>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleResize = () => {
    if (!isMobileView() && isOpen) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [isMobileView]);

  const buttonClass = classnames(
    css.navbar__toggle,
    {
      [css['navbar__toggle--close']]: isOpen,
    },
  );

  const sideMenuClass = classnames(
    css['navbar__side-menu'],
    {
      [css['navbar__side-menu--open']]: isOpen,
    },
  );

  return (
    <section className={css.navbar}>
      <Logo />

      <ul className={css.navbar__menu}>
        <LinkItem text="Home" url="/" />
        <LinkItem text="Alur Belajar" url="/" />
        <LinkItem text="Akun" url="/" />
      </ul>

      <button
        className={buttonClass}
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        data-testid="button"
      >
        <div />
        <div />
        <div />
      </button>

      <ul className={sideMenuClass}>
        <LinkItem text="Home" url="/" />
        <LinkItem text="Alur Belajar" url="/" />
        <LinkItem text="Akun" url="/" />
      </ul>
    </section>
  );
};

LinkItem.propTypes = {
  text: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default Navbar;
