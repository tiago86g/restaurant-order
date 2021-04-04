import logo from '../../images/logo.svg';
import React, { useState, useEffect } from 'react';
import { VscChromeClose, VscListSelection } from 'react-icons/vsc';
import { IconContext } from 'react-icons/lib';
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavLogoSvg,
  NavMobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
} from './Navbar.elements';

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const showButton = () => {
    if (window.innerWidth <= 768) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <IconContext.Provider value={{ color: 'var(--color-primary)' }}>
        <Nav>
          <NavbarContainer>
            <NavLogo to="/" onClick={closeMobileMenu}>
              <NavLogoSvg src={logo} alt="Logo" />
            </NavLogo>
            <NavMobileIcon onClick={handleClick}>
              {click ? <VscChromeClose /> : <VscListSelection />}
            </NavMobileIcon>
            <NavMenu onClick={handleClick} click={click}>
              <NavItem>
                <NavLinks>RESTAURANTER</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks>PRODUKTER</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks>NYHEDSBREV</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks>KONTAKT</NavLinks>
              </NavItem>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
