import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaQuoteRight, FaStar } from 'react-icons/fa';
import SectionTitle from '../components/SectionTitle';
import FadeInWhenVisible from '../components/FadeInWhenVisible';

const Clients = () => {
  const clients = [
    {
      id: 1,
      name: 'TechCorp',
      industry: 'Tecnología',
      description: 'Empresa líder en desarrollo de software empresarial.',
      logo: 'blue' // Placeholder color
    },
    {
      id: 2,
      name: 'FinanceHub',
      industry: 'Finanzas',
      description: 'Servicios financieros digitales para empresas y particulares.',
      logo: 'darkblue' // Placeholder color
    },
    {
      id: 3,
      name: 'HealthPlus',
      industry: 'Salud',
      description: 'Red de clínicas y servicios médicos digitales.',
      logo: 'lightblue' // Placeholder color
    },
    {
      id: 4,
      name: 'EduLearn',
      industry: 'Educación',
      description: 'Plataforma de aprendizaje online para estudiantes y profesionales.',
      logo: 'navy' // Placeholder color
    },
    {
      id: 5,
      name: 'RetailMax',
      industry: 'Comercio',
      description: 'Cadena de tiendas con presencia física y digital.',
      logo: 'royalblue' // Placeholder color
    },
    {
      id: 6,
      name: 'LogisTrans',
      industry: 'Logística',
      description: 'Servicios de transporte y logística internacional.',
      logo: 'steelblue' // Placeholder color
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: 'Carlos Rodríguez',
      position: 'CTO, TechCorp',
      content: 'La implementación del sistema de gestión empresarial desarrollado por Nex-Technology ha transformado completamente nuestros procesos internos. La eficiencia ha aumentado en un 40% y la satisfacción de nuestros empleados ha mejorado significativamente.',
      rating: 5,
      image: 'blue' // Placeholder color
    },
    {
      id: 2,
      name: 'Laura Martínez',
      position: 'CEO, FinanceHub',
      content: 'Gracias a la consultoría en ciberseguridad de Nex-Technology, hemos fortalecido nuestras defensas contra ataques informáticos. Su equipo demostró un conocimiento profundo y nos proporcionó soluciones adaptadas a nuestras necesidades específicas.',
      rating: 5,
      image: 'darkblue' // Placeholder color
    },
    {
      id: 3,
      name: 'Miguel Sánchez',
      position: 'Director de Innovación, HealthPlus',
      content: 'La aplicación móvil desarrollada por Nex-Technology ha revolucionado la forma en que nuestros pacientes acceden a nuestros servicios. La interfaz intuitiva y el rendimiento excepcional han superado nuestras expectativas.',
      rating: 4,
      image: 'lightblue' // Placeholder color
    }
  ];

  const projects = [
    {
      id: 1,
      client: 'TechCorp',
      title: 'Sistema de Gestión Empresarial',
      description: 'Desarrollo e implementación de un sistema integral para la gestión de recursos, proyectos y clientes.',
      image: 'blue' // Placeholder color
    },
    {
      id: 2,
      client: 'FinanceHub',
      title: 'Plataforma de Seguridad Financiera',
      description: 'Implementación de un sistema avanzado de ciberseguridad para proteger transacciones y datos sensibles.',
      image: 'darkblue' // Placeholder color
    },
    {
      id: 3,
      client: 'HealthPlus',
      title: 'Aplicación Móvil de Servicios Médicos',
      description: 'Desarrollo de una aplicación móvil para la gestión de citas, consultas virtuales y seguimiento de tratamientos.',
      image: 'lightblue' // Placeholder color
    }
  ];

  return (
    <>
      <PageHeader bgImage="%PUBLIC_URL%/images/landscape.png">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <PageTitle>Nuestros Clientes</PageTitle>
            <PageDescription>
              Empresas que confían en nuestras soluciones tecnológicas para impulsar su crecimiento
            </PageDescription>
          </motion.div>
        </div>
      </PageHeader>

      {/* Clients Section */}
      <section>
        <div className="container">
          <FadeInWhenVisible>
            <SectionTitle
              title="Empresas que confían en nosotros"
              subtitle="Trabajamos con organizaciones de diversos sectores para impulsar su transformación digital"
            />
          </FadeInWhenVisible>

          <ClientsGrid>
            {clients.map((client, index) => (
              <FadeInWhenVisible key={client.id} delay={index * 0.1}>
                <ClientCard>
                  <ClientLogo color={client.logo}>
                    {client.name.substring(0, 1)}
                  </ClientLogo>
                  <ClientInfo>
                    <ClientName>{client.name}</ClientName>
                    <ClientIndustry>{client.industry}</ClientIndustry>
                    <ClientDescription>{client.description}</ClientDescription>
                  </ClientInfo>
                </ClientCard>
              </FadeInWhenVisible>
            ))}
          </ClientsGrid>
        </div>
      </section>

      {/* Case Studies Section */}
      <CaseStudiesSection>
        <div className="container">
          <FadeInWhenVisible>
            <SectionTitle
              title="Casos de Éxito"
              subtitle="Proyectos destacados que han generado resultados excepcionales"
              light
            />
          </FadeInWhenVisible>

          <CaseStudiesGrid>
            {projects.map((project, index) => (
              <FadeInWhenVisible key={project.id} delay={index * 0.1}>
                <CaseStudyCard>
                  <CaseStudyImageContainer>
                    <CaseStudyImage color={project.image} />
                  </CaseStudyImageContainer>
                  <CaseStudyContent>
                    <CaseStudyClient>{project.client}</CaseStudyClient>
                    <CaseStudyTitle>{project.title}</CaseStudyTitle>
                    <CaseStudyDescription>{project.description}</CaseStudyDescription>
                    <CaseStudyButton>Ver Caso Completo</CaseStudyButton>
                  </CaseStudyContent>
                </CaseStudyCard>
              </FadeInWhenVisible>
            ))}
          </CaseStudiesGrid>
        </div>
      </CaseStudiesSection>

      {/* Testimonials Section */}
      <section>
        <div className="container">
          <FadeInWhenVisible>
            <SectionTitle
              title="Lo que dicen nuestros clientes"
              subtitle="Testimonios de empresas que han experimentado el impacto de nuestras soluciones"
            />
          </FadeInWhenVisible>

          <TestimonialsGrid>
            {testimonials.map((testimonial, index) => (
              <FadeInWhenVisible key={testimonial.id} delay={index * 0.1}>
                <TestimonialCard>
                  <QuoteIcon>
                    <FaQuoteRight />
                  </QuoteIcon>
                  <TestimonialContent>
                    {testimonial.content}
                  </TestimonialContent>
                  <TestimonialRating>
                    {[...Array(5)].map((_, i) => (
                      <StarIcon key={i} active={i < testimonial.rating}>
                        <FaStar />
                      </StarIcon>
                    ))}
                  </TestimonialRating>
                  <TestimonialAuthorContainer>
                    <TestimonialAuthorImage color={testimonial.image} />
                    <TestimonialAuthorInfo>
                      <TestimonialAuthorName>{testimonial.name}</TestimonialAuthorName>
                      <TestimonialAuthorPosition>{testimonial.position}</TestimonialAuthorPosition>
                    </TestimonialAuthorInfo>
                  </TestimonialAuthorContainer>
                </TestimonialCard>
              </FadeInWhenVisible>
            ))}
          </TestimonialsGrid>
        </div>
      </section>

      {/* Call to Action Section */}
      <CTASection>
        <div className="container">
          <FadeInWhenVisible>
            <CTAContent>
              <CTATitle>¿Listo para unirte a nuestra lista de clientes satisfechos?</CTATitle>
              <CTADescription>
                Contáctanos hoy mismo y descubre cómo podemos ayudarte a alcanzar tus objetivos tecnológicos.
              </CTADescription>
              <CTAButton to="/contacto">Solicitar Información</CTAButton>
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

// Clients Section Styles
const ClientsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 30px;
  margin-top: 50px;
`;

const ClientCard = styled.div`
  background-color: ${({ theme }) => theme.colors.midBlue};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  padding: 30px;
  display: flex;
  align-items: center;
  gap: 20px;
  transition: all 0.3s ease;
  box-shadow: ${({ theme }) => theme.shadows.small};
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.shadows.medium};
  }
`;

const ClientLogo = styled.div`
  width: 70px;
  height: 70px;
  border-radius: ${({ theme }) => theme.borderRadius.round};
  background-color: ${({ color }) => color || '#00BFFF'};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  font-weight: 700;
  color: white;
  flex-shrink: 0;
`;

const ClientInfo = styled.div``;

const ClientName = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 5px;
`;

const ClientIndustry = styled.p`
  color: ${({ theme }) => theme.colors.accentCyan};
  font-size: 0.9rem;
  margin-bottom: 10px;
`;

const ClientDescription = styled.p`
  color: ${({ theme }) => theme.colors.lightGray};
  font-size: 0.95rem;
`;

// Case Studies Section Styles
const CaseStudiesSection = styled.section`
  background-color: ${({ theme }) => theme.colors.midBlue};
  margin-top: 80px;
  padding: 80px 0;
`;

const CaseStudiesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 30px;
  margin-top: 50px;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

const CaseStudyCard = styled.div`
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  overflow: hidden;
  transition: all 0.3s ease;
  box-shadow: ${({ theme }) => theme.shadows.small};
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.shadows.medium};
  }
`;

const CaseStudyImageContainer = styled.div`
  height: 200px;
  overflow: hidden;
`;

const CaseStudyImage = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ color }) => color || '#00BFFF'};
`;

const CaseStudyContent = styled.div`
  padding: 25px;
`;

const CaseStudyClient = styled.p`
  color: ${({ theme }) => theme.colors.accentCyan};
  font-size: 0.9rem;
  margin-bottom: 10px;
`;

const CaseStudyTitle = styled.h3`
  font-size: 1.4rem;
  margin-bottom: 15px;
`;

const CaseStudyDescription = styled.p`
  color: ${({ theme }) => theme.colors.lightGray};
  margin-bottom: 20px;
`;

const CaseStudyButton = styled.button`
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

// Testimonials Section Styles
const TestimonialsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 30px;
  margin-top: 50px;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

const TestimonialCard = styled.div`
  background-color: ${({ theme }) => theme.colors.midBlue};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  padding: 30px;
  position: relative;
  transition: all 0.3s ease;
  box-shadow: ${({ theme }) => theme.shadows.small};
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.shadows.medium};
  }
`;

const QuoteIcon = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  color: rgba(0, 191, 255, 0.1);
  font-size: 2rem;
`;

const TestimonialContent = styled.p`
  color: ${({ theme }) => theme.colors.lightGray};
  font-size: 1rem;
  line-height: 1.7;
  margin-bottom: 20px;
`;

const TestimonialRating = styled.div`
  display: flex;
  gap: 5px;
  margin-bottom: 20px;
`;

const StarIcon = styled.div`
  color: ${({ active, theme }) => active ? theme.colors.accentCyan : 'rgba(255, 255, 255, 0.2)'};
  font-size: 1rem;
`;

const TestimonialAuthorContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const TestimonialAuthorImage = styled.div`
  width: 50px;
  height: 50px;
  border-radius: ${({ theme }) => theme.borderRadius.round};
  background-color: ${({ color }) => color || '#00BFFF'};
`;

const TestimonialAuthorInfo = styled.div``;

const TestimonialAuthorName = styled.h4`
  font-size: 1.1rem;
  margin-bottom: 5px;
`;

const TestimonialAuthorPosition = styled.p`
  color: ${({ theme }) => theme.colors.accentCyan};
  font-size: 0.9rem;
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

export default Clients;