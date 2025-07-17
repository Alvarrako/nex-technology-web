import React from 'react';
import styled from 'styled-components';

const SectionTitle = ({ title, subtitle, light = false }) => {
  return (
    <TitleContainer light={light}>
      <Title light={light}>{title}</Title>
      {subtitle && <Subtitle light={light}>{subtitle}</Subtitle>}
    </TitleContainer>
  );
};

const TitleContainer = styled.div`
  text-align: center;
  margin-bottom: 40px;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 15px;
  position: relative;
  display: inline-block;
  color: ${({ light, theme }) => light ? theme.colors.white : theme.colors.white};
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 3px;
    background: linear-gradient(to right, ${({ theme }) => theme.colors.accentCyan}, ${({ theme }) => theme.colors.accentPurple});
    border-radius: 3px;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 2rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.1rem;
  max-width: 600px;
  margin: 20px auto 0;
  color: ${({ light, theme }) => light ? 'rgba(255, 255, 255, 0.8)' : theme.colors.lightGray};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 1rem;
  }
`;

export default SectionTitle;