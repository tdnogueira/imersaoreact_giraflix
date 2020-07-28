import React from 'react';
import Logo from '../../assets/img/logo_giraflix01.png';
import './Menu.css';
import Button from '../Button';

function Menu() {
  return (
    <nav className='Menu'>
      <a href='/'>
        <img className='Logo' src={Logo} alt='Giraflix Logo' />
      </a>

      <Button as='a' className='ButtonLink' href='/'>
        Novo vídeo
      </Button>
    </nav>
  );
}

export default Menu;
