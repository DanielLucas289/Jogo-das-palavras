import React from 'react';
import  './styles.css';
import iconGame from '../../../assets/icons/scrabble.png';

const Header: React.FC = () => {
  return (
    <header className="header__container">
      <nav className="header__container-nav">
        <img src={iconGame} alt="Logo Game" />
      </nav>
    </header>

  );
}

export default Header;