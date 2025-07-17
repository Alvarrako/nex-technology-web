import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Cerrar el menú móvil cuando se cambia de ruta
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <NavContainer scrolled={scrolled}>
      <div className="container">
        <NavContent>
          <LogoContainer>
            <Link to="/">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                style={{ display: 'flex', alignItems: 'center' }}
              >
                <img src="images/logo.png" style={{ height: '30px', marginRight: '10px' }} />
                <Logo>Nex-Technology</Logo>
              </motion.div>
            </Link>
          </LogoContainer>

          <MenuToggle onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </MenuToggle>

          <NavLinks isOpen={isOpen}>
            <NavItem>
              <NavLink 
                to="/" 
                className={location.pathname === '/' ? 'active' : ''}
              >
                Inicio
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink 
                to="/catalogo" 
                className={location.pathname === '/catalogo' ? 'active' : ''}
              >
                Catálogo
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink 
                to="/contacto" 
                className={location.pathname === '/contacto' ? 'active' : ''}
              >
                Contacto
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink 
                to="/clientes" 
                className={location.pathname === '/clientes' ? 'active' : ''}
              >
                Clientes
              </NavLink>
            </NavItem>
          </NavLinks>
        </NavContent>
      </div>
    </NavContainer>
  );
};

const NavContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  background-color: ${({ scrolled, theme }) => 
    scrolled ? theme.colors.darkBlue : 'transparent'};
  box-shadow: ${({ scrolled, theme }) => 
    scrolled ? theme.shadows.medium : 'none'};
  transition: all ${({ theme }) => theme.transitions.standard};
  padding: ${({ scrolled }) => scrolled ? '10px 0' : '20px 0'};
`;

const NavContent = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LogoContainer = styled.div`
  z-index: 1001;
`;

const Logo = styled.h1`
  font-size: 1.8rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.white};
  text-shadow: 0 0 10px rgba(0, 191, 255, 0.7);
  margin: 0;
`;

const MenuToggle = styled.div`
  display: none;
  font-size: 1.5rem;
  cursor: pointer;
  z-index: 1001;
  color: ${({ theme }) => theme.colors.white};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: block;
  }
`;

const NavLinks = styled.ul`
  display: flex;
  align-items: center;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.darkBlue};
    padding-top: 80px;
    transform: ${({ isOpen }) => isOpen ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform ${({ theme }) => theme.transitions.standard};
    justify-content: center;
  }
`;

const NavItem = styled.li`
  margin: 0 15px;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    margin: 15px 0;
  }
`;

const NavLink = styled(Link)`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.heading};
  font-weight: 600;
  font-size: 1rem;
  padding: 0.5rem 0;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: ${({ theme }) => theme.colors.accentCyan};
    transition: width ${({ theme }) => theme.transitions.standard};
  }
  
  &:hover::after,
  &.active::after {
    width: 100%;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 1.2rem;
  }
`;

export default Navbar;