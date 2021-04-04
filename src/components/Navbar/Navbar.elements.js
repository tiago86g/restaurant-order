import styled from 'styled-components/macro';
import { Container } from '../../globalStyles';

import { Link } from 'react-router-dom';

export const Nav = styled.nav`
  background: white;
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  position: sticky;
  top: 0;
  z-index: 9999;
`;

export const NavbarContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  height: 4rem;

  ${Container};
`;

export const NavLogo = styled(Link)`
  justify-content: flex-start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.8rem;
  display: flex;
  align-items: center;
`;

export const NavMobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    margin-top: -10px;
    top: 0;
    right: 0;
    transform: translate(-100%, 50%);
    font-size: 2rem;
    color: var(--color-primary)
    cursor: pointer;
  }
`;

export const NavLogoSvg = styled.img`
  height: 3rem;
  padding: 5px;
`;

export const NavMenu = styled.ul`
  padding-top: 20px;
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 4rem;
    left: ${({ click }) => (click ? 0 : '-100%')};
    padding-top: 2rem;
    opacity: 1;
    transition: all 0.5s ease;
    background: white;
  }
`;

export const NavItem = styled.li`
  height: 4rem;
  border-bottom: 2px solid transparent;

  &:hover {
    border-bottom: 2px solid var(--color-primary);
  }

  @media screen and (max-width: 768px) {
    width: 100%;

    &:hover {
      border: none;
    }
  }
`;

export const NavLinks = styled.p`
  color: var(--color-primary);
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;
  font-size: 1rem;
  font-weight: 400;

  @media screen and (max-width: 768px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;
    font-size: 1.5rem;
    }
  }
`;
