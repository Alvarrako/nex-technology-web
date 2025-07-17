import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import FadeInWhenVisible from '../components/FadeInWhenVisible';

const Catalog = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'Todos' },
    { id: 'web-apps', name: 'Aplicaciones Web' },
    { id: 'mobile-apps', name: 'Aplicaciones Móviles' },
    { id: 'desktop-apps', name: 'Aplicaciones de Escritorio' },
    { id: 'automation', name: 'Automatización' },
    { id: 'inventory', name: 'Inventario' },
    { id: 'chatbots', name: 'Chatbots con IA' },
    { id: 'ai-integration', name: 'Integración de IA' },
    { id: 'database', name: 'Bases de Datos' },
    { id: 'employee-apps', name: 'Aplicaciones para Empleados' },
  ];

  const services = [
    {
      id: 1,
      title: 'Desarrollo de Página Web Personalizada',
      description: 'En Nex-Technology, ayudamos a gestionar tus ideas y aplicaciones web personalizadas que ayudarán a impulsar la eficiencia y el crecimiento de tu negocio.',
      category: 'web-apps',
      imageNumber: 1
    },
    {
      id: 2,
      title: 'Desarrollo de Aplicaciones Multiplataforma',
      description: 'En Nex-Technology, se desarrollan aplicaciones para diversos sistemas operativos y dispositivos, ofreciendo una experiencia de usuario consistente y de alto rendimiento.',
      category: 'mobile-apps', // Also could be desktop-apps, but fits mobile given the image
      imageNumber: 2
    },
    {
      id: 3,
      title: 'Desarrollo de Aplicaciones Móviles',
      description: 'En Nex-Technology, creamos aplicaciones móviles intuitivas y de alto rendimiento, diseñadas para potenciar la gestión de su negocio directamente desde móviles.',
      category: 'mobile-apps',
      imageNumber: 3
    },
    {
      id: 4,
      title: 'Desarrollo de Aplicaciones de Escritorio',
      description: 'En Nex Technology, creamos aplicaciones de escritorio para Windows diseñadas para optimizar las operaciones internas de su empresa con fiabilidad y eficiencia.',
      category: 'desktop-apps',
      imageNumber: 4
    },
    {
      id: 5,
      title: 'Desarrollo de Aplicación para Empleados',
      description: 'Nex-Technology desarrolla soluciones para monitoreo de empleados diseñadas para mejorar la productividad, la seguridad y la eficiencia operativa de su empresa.',
      category: 'employee-apps',
      imageNumber: 5
    },
    {
      id: 6,
      title: 'Desarrollo de Programa de Inventario',
      description: 'En Nex-Technology, desarrollamos sistemas de gestión de inventario personalizados que le permiten tener un control total y preciso sobre sus activos y existencias.',
      category: 'inventory',
      imageNumber: 6
    },
    {
      id: 7,
      title: 'Desarrollo de Programa de Automatización',
      description: 'En Nex-Technology implementamos soluciones de Automatización Robótica de Procesos (RPA) para permitir enfocarse en actividades de mayor valor estratégico.',
      category: 'automation',
      imageNumber: 7
    },
    {
      id: 8,
      title: 'Desarrollo de Programa de Chatbots con IA',
      description: 'En Nex-Technology, implementamos soluciones de automatización para la atención al cliente que transforman la forma en que su empresa interactúa con sus clientes.',
      category: 'chatbots',
      imageNumber: 8
    },
    {
      id: 9,
      title: 'Integración de IA para Aplicaciones',
      description: 'En Nex-Technology, potenciamos sus aplicaciones existentes o de nuevo desarrollo con la inteligencia artificial (IA).',
      category: 'ai-integration',
      imageNumber: 9
    },
    {
      id: 10,
      title: 'Servicio y Diseño de Bases de Datos',
      description: 'En Nex-Technology, somos expertos en la gestión, optimización y análisis de bases de datos relacionales (SQL) y no relacionales (NoSQL).',
      category: 'database',
      imageNumber: 10
    },
    {
      id: 11,
      title: 'AWS para Servidores en la Nube',
      description: 'En Nex-Technology, aprovechamos el poder de Amazon Web Services (AWS), la plataforma líder en la nube, para ofrecer soluciones de infraestructura escalables, seguras y de alto rendimiento.',
      category: 'cloud-services',
      imageNumber: 11
    },
    {
      id: 12,
      title: 'Desarrollo de APIs para Aplicaciones',
      description: 'En Nex-Technology, construimos Interfaces de Programación de Aplicaciones (APIs) robustas y seguras que actúan como el puente de comunicación entre sus diferentes sistemas y aplicaciones.',
      category: 'api-development',
      imageNumber: 12
    },
    {
      id: 13,
      title: 'Desarrollo de Páginas Web con WordPress',
      description: 'En Nex-Technology, creamos sitios web profesionales y dinámicos utilizando WordPress, la plataforma de gestión de contenido (CMS) más popular del mundo.',
      category: 'wordpress',
      imageNumber: 13
    }
  ];

  const filteredServices = activeCategory === 'all' 
    ? services 
    : services.filter(service => service.category === activeCategory);

  return (
    <>
      <PageHeader bgImage="/images/landscape.png">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <PageTitle>Catálogo de Servicios</PageTitle>
            <PageDescription>
              Descubre nuestra amplia gama de soluciones tecnológicas diseñadas para impulsar tu negocio
            </PageDescription>
          </motion.div>
        </div>
      </PageHeader>

      <section>
        <div className="container">
          <FadeInWhenVisible>
            <SectionTitle
              title="Nuestros Servicios"
              subtitle="Soluciones tecnológicas adaptadas a las necesidades de tu empresa"
            />
          </FadeInWhenVisible>

          <CategoryFilter>
            {categories.map(category => (
              <CategoryButton
                key={category.id}
                active={activeCategory === category.id}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
              </CategoryButton>
            ))}
          </CategoryFilter>

          <ServicesGrid>
            {filteredServices.map((service, index) => (
              <FadeInWhenVisible key={service.id} delay={index * 0.1}>
                <ServiceCard>
                  <ServiceImageContainer>
                    <ServiceImage src={`/images/${service.imageNumber}.png`} alt={service.title} />
                  </ServiceImageContainer>
                  <ServiceContent>
                    <ServiceTitle>{service.title}</ServiceTitle>
                    <ServiceDescription>{service.description}</ServiceDescription>
                    <ServiceButton>Más Información</ServiceButton>
                  </ServiceContent>
                </ServiceCard>
              </FadeInWhenVisible>
            ))}
          </ServicesGrid>
        </div>
      </section>

      <CTASection>
        <div className="container">
          <FadeInWhenVisible>
            <CTAContent>
              <CTATitle>¿Necesitas una solución personalizada?</CTATitle>
              <CTADescription>
                Contáctanos para discutir tus necesidades específicas y desarrollar una solución a medida para tu empresa.
              </CTADescription>
              <CTAButton to="/contacto">Solicitar Consulta</CTAButton>
            </CTAContent>
          </FadeInWhenVisible>
        </div>
      </CTASection>
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

// Category Filter Styles
const CategoryFilter = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px;
  margin-bottom: 40px;
`;

const CategoryButton = styled.button`
  background: ${({ active, theme }) => 
    active ? `linear-gradient(to right, ${theme.colors.accentCyan}, ${theme.colors.accentPurple})` : 'transparent'};
  color: ${({ active, theme }) => active ? theme.colors.white : theme.colors.lightGray};
  border: ${({ active, theme }) => active ? 'none' : `1px solid ${theme.colors.lightGray}`};
  padding: 10px 20px;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${({ active, theme }) => 
      active ? `linear-gradient(to right, ${theme.colors.accentCyan}, ${theme.colors.accentPurple})` : 'rgba(255, 255, 255, 0.1)'};
  }
`;

// Services Grid Styles
const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 30px;
  margin-top: 50px;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  }
`;

const ServiceCard = styled.div`
  background-color: ${({ theme }) => theme.colors.midBlue};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.small};
  transition: all 0.3s ease;
  height: 100%;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.shadows.medium};
  }
`;

const ServiceImageContainer = styled.div`
  height: 400px;
  overflow: hidden;
  border-radius: 100px;
`;

const ServiceImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  transition: transform 0.5s ease;
  
  ${ServiceCard}:hover & {
    transform: scale(1.05);
  }
`;

const ServiceContent = styled.div`
  padding: 25px;
`;

const ServiceTitle = styled.h3`
  font-size: 1.4rem;
  margin-bottom: 15px;
`;

const ServiceDescription = styled.p`
  color: ${({ theme }) => theme.colors.lightGray};
  margin-bottom: 20px;
`;

const ServiceButton = styled.button`
  background: transparent;
  color: ${({ theme }) => theme.colors.accentCyan};
  border: 1px solid ${({ theme }) => theme.colors.accentCyan};
  padding: 8px 20px;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${({ theme }) => theme.colors.accentCyan};
    color: ${({ theme }) => theme.colors.darkBlue};
  }
`;

// CTA Section Styles
const CTASection = styled.section`
  padding: 80px 0;
  background: linear-gradient(135deg, rgba(0, 191, 255, 0.1) 0%, rgba(138, 43, 226, 0.1) 100%);
  border-top: 1px solid rgba(0, 191, 255, 0.2);
  margin-top: 80px;
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

const CTAButton = styled.a`
  display: inline-block;
  background: linear-gradient(to right, #00BFFF, #8A2BE2);
  color: white;
  font-weight: 600;
  padding: 12px 28px;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 191, 255, 0.3);
  cursor: pointer;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(0, 191, 255, 0.5);
    color: white;
  }
`;

export default Catalog;