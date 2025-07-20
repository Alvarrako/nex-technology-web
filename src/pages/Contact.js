import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import SectionTitle from '../components/SectionTitle';
import FadeInWhenVisible from '../components/FadeInWhenVisible';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simulación de envío exitoso
    setFormStatus({
      submitted: true,
      error: false,
      message: '¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.'
    });
    
    // Resetear el formulario
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
    
    // Después de 5 segundos, quitar el mensaje
    setTimeout(() => {
      setFormStatus({
        submitted: false,
        error: false,
        message: ''
      });
    }, 5000);
  };

  return (
    <>
      <PageHeader bgImage="%PUBLIC_URL%/images/landscape.png">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <PageTitle>Contacto</PageTitle>
            <PageDescription>
              Estamos aquí para ayudarte. Contáctanos y te responderemos a la brevedad.
            </PageDescription>
          </motion.div>
        </div>
      </PageHeader>

      <section>
        <div className="container">
          <ContactGrid>
            <ContactInfoContainer>
              <FadeInWhenVisible>
                <ContactInfoTitle>Información de Contacto</ContactInfoTitle>
                <ContactInfoText>
                  Completa el formulario y nuestro equipo te responderá en menos de 24 horas.
                </ContactInfoText>
                
                <ContactInfoList>
                  <ContactInfoItem>
                    <ContactInfoIcon>
                      <FaMapMarkerAlt />
                    </ContactInfoIcon>
                    <div>
                      <ContactInfoItemTitle>Dirección</ContactInfoItemTitle>
                      <ContactInfoItemText>
                        Lecheria, Anzoategui, Venezuela
                      </ContactInfoItemText>
                    </div>
                  </ContactInfoItem>
                  
                  <ContactInfoItem>
                    <ContactInfoIcon>
                      <FaPhone />
                    </ContactInfoIcon>
                    <div>
                      <ContactInfoItemTitle>Teléfono</ContactInfoItemTitle>
                      <ContactInfoItemText>
                        <a href="tel:+5804127359010">+58 (412) 735-9010</a>
                      </ContactInfoItemText>
                    </div>
                  </ContactInfoItem>
                  
                  <ContactInfoItem>
                    <ContactInfoIcon>
                      <FaEnvelope />
                    </ContactInfoIcon>
                    <div>
                      <ContactInfoItemTitle>Email</ContactInfoItemTitle>
                      <ContactInfoItemText>
                        <a href="mailto:nextechnologyadm@gmail.com">NexTechnologyadm@gmail.com</a>
                      </ContactInfoItemText>
                    </div>
                  </ContactInfoItem>
                  
                  <ContactInfoItem>
                    <ContactInfoIcon>
                      <FaClock />
                    </ContactInfoIcon>
                    <div>
                      <ContactInfoItemTitle>Horario</ContactInfoItemTitle>
                      <ContactInfoItemText>
                        Lunes a Viernes: 9:00 AM - 5:00 PM
                      </ContactInfoItemText>
                    </div>
                  </ContactInfoItem>
                </ContactInfoList>
                
                <SocialLinks>
                  <SocialLink href="https://facebook.com/profile.php?id=61578032737494" target="_blank" rel="noopener noreferrer">
                    <FaFacebook />
                  </SocialLink>
                  <SocialLink href="https://instagram.com/nextechnology_ve/" target="_blank" rel="noopener noreferrer">
                    <FaInstagram />
                  </SocialLink>
                </SocialLinks>
              </FadeInWhenVisible>
            </ContactInfoContainer>
            
            <ContactFormContainer>
              <FadeInWhenVisible delay={0.2}>
                <ContactForm onSubmit={handleSubmit}>
                  <FormTitle>Envíanos un mensaje</FormTitle>
                  
                  <FormGrid>
                    <FormGroup>
                      <FormLabel htmlFor="name">Nombre Completo</FormLabel>
                      <FormInput
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </FormGroup>
                    
                    <FormGroup>
                      <FormLabel htmlFor="email">Correo Electrónico</FormLabel>
                      <FormInput
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </FormGroup>
                    
                    <FormGroup>
                      <FormLabel htmlFor="phone">Teléfono</FormLabel>
                      <FormInput
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </FormGroup>
                    
                    <FormGroup>
                      <FormLabel htmlFor="subject">Asunto</FormLabel>
                      <FormInput
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                      />
                    </FormGroup>
                  </FormGrid>
                  
                  <FormGroup>
                    <FormLabel htmlFor="message">Mensaje</FormLabel>
                    <FormTextarea
                      id="message"
                      name="message"
                      rows="6"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </FormGroup>
                  
                  {formStatus.message && (
                    <FormMessage error={formStatus.error}>
                      {formStatus.message}
                    </FormMessage>
                  )}
                  
                  <FormButton type="submit">Enviar Mensaje</FormButton>
                </ContactForm>
              </FadeInWhenVisible>
            </ContactFormContainer>
          </ContactGrid>
        </div>
      </section>

      <MapSection>
        <MapPlaceholder>
          <MapText>Mapa de ubicación</MapText>
        </MapPlaceholder>
      </MapSection>
    </>
  );
};

// Page Header Styles
const PageHeader = styled.header`
  background: ${({ bgImage }) => bgImage ? `url(${bgImage}) center/cover no-repeat` : 'linear-gradient(135deg, #2C2C54 0%, #0A0A2A 100%)'};
  padding: 180px 0 80px;
  text-align: center;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(10, 10, 42, 0.8); /* Overlay oscuro para mejorar legibilidad */
    z-index: 1;
  }
  
  .container {
    position: relative;
    z-index: 2; /* Asegura que el contenido esté por encima del overlay */
  }
`;

const PageTitle = styled.h1`
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 20px;
  background: linear-gradient(to right, #FFFFFF, #00BFFF);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 2.5rem;
  }
`;

const PageDescription = styled.p`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.lightGray};
  max-width: 700px;
  margin: 0 auto;
`;

// Contact Grid Styles
const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 40px;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
  }
`;

// Contact Info Styles
const ContactInfoContainer = styled.div`
  background: linear-gradient(135deg, #2C2C54 0%, #0A0A2A 100%);
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  padding: 40px;
  height: 100%;
`;

const ContactInfoTitle = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.colors.white};
`;

const ContactInfoText = styled.p`
  color: ${({ theme }) => theme.colors.lightGray};
  margin-bottom: 30px;
`;

const ContactInfoList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  margin-bottom: 40px;
`;

const ContactInfoItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 15px;
`;

const ContactInfoIcon = styled.div`
  width: 40px;
  height: 40px;
  background: rgba(0, 191, 255, 0.1);
  border-radius: ${({ theme }) => theme.borderRadius.round};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.accentCyan};
  font-size: 1.2rem;
`;

const ContactInfoItemTitle = styled.h4`
  font-size: 1.1rem;
  margin-bottom: 5px;
  color: ${({ theme }) => theme.colors.white};
`;

const ContactInfoItemText = styled.p`
  color: ${({ theme }) => theme.colors.lightGray};
  font-size: 0.95rem;
  
  a {
    color: ${({ theme }) => theme.colors.lightGray};
    transition: color 0.3s ease;
    
    &:hover {
      color: ${({ theme }) => theme.colors.accentCyan};
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 15px;
`;

const SocialLink = styled.a`
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: ${({ theme }) => theme.borderRadius.round};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.white};
  font-size: 1.2rem;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${({ theme }) => theme.colors.accentCyan};
    color: ${({ theme }) => theme.colors.darkBlue};
    transform: translateY(-3px);
  }
`;

// Contact Form Styles
const ContactFormContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.midBlue};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  padding: 40px;
  box-shadow: ${({ theme }) => theme.shadows.medium};
`;

const ContactForm = styled.form``;

const FormTitle = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 30px;
  color: ${({ theme }) => theme.colors.white};
`;

const FormGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const FormLabel = styled.label`
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.lightGray};
`;

const FormInput = styled.input`
  width: 100%;
  padding: 12px 15px;
  background-color: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: ${({ theme }) => theme.borderRadius.small};
  color: ${({ theme }) => theme.colors.white};
  font-size: 1rem;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.accentCyan};
    box-shadow: 0 0 0 2px rgba(0, 191, 255, 0.2);
  }
`;

const FormTextarea = styled.textarea`
  width: 100%;
  padding: 12px 15px;
  background-color: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: ${({ theme }) => theme.borderRadius.small};
  color: ${({ theme }) => theme.colors.white};
  font-size: 1rem;
  resize: vertical;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.accentCyan};
    box-shadow: 0 0 0 2px rgba(0, 191, 255, 0.2);
  }
`;

const FormMessage = styled.div`
  padding: 12px 15px;
  margin-bottom: 20px;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  background-color: ${({ error }) => error ? 'rgba(255, 0, 0, 0.1)' : 'rgba(0, 255, 0, 0.1)'};
  border: 1px solid ${({ error }) => error ? 'rgba(255, 0, 0, 0.3)' : 'rgba(0, 255, 0, 0.3)'};
  color: ${({ error }) => error ? '#ff6b6b' : '#69db7c'};
`;

const FormButton = styled.button`
  background: linear-gradient(to right, #00BFFF, #8A2BE2);
  color: white;
  font-weight: 600;
  padding: 12px 30px;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  cursor: pointer;
  transition: all 0.3s ease;
  border: none;
  font-size: 1rem;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(0, 191, 255, 0.5);
  }
`;

// Map Section Styles
const MapSection = styled.section`
  margin-top: 80px;
  height: 400px;
`;

const MapPlaceholder = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.midBlue};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MapText = styled.p`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.lightGray};
`;

export default Contact;