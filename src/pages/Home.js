import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaRocket, FaLaptopCode, FaShieldAlt, FaChartLine } from 'react-icons/fa';
import SectionTitle from '../components/SectionTitle';
import FadeInWhenVisible from '../components/FadeInWhenVisible';

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <HeroSection>
        <div className="container">
          <HeroContent>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <HeroTitle>Soluciones Tecnológicas <br />para el Futuro</HeroTitle>
              <HeroSubtitle>
                Transformamos ideas en soluciones digitales innovadoras
              </HeroSubtitle>
              <HeroButtons>
                <PrimaryButton to="/catalogo">Ver Catálogo</PrimaryButton>
                <SecondaryButton to="/contacto">Contáctanos</SecondaryButton>
              </HeroButtons>
            </motion.div>
            <HeroImageContainer>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <HeroImagePlaceholder />
              </motion.div>
            </HeroImageContainer>
          </HeroContent>
        </div>
        <HeroWave xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#0A0A2A" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,128C672,128,768,160,864,176C960,192,1056,192,1152,170.7C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </HeroWave>
      </HeroSection>

      {/* Services Overview Section */}
      <section>
        <div className="container">
          <FadeInWhenVisible>
            <SectionTitle
              title="Nuestros Servicios"
              subtitle="Soluciones tecnológicas adaptadas a tus necesidades"
            />
          </FadeInWhenVisible>

          <ServicesGrid>
            <FadeInWhenVisible delay={0.1}>
              <ServiceCard>
                <ServiceIcon>
                  <FaLaptopCode />
                </ServiceIcon>
                <ServiceTitle>Desarrollo de Software</ServiceTitle>
                <ServiceDescription>
                  Creamos aplicaciones personalizadas que impulsan la eficiencia y productividad de tu negocio.
                </ServiceDescription>
                <ServiceLink to="/catalogo">Saber más</ServiceLink>
              </ServiceCard>
            </FadeInWhenVisible>

            <FadeInWhenVisible delay={0.2}>
              <ServiceCard>
                <ServiceIcon>
                  <FaRocket />
                </ServiceIcon>
                <ServiceTitle>Consultoría IT</ServiceTitle>
                <ServiceDescription>
                  Asesoramiento estratégico para optimizar tu infraestructura tecnológica y procesos digitales.
                </ServiceDescription>
                <ServiceLink to="/catalogo">Saber más</ServiceLink>
              </ServiceCard>
            </FadeInWhenVisible>

            <FadeInWhenVisible delay={0.3}>
              <ServiceCard>
                <ServiceIcon>
                  <FaShieldAlt />
                </ServiceIcon>
                <ServiceTitle>Ciberseguridad</ServiceTitle>
                <ServiceDescription>
                  Protegemos tu información y sistemas con soluciones avanzadas de seguridad informática.
                </ServiceDescription>
                <ServiceLink to="/catalogo">Saber más</ServiceLink>
              </ServiceCard>
            </FadeInWhenVisible>

            <FadeInWhenVisible delay={0.4}>
              <ServiceCard>
                <ServiceIcon>
                  <FaChartLine />
                </ServiceIcon>
                <ServiceTitle>Análisis de Datos</ServiceTitle>
                <ServiceDescription>
                  Convertimos tus datos en información valiosa para la toma de decisiones estratégicas.
                </ServiceDescription>
                <ServiceLink to="/catalogo">Saber más</ServiceLink>
              </ServiceCard>
            </FadeInWhenVisible>
          </ServicesGrid>
          
          <FadeInWhenVisible>
            <CenteredButton>
              <PrimaryButton to="/catalogo">Ver todos los servicios</PrimaryButton>
            </CenteredButton>
          </FadeInWhenVisible>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <WhyChooseUsSection>
        <div className="container">
          <FadeInWhenVisible>
            <SectionTitle
              title="¿Por qué elegirnos?"
              subtitle="Ventajas que nos distinguen en el mercado"
              light
            />
          </FadeInWhenVisible>

          <WhyChooseUsGrid>
            <FadeInWhenVisible>
              <WhyChooseUsCard>
                <WhyChooseUsNumber>01</WhyChooseUsNumber>
                <WhyChooseUsTitle>Trabajadores con experiencia de calidad</WhyChooseUsTitle>
                <WhyChooseUsDescription>
                  Nuestros trabajadores cuentan con años de experiencia en el sector, garantizando soluciones de alta calidad.
                </WhyChooseUsDescription>
              </WhyChooseUsCard>
            </FadeInWhenVisible>

            <FadeInWhenVisible delay={0.1}>
              <WhyChooseUsCard>
                <WhyChooseUsNumber>02</WhyChooseUsNumber>
                <WhyChooseUsTitle>Herramientas de ultima tecnologia</WhyChooseUsTitle>
                <WhyChooseUsDescription>
                  Nuestros profecionales y equipo utilizan y cuentan con la ultima tecnologia en el mercado dando una ventaja competitiva y moderna a tu negocio.
                </WhyChooseUsDescription>
              </WhyChooseUsCard>
            </FadeInWhenVisible>

            <FadeInWhenVisible delay={0.2}>
              <WhyChooseUsCard>
                <WhyChooseUsNumber>03</WhyChooseUsNumber>
                <WhyChooseUsTitle>Soluciones Personalizadas</WhyChooseUsTitle>
                <WhyChooseUsDescription>
                  Adaptamos nuestros servicios a las necesidades específicas de cada cliente, nuestra política se basa en que el cliente siempre tiene la razón.
                </WhyChooseUsDescription>
              </WhyChooseUsCard>
            </FadeInWhenVisible>

            <FadeInWhenVisible delay={0.3}>
              <WhyChooseUsCard>
                <WhyChooseUsNumber>04</WhyChooseUsNumber>
                <WhyChooseUsTitle>Soporte Continuo</WhyChooseUsTitle>
                <WhyChooseUsDescription>
                  Acompañamiento y asistencia técnica permanente para garantizar el éxito de tu proyecto y responsabilidad ante cualquier inconveniente.
                </WhyChooseUsDescription>
              </WhyChooseUsCard>
            </FadeInWhenVisible>
            <FadeInWhenVisible delay={0.4}>
              <WhyChooseUsCard>
                <WhyChooseUsNumber>05</WhyChooseUsNumber>
                <WhyChooseUsTitle>Compromiso con la Innovación</WhyChooseUsTitle>
                <WhyChooseUsDescription>
                  Estamos siempre a la vanguardia, implementando las últimas tendencias y tecnologías para ofrecer soluciones innovadoras.
                </WhyChooseUsDescription>
              </WhyChooseUsCard>
            </FadeInWhenVisible>
            <FadeInWhenVisible delay={0.5}>
              <WhyChooseUsCard>
                <WhyChooseUsNumber>06</WhyChooseUsNumber>
                <WhyChooseUsTitle>Resultados Medibles</WhyChooseUsTitle>
                <WhyChooseUsDescription>
                  Nos enfocamos en generar resultados tangibles y medibles que impulsen el crecimiento y la eficiencia de tu negocio.
                </WhyChooseUsDescription>
              </WhyChooseUsCard>
            </FadeInWhenVisible>
          </WhyChooseUsGrid>
        </div>
      </WhyChooseUsSection>


      {/* Call to Action Section */}
      <CTASection>
        <div className="container">
          <FadeInWhenVisible>
            <CTAContent>
              <CTATitle>¿Listo para transformar tu negocio?</CTATitle>
              <CTADescription>
                Contáctanos hoy mismo y descubre cómo nuestras soluciones tecnológicas pueden impulsar tu empresa.
              </CTADescription>
              <CTAButton to="/contacto">Solicitar Información</CTAButton>
            </CTAContent>
          </FadeInWhenVisible>
        </div>
      </CTASection>
    </>
  );
};

// Hero Section Styles
const HeroSection = styled.section`
  position: relative;
  background: url('%PUBLIC_URL%/images/landscape.png') center/cover no-repeat;
  padding: 180px 0 100px;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(10, 10, 42, 0.8); /* Overlay oscuro para mejorar legibilidad */
  }
`;

const HeroContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 40px;
  position: relative;
  z-index: 2; /* Asegura que todo el contenido esté por encima de la onda */
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const HeroTitle = styled.h1`
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 20px;
  background: linear-gradient(to right, #FFFFFF, #00BFFF);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 1.2;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 2.5rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.2rem;
  margin-bottom: 30px;
  color: ${({ theme }) => theme.colors.lightGray};
  max-width: 500px;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    margin: 0 auto 30px;
  }
`;

const HeroButtons = styled.div`
  display: flex;
  gap: 15px;
  position: relative;
  z-index: 2; /* Asegura que los botones estén por encima de la onda */
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    justify-content: center;
  }content: center;
  }
`;

const PrimaryButton = styled(Link)`
  display: inline-block;
  background: linear-gradient(to right, #00BFFF, #8A2BE2);
  color: white;
  font-weight: 600;
  padding: 12px 28px;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 191, 255, 0.3);
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(0, 191, 255, 0.5);
    color: white;
  }
`;

const SecondaryButton = styled(Link)`
  display: inline-block;
  background: transparent;
  color: white;
  font-weight: 600;
  padding: 12px 28px;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  border: 2px solid #00BFFF;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(0, 191, 255, 0.1);
    color: white;
  }
`;

const HeroImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HeroImagePlaceholder = styled.div`
  width: 100%;
  height: 400px;
  background: linear-gradient(135deg, rgba(0, 191, 255, 0.2) 0%, rgba(138, 43, 226, 0.2) 100%);
  border-radius: ${({ theme }) => theme.borderRadius.large};
  box-shadow: ${({ theme }) => theme.shadows.medium};
  position: relative;
  overflow: hidden;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(0, 191, 255, 0.1) 0%, rgba(138, 43, 226, 0.1) 100%);
    z-index: 1;
  }
`;

const HeroWave = styled.svg`
  position: absolute;
  bottom: -1px;
  left: 0;
  width: 100%;
  pointer-events: none; /* Permite que los clics pasen a través de la onda */
  z-index: 1;
`;

// Services Section Styles
const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 30px;
  margin-top: 50px;
`;

const ServiceCard = styled.div`
  background-color: ${({ theme }) => theme.colors.midBlue};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  padding: 30px;
  transition: all 0.3s ease;
  box-shadow: ${({ theme }) => theme.shadows.small};
  height: 100%;
  display: flex;
  flex-direction: column;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.shadows.medium};
  }
`;

const ServiceIcon = styled.div`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.accentCyan};
  margin-bottom: 20px;
`;

const ServiceTitle = styled.h3`
  font-size: 1.4rem;
  margin-bottom: 15px;
`;

const ServiceDescription = styled.p`
  color: ${({ theme }) => theme.colors.lightGray};
  margin-bottom: 20px;
  flex-grow: 1;
`;

const ServiceLink = styled(Link)`
  display: inline-block;
  font-weight: 600;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -3px;
    left: 0;
    width: 0;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.accentCyan};
    transition: width 0.3s ease;
  }
  
  &:hover::after {
    width: 100%;
  }
`;

const CenteredButton = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
`;

// Why Choose Us Section Styles
const WhyChooseUsSection = styled.section`
  background-color: ${({ theme }) => theme.colors.midBlue};
  margin-top: 80px;
  padding: 80px 0;
`;

const WhyChooseUsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 30px;
  margin-top: 50px;
`;

const WhyChooseUsCard = styled.div`
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  padding: 30px;
  transition: all 0.3s ease;
  border-left: 3px solid ${({ theme }) => theme.colors.accentCyan};
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

const WhyChooseUsNumber = styled.span`
  font-size: 3rem;
  font-weight: 800;
  color: rgba(255, 255, 255, 0.1);
  display: block;
  margin-bottom: 10px;
`;

const WhyChooseUsTitle = styled.h3`
  font-size: 1.4rem;
  margin-bottom: 15px;
`;

const WhyChooseUsDescription = styled.p`
  color: ${({ theme }) => theme.colors.lightGray};
`;

// CTA Section Styles
const CTASection = styled.section`
  padding: 80px 0;
  background: linear-gradient(135deg, rgba(0, 191, 255, 0.1) 0%, rgba(138, 43, 226, 0.1) 100%);
  border-top: 1px solid rgba(0, 191, 255, 0.2);
  border-bottom: 1px solid rgba(0, 191, 255, 0.2);
`;

const CTAContent = styled.div`
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
`;

const CTATitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 20px;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 2rem;
  }
`;

const CTADescription = styled.p`
  font-size: 1.2rem;
  margin-bottom: 30px;
  color: ${({ theme }) => theme.colors.lightGray};
`;

const CTAButton = styled(PrimaryButton)`
  padding: 15px 40px;
  font-size: 1.1rem;
`;

export default Home;