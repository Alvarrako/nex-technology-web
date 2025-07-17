import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <FooterContainer>
      <div className="container">
        <FooterContent>
          <FooterSection>
            <FooterTitle>Nex-Technology</FooterTitle>
            <FooterText>
              Transformamos ideas en soluciones digitales de vanguardia. Somos tu aliado estratégico para la innovación tecnológica.
            </FooterText>
            <SocialLinks>
              <SocialLink href="https://facebook.com/profile.php?id=61578032737494" target="_blank" rel="noopener noreferrer">
                <FaFacebook />
              </SocialLink>
              <SocialLink href="https://instagram.com/nextechnology_ve/" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </SocialLink>
            </SocialLinks>
          </FooterSection>
          
          <FooterSection>
            <FooterTitle>Enlaces Rápidos</FooterTitle>
            <FooterLinks>
              <FooterLink to="/">Inicio</FooterLink>
              <FooterLink to="/catalogo">Catálogo</FooterLink>
              <FooterLink to="/contacto">Contacto</FooterLink>
              <FooterLink to="/clientes">Clientes</FooterLink>
            </FooterLinks>
          </FooterSection>
          
          <FooterSection>
            <FooterTitle>Servicios</FooterTitle>
            <FooterLinks>
              <FooterLink to="/catalogo">Paginas WEB</FooterLink>
              <FooterLink to="/catalogo">Aplicaciones de Escritorio</FooterLink>
              <FooterLink to="/catalogo">Aplicaciones Moviles</FooterLink>
              <FooterLink to="/catalogo">Inteligencia Artificial</FooterLink>
              <FooterLink to="/catalogo">Automatización</FooterLink>
            </FooterLinks>
          </FooterSection>
          
          <FooterSection>
            <FooterTitle>Contacto</FooterTitle>
            <ContactInfo>
              <ContactItem>
                <FaMapMarkerAlt />
                <span>Lecheria, Anzoategui, Venezuela</span>
              </ContactItem>
              <ContactItem>
                <FaPhone />
                <span><a href="tel:+5804127359010">+58 (412) 735-9010</a></span>
              </ContactItem>
              <ContactItem>
                <FaEnvelope />
                <span><a href="mailto:nextechnologyadm@gmail.com">NexTechnologyadm@gmail.com</a></span>
              </ContactItem>
            </ContactInfo>
          </FooterSection>
        </FooterContent>
        
        <FooterBottom>
          <Copyright>
            &copy; {currentYear} Nex-Technology. Todos los derechos reservados.
          </Copyright>
        </FooterBottom>
      </div>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.colors.darkBlue};
  color: ${({ theme }) => theme.colors.lightGray};
  padding: 70px 0 20px;
  margin-top: 50px;
  border-top: 1px solid ${({ theme }) => theme.colors.midBlue};
`;

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
  margin-bottom: 40px;
`;

const FooterSection = styled.div``;

const FooterTitle = styled.h3`
  color: ${({ theme }) => theme.colors.white};
  font-size: 1.3rem;
  margin-bottom: 20px;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -8px;
    width: 40px;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.accentCyan};
  }
`;

const FooterText = styled.p`
  font-size: 0.95rem;
  line-height: 1.6;
  margin-bottom: 20px;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 15px;
`;

const SocialLink = styled.a`
  color: ${({ theme }) => theme.colors.lightGray};
  font-size: 1.2rem;
  transition: color ${({ theme }) => theme.transitions.standard};
  
  &:hover {
    color: ${({ theme }) => theme.colors.accentCyan};
  }
`;

const FooterLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const FooterLink = styled(Link)`
  color: ${({ theme }) => theme.colors.lightGray};
  font-size: 0.95rem;
  transition: color ${({ theme }) => theme.transitions.standard}, transform ${({ theme }) => theme.transitions.standard};
  
  &:hover {
    color: ${({ theme }) => theme.colors.accentCyan};
    transform: translateX(5px);
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 0.95rem;
  
  svg {
    color: ${({ theme }) => theme.colors.accentCyan};
    font-size: 1.1rem;
  }
  
  a {
    color: ${({ theme }) => theme.colors.lightGray};
    transition: color ${({ theme }) => theme.transitions.standard};
    
    &:hover {
      color: ${({ theme }) => theme.colors.accentCyan};
    }
  }
`;

const FooterBottom = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 20px;
  text-align: center;
`;

const Copyright = styled.p`
  font-size: 0.9rem;
  margin: 0;
`;

export default Footer;